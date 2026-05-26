/* ═══════════════════════════════════════════════
   AnimaPrompt — AI Prompt Generator
   Vercel Serverless Function
   POST /api/generate
═══════════════════════════════════════════════ */

const VALID_CODES = {
  'CHAR2026': 'starter',
  'FULL2026': 'pro',
  'STUD2026': 'studio'
};

const DAILY_LIMITS = {
  starter: 5,
  pro: 25,
  studio: 100
};

/* Simple in-memory rate limit (resets on cold start — good enough for this scale) */
const rateLimitStore = {};

function checkRateLimit(code) {
  const today = new Date().toISOString().split('T')[0];
  const key = `${code}_${today}`;
  if (!rateLimitStore[key]) rateLimitStore[key] = 0;
  const plan = VALID_CODES[code];
  const limit = DAILY_LIMITS[plan] || 5;
  if (rateLimitStore[key] >= limit) return false;
  rateLimitStore[key]++;
  return true;
}

function buildSystemPrompt() {
  return `You are an expert AI prompt engineer specializing in cartoon and animation production.
You create professional, highly detailed prompts for AI tools used in cartoon filmmaking.

Your prompts must be:
- In English (AI tools work best with English prompts)
- Specific, vivid, and optimized for each tool
- Suitable for Arabic/Gulf cartoon aesthetic when relevant
- Professional and ready to use immediately

Always return ONLY valid JSON, no extra text or explanation outside the JSON.`;
}

function buildUserPrompt(data) {
  const { character, style, scene, action, mood, notes } = data;
  return `Create 4 professional AI prompts for a cartoon project with these specifications:

CHARACTER: ${character}
ART STYLE: ${style}
SCENE/LOCATION: ${scene}
ACTION/MOVEMENT: ${action || 'standing, slight movement'}
MOOD/EMOTION: ${mood}
EXTRA NOTES: ${notes || 'none'}

Generate the following 4 prompts and return as JSON:

{
  "midjourney": {
    "prompt": "Full Midjourney prompt with style tags, quality params, aspect ratio. Include: character details, art style, lighting, background, quality modifiers like --ar 16:9 --q 2 --v 6 at the end",
    "desc": "وصف عربي قصير (15 كلمة) يشرح ما سينتجه هذا البرومبت"
  },
  "chatgpt": {
    "prompt": "A detailed Arabic prompt for ChatGPT to write a cartoon script/story scene featuring this character — include tone, target audience, scene duration, dialogue style",
    "desc": "وصف عربي قصير (15 كلمة) يشرح ما سينتجه هذا البرومبت"
  },
  "runway": {
    "prompt": "Runway Gen-3/Gen-4 video generation prompt — cinematic, describe camera movement, lighting changes, character motion, scene atmosphere, max 2-3 sentences",
    "desc": "وصف عربي قصير (15 كلمة) يشرح ما سينتجه هذا البرومبت"
  },
  "pika": {
    "prompt": "Pika/Kling animation prompt — focus on specific motion, physics, timing, looping animation details, style consistency with the image",
    "desc": "وصف عربي قصير (15 كلمة) يشرح ما سينتجه هذا البرومبت"
  }
}

Make each prompt highly specific and immediately usable. The character style must be consistent across all 4 prompts.`;
}

export default async function handler(req, res) {
  /* CORS */
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { character, style, scene, action, mood, notes, accessCode } = req.body || {};

    /* Validate access code */
    const plan = VALID_CODES[(accessCode || '').toUpperCase().trim()];
    if (!plan) {
      return res.status(401).json({ error: 'invalid_code', message: 'كود الوصول غير صحيح' });
    }

    /* Validate required inputs */
    if (!character || character.trim().length < 5) {
      return res.status(400).json({ error: 'invalid_input', message: 'وصف الشخصية مطلوب (5 أحرف على الأقل)' });
    }
    if (character.length > 600 || (scene && scene.length > 400) || (notes && notes.length > 400)) {
      return res.status(400).json({ error: 'too_long', message: 'النص طويل جداً' });
    }

    /* Rate limit check */
    if (!checkRateLimit((accessCode || '').toUpperCase().trim())) {
      const limit = DAILY_LIMITS[plan];
      return res.status(429).json({
        error: 'rate_limit',
        message: `تجاوزت الحد اليومي (${limit} توليد/يوم) لباقتك. يتجدد الحد يومياً.`
      });
    }

    /* Call Claude API */
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'config_error', message: 'مفتاح API غير مضبوط' });
    }

    const claudeRes = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 1800,
        system: buildSystemPrompt(),
        messages: [{
          role: 'user',
          content: buildUserPrompt({ character, style, scene, action, mood, notes })
        }]
      })
    });

    if (!claudeRes.ok) {
      const err = await claudeRes.json().catch(() => ({}));
      console.error('Claude API error:', err);
      return res.status(502).json({ error: 'ai_error', message: 'خطأ في الاتصال بالذكاء الاصطناعي' });
    }

    const claudeData = await claudeRes.json();
    const rawText = claudeData.content?.[0]?.text || '';

    /* Parse JSON from Claude response */
    let prompts;
    try {
      const jsonMatch = rawText.match(/\{[\s\S]*\}/);
      prompts = JSON.parse(jsonMatch ? jsonMatch[0] : rawText);
    } catch {
      console.error('JSON parse error, raw:', rawText);
      return res.status(502).json({ error: 'parse_error', message: 'خطأ في معالجة الرد' });
    }

    /* Return success */
    return res.status(200).json({
      success: true,
      prompts,
      plan,
      remaining: DAILY_LIMITS[plan] - (rateLimitStore[`${(accessCode||'').toUpperCase().trim()}_${new Date().toISOString().split('T')[0]}`] || 0)
    });

  } catch (err) {
    console.error('Unhandled error:', err);
    return res.status(500).json({ error: 'server_error', message: 'خطأ في الخادم' });
  }
}
