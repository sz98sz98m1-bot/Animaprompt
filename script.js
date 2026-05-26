/* ═══════════════════════════════════════
   CONFIG — عدّل هنا لتخصيص الموقع
═══════════════════════════════════════ */
const CONFIG = {
  gumroad: {
    starter: 'https://animaprompt.gumroad.com/l/starter',
    pro:     'https://animaprompt.gumroad.com/l/pro',
    studio:  'https://animaprompt.gumroad.com/l/studio'
  },
  youtube: '', /* أضف رابط يوتيوب هنا مثال: 'https://www.youtube.com/embed/VIDEO_ID' */
  social: {
    telegram:  'https://t.me/animaprompt',
    twitter:   'https://twitter.com/animaprompt',
    youtube:   'https://youtube.com/@animaprompt',
    instagram: 'https://instagram.com/animaprompt'
  },
  accessCodes: {
    'CHAR2026': 'starter',
    'FULL2026': 'pro',
    'STUD2026': 'studio'
  },
  downloads: {
    starter: '#', /* رابط Google Drive للباقة الأساسية */
    pro:     '#', /* رابط Google Drive للباقة الكاملة  */
    studio:  '#'  /* رابط Google Drive لباقة الاستوديو */
  }
};

/* ═══════════════════════════════════════
   TRANSLATIONS
═══════════════════════════════════════ */
const LANG = {
  ar: {
    dir:'rtl', lang:'ar',
    'nav.how':'كيف يعمل','nav.packages':'الباقات','nav.workflow':'سير العمل',
    'nav.pricing':'الأسعار','nav.tools':'الأدوات','nav.faq':'الأسئلة',
    'nav.login':'تسجيل الدخول','nav.cta':'ابدأ مجاناً',
    'hero.badge':'جديد: Motion Pack v2.0 متاح الآن',
    'hero.line1':'حوّل أفكارك إلى','hero.line2':'أفلام كارتون','hero.line3':'باستخدام الـ AI',
    'hero.desc':'منصة برومبتات متكاملة لإنتاج كارتون احترافي — من بناء الشخصية إلى المشاهد إلى القصة إلى الحركة. كل شيء جاهز، انسخ والصق.',
    'hero.btn1':'ابدأ الإنتاج الآن','hero.btn2':'شوف كيف يعمل',
    'stats.users':'منشئ محتوى نشط','stats.prompts':'برومبت جاهز',
    'stats.steps':'خطوات فقط للإنتاج','stats.rating':'تقييم المستخدمين ★',
    'how.tag':'كيف يعمل النظام','how.h2':'4 خطوات من الفكرة إلى الفيديو الكارتوني',
    'how.p':'كل خطوة مبنية على السابقة — تسلسل منطقي ينتج نتائج احترافية',
    'video.tag':'شاهد بنفسك','video.h2':'طريقة الاشتراك والاستخدام',
    'video.p':'فيديو توضيحي يشرح كيف تشترك وتبدأ إنتاج كارتونك في أقل من 10 دقائق',
    'pkg.tag':'ما تحصل عليه','pkg.h2':'باقات البرومبتات',
    'pkg.p':'كل باقة تغطي خطوة كاملة — اشتر واحدة أو خذ الكل',
    'price.tag':'الأسعار','price.h2':'استثمار مرة واحدة، نتائج إلى الأبد',
    'price.p':'لا اشتراك شهري — ادفع مرة واحدة واستخدم إلى الأبد',
    'tools.tag':'الأدوات المطلوبة','tools.h2':'كل الأدوات التي تحتاجها لصناعة كارتونك',
    'tools.p':'اختر الأدوات المناسبة لكل خطوة من خطوات الإنتاج — كلها تعمل مع برومبتاتنا مباشرة',
    'testi.tag':'آراء العملاء','testi.h2':'ماذا قال منشئو المحتوى',
    'faq.tag':'الأسئلة الشائعة','faq.h2':'عندك سؤال؟',
    'cta.tag':'🎬 ابدأ اليوم',
    'cta.p':'انضم لـ +2,400 منشئ محتوى يستخدمون AnimaPrompt لإنتاج أفلام كارتون احترافية بالـ AI',
    'cta.btn':'احصل على الباقة الكاملة — $149',
    'footer.desc':'منصة برومبتات إنتاج الكارتون بالـ AI',
    'checkout.title':'اختر باقتك','checkout.sub':'دفعة واحدة · وصول فوري · ضمان 7 أيام',
    'checkout.pay1':'💳 ادفع عبر Gumroad','checkout.pay2':'🔒 دفع بالبطاقة',
    'checkout.guarantee':'✓ ضمان استرداد كامل 7 أيام · ✓ وصول فوري بعد الدفع',
    'access.title':'الوصول للباقة','access.sub':'أدخل الكود الذي وصلك بعد الشراء',
    'access.btn':'دخول','access.error':'الكود غير صحيح — تحقق من الإيميل الذي وصلك بعد الشراء',
    'access.note':'اشتريت ولم تحصل على كود؟',
    'mp.starter.note':'مثالي للبداية','mp.pro.note':'من الفكرة إلى الفيديو','mp.studio.note':'للفرق والاستوديوهات',
    'mp.popular':'الأفضل قيمة ✦',
  },
  en: {
    dir:'ltr', lang:'en',
    'nav.how':'How It Works','nav.packages':'Packages','nav.workflow':'Workflow',
    'nav.pricing':'Pricing','nav.tools':'Tools','nav.faq':'FAQ',
    'nav.login':'Login','nav.cta':'Get Started',
    'hero.badge':'New: Motion Pack v2.0 Now Available',
    'hero.line1':'Turn Your Ideas Into','hero.line2':'Cartoon Films','hero.line3':'Using AI',
    'hero.desc':'A complete prompt platform for professional cartoon production — from character building to scenes, story, and motion. Everything ready, just copy and paste.',
    'hero.btn1':'Start Production Now','hero.btn2':'See How It Works',
    'stats.users':'Active Creators','stats.prompts':'Ready Prompts',
    'stats.steps':'Steps to Production','stats.rating':'User Rating ★',
    'how.tag':'How The System Works','how.h2':'4 Steps From Idea To Cartoon Video',
    'how.p':'Each step builds on the last — a logical sequence producing professional results',
    'video.tag':'Watch It Work','video.h2':'How to Subscribe & Use',
    'video.p':'A walkthrough video explaining how to subscribe and start your cartoon in under 10 minutes',
    'pkg.tag':'What You Get','pkg.h2':'Prompt Packages',
    'pkg.p':'Each package covers one complete step — buy one or get them all',
    'price.tag':'Pricing','price.h2':'One-Time Investment, Results Forever',
    'price.p':'No monthly subscription — pay once and use forever',
    'tools.tag':'Required Tools','tools.h2':'All The Tools You Need To Make Your Cartoon',
    'tools.p':'Choose the right tools for each production step — all compatible with our prompts directly',
    'testi.tag':'Customer Reviews','testi.h2':'What Creators Are Saying',
    'faq.tag':'Frequently Asked Questions','faq.h2':'Got a Question?',
    'cta.tag':'🎬 Start Today',
    'cta.p':'Join 2,400+ creators using AnimaPrompt to produce professional AI cartoon videos',
    'cta.btn':'Get the Full Package — $149',
    'footer.desc':'The AI Cartoon Production Prompt Platform',
    'checkout.title':'Choose Your Package','checkout.sub':'One-time payment · Instant access · 7-day guarantee',
    'checkout.pay1':'💳 Pay via Gumroad','checkout.pay2':'🔒 Pay by Card',
    'checkout.guarantee':'✓ Full 7-day money-back guarantee · ✓ Instant access after payment',
    'access.title':'Access Your Package','access.sub':'Enter the code you received after purchase',
    'access.btn':'Enter','access.error':'Invalid code — check the email you received after purchase',
    'access.note':'Purchased but no code?',
    'mp.starter.note':'Perfect for beginners','mp.pro.note':'Idea to final video','mp.studio.note':'For teams & studios',
    'mp.popular':'Best Value ✦',
  }
};

let currentLang = localStorage.getItem('ap_lang') || 'ar';

function applyLang(lang) {
  const t = LANG[lang];
  document.documentElement.setAttribute('dir', t.dir);
  document.documentElement.setAttribute('lang', t.lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = t[el.dataset.i18n];
    if (v !== undefined) el.textContent = v;
  });
  const toggle = document.getElementById('langToggle');
  if (toggle) toggle.textContent = lang === 'ar' ? 'EN' : 'ع';
  localStorage.setItem('ap_lang', lang);
  currentLang = lang;
  // update plan notes in checkout modal
  const notes = { starter: 'mp.starter.note', pro: 'mp.pro.note', studio: 'mp.studio.note' };
  Object.entries(notes).forEach(([plan, key]) => {
    const el = document.querySelector(`.modal-plan[data-plan="${plan}"] .mp-note`);
    if (el) el.textContent = t[key] || '';
  });
  const popEl = document.querySelector('.mp-badge');
  if (popEl) popEl.textContent = t['mp.popular'] || '';
}

/* ═══════════ CURSOR ═══════════ */
const cur = document.getElementById('cursor');
const trail = document.getElementById('trail');
let mx = 0, my = 0, tx = 0, ty = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cur.style.left = mx + 'px'; cur.style.top = my + 'px';
});
(function followTrail() {
  tx += (mx - tx) * 0.1; ty += (my - ty) * 0.1;
  trail.style.left = tx + 'px'; trail.style.top = ty + 'px';
  requestAnimationFrame(followTrail);
})();

const hoverEls = document.querySelectorAll('a,button,.pkg-card,.price-card,.testi-card,.faq-q,.vs-item,.at-card,.modal-plan');
hoverEls.forEach(el => {
  el.addEventListener('mouseenter', () => { cur.style.width='0px'; cur.style.height='0px'; trail.style.width='44px'; trail.style.height='44px'; trail.style.borderColor='rgba(247,183,49,.6)'; });
  el.addEventListener('mouseleave', () => { cur.style.width='6px'; cur.style.height='6px'; trail.style.width='28px'; trail.style.height='28px'; trail.style.borderColor='rgba(247,183,49,.3)'; });
});

/* ═══════════ NAVBAR ═══════════ */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => navbar.classList.toggle('solid', scrollY > 50), { passive: true });

/* ═══════════ MOBILE MENU ═══════════ */
const ham = document.getElementById('ham');
const drawer = document.getElementById('mobDrawer');
const mobOverlay = document.getElementById('mobOverlay');
const closeMenu = () => { ham.classList.remove('open'); drawer.classList.remove('open'); mobOverlay.classList.remove('show'); };
ham.addEventListener('click', () => { ham.classList.toggle('open'); drawer.classList.toggle('open'); mobOverlay.classList.toggle('show'); });
mobOverlay.addEventListener('click', closeMenu);
document.querySelectorAll('.mob-a,.mob-cta').forEach(a => a.addEventListener('click', closeMenu));

/* ═══════════ CANVAS PARTICLES ═══════════ */
const canvas = document.getElementById('heroCanvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class Particle {
  constructor() { this.reset(); }
  reset() {
    this.x = Math.random() * canvas.width; this.y = Math.random() * canvas.height;
    this.size = Math.random() * 1.5 + 0.5;
    this.speedX = (Math.random() - 0.5) * 0.4; this.speedY = (Math.random() - 0.5) * 0.4;
    this.opacity = Math.random() * 0.4 + 0.1;
    this.life = 0; this.maxLife = 200 + Math.random() * 300;
  }
  update() { this.x += this.speedX; this.y += this.speedY; this.life++; if (this.life > this.maxLife) this.reset(); }
  draw() {
    const fade = this.life < 30 ? this.life/30 : this.life > this.maxLife-30 ? (this.maxLife-this.life)/30 : 1;
    ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
    ctx.fillStyle = `rgba(247,183,49,${this.opacity*fade})`; ctx.fill();
  }
}
for (let i = 0; i < 60; i++) particles.push(new Particle());
function animateCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => { p.update(); p.draw(); });
  requestAnimationFrame(animateCanvas);
}
animateCanvas();

/* ═══════════ REVEAL ON SCROLL ═══════════ */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* ═══════════ COUNTER ANIMATION ═══════════ */
function animCount(el, target) {
  let current = 0;
  const step = target / (1800 / 16);
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = Math.floor(current).toLocaleString();
    if (current >= target) clearInterval(timer);
  }, 16);
}
const statObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      document.querySelectorAll('.sb-num[data-count]').forEach(el => animCount(el, parseInt(el.dataset.count)));
      statObs.disconnect();
    }
  });
}, { threshold: 0.5 });
const statsSection = document.querySelector('.stats-section');
if (statsSection) statObs.observe(statsSection);

/* ═══════════ FAQ ACCORDION ═══════════ */
document.querySelectorAll('.faq-item').forEach(item => {
  item.querySelector('.faq-q').addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

/* ═══════════ VIDEO STEPS ═══════════ */
const vsItems = document.querySelectorAll('.vs-item');
let vsIndex = 0;
function setVsActive(i) { vsItems.forEach(el => el.classList.remove('active')); vsItems[i].classList.add('active'); }
vsItems.forEach((item, i) => item.addEventListener('click', () => { vsIndex = i; setVsActive(i); }));
setInterval(() => { vsIndex = (vsIndex + 1) % vsItems.length; setVsActive(vsIndex); }, 3000);

/* ═══════════ VIDEO EMBED ═══════════ */
if (CONFIG.youtube) {
  const vfOverlay = document.getElementById('vfOverlay');
  const videoPlaceholder = document.getElementById('videoPlaceholder');
  if (vfOverlay) vfOverlay.style.display = 'none';
  if (videoPlaceholder) {
    videoPlaceholder.innerHTML = `<iframe src="${CONFIG.youtube}" style="width:100%;height:100%;border:none;" allow="autoplay;fullscreen" allowfullscreen></iframe>`;
  }
} else {
  const overlay2 = document.getElementById('vfOverlay');
  if (overlay2) {
    overlay2.addEventListener('click', () => {
      overlay2.style.display = 'none';
      const placeholder = document.getElementById('videoPlaceholder');
      if (placeholder) {
        placeholder.innerHTML = `
          <div style="display:flex;align-items:center;justify-content:center;height:100%;background:#0a0a0a;">
            <div style="text-align:center;color:rgba(255,255,255,.4);font-family:'Roboto Mono',monospace;font-size:13px;padding:40px;">
              <div style="font-size:40px;margin-bottom:16px;">🎬</div>
              أضف رابط الفيديو في CONFIG.youtube
            </div>
          </div>`;
      }
    });
  }
}

/* ═══════════ CARD TILT ═══════════ */
document.querySelectorAll('.pkg-card,.price-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `translateY(-6px) rotateX(${-y*3}deg) rotateY(${x*3}deg)`;
    card.style.transition = 'transform 0.1s ease';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.transition = 'all 0.3s cubic-bezier(0.4,0,0.2,1)';
  });
});

/* ═══════════ SMOOTH SCROLL ═══════════ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href === '#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

/* ═══════════ SCROLL TO TOP ═══════════ */
const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => scrollTopBtn.classList.toggle('show', scrollY > 400), { passive: true });
scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ═══════════ PRICING HOVER GLOW ═══════════ */
document.querySelectorAll('.price-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    card.style.backgroundImage = `radial-gradient(circle at ${e.clientX-r.left}px ${e.clientY-r.top}px, rgba(247,183,49,.06), transparent 50%)`;
  });
  card.addEventListener('mouseleave', () => { card.style.backgroundImage = ''; });
});

/* ═══════════ SOCIAL LINKS ═══════════ */
const socialMap = { 'تيليغرام': CONFIG.social.telegram, 'تويتر': CONFIG.social.twitter, 'يوتيوب': CONFIG.social.youtube, 'إنستغرام': CONFIG.social.instagram };
document.querySelectorAll('.fs-link').forEach(link => {
  const url = socialMap[link.textContent.trim()];
  if (url) { link.href = url; link.target = '_blank'; link.rel = 'noopener'; }
});

/* ═══════════ CHECKOUT MODAL ═══════════ */
let selectedPlan = 'pro';
const checkoutModal = document.getElementById('checkoutModal');

function openCheckout(plan) {
  selectedPlan = plan || 'pro';
  document.querySelectorAll('.modal-plan').forEach(p => p.classList.toggle('selected', p.dataset.plan === selectedPlan));
  updatePayLinks();
  checkoutModal.classList.add('show');
  document.body.style.overflow = 'hidden';
}
function closeCheckout() {
  checkoutModal.classList.remove('show');
  document.body.style.overflow = '';
}
function updatePayLinks() {
  const gumroadLink = CONFIG.gumroad[selectedPlan] || '#';
  document.getElementById('payGumroad').href = gumroadLink;
}

document.getElementById('checkoutClose').addEventListener('click', closeCheckout);
checkoutModal.addEventListener('click', e => { if (e.target === checkoutModal) closeCheckout(); });

document.querySelectorAll('.modal-plan').forEach(plan => {
  plan.addEventListener('click', () => {
    selectedPlan = plan.dataset.plan;
    document.querySelectorAll('.modal-plan').forEach(p => p.classList.remove('selected'));
    plan.classList.add('selected');
    updatePayLinks();
  });
});

document.querySelectorAll('[data-checkout]').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    openCheckout(btn.dataset.checkout);
  });
});

/* ═══════════ ACCESS / LOGIN MODAL ═══════════ */
const accessModal = document.getElementById('accessModal');

function openAccess() { accessModal.classList.add('show'); document.body.style.overflow = 'hidden'; }
function closeAccess() { accessModal.classList.remove('show'); document.body.style.overflow = ''; }

document.getElementById('loginBtn').addEventListener('click', e => { e.preventDefault(); openAccess(); });
document.getElementById('accessClose').addEventListener('click', closeAccess);
accessModal.addEventListener('click', e => { if (e.target === accessModal) closeAccess(); });

document.getElementById('accessSubmit').addEventListener('click', verifyCode);
document.getElementById('accessInput').addEventListener('keydown', e => { if (e.key === 'Enter') verifyCode(); });

function verifyCode() {
  const code = document.getElementById('accessInput').value.trim().toUpperCase();
  const errEl = document.getElementById('accessError');
  const tier = CONFIG.accessCodes[code];
  if (tier) {
    errEl.textContent = '';
    localStorage.setItem('ap_access', tier);
    window.location.href = `thanks.html?plan=${tier}`;
  } else {
    errEl.textContent = LANG[currentLang]['access.error'];
    document.getElementById('accessInput').style.borderColor = '#ef4444';
    setTimeout(() => { document.getElementById('accessInput').style.borderColor = ''; }, 2000);
  }
}

/* ═══════════ LANGUAGE TOGGLE ═══════════ */
const langToggle = document.getElementById('langToggle');
langToggle.addEventListener('click', () => {
  applyLang(currentLang === 'ar' ? 'en' : 'ar');
});

/* ═══════════ ESCAPE KEY CLOSES MODALS ═══════════ */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeCheckout(); closeAccess(); }
});

/* ═══════════ INIT ═══════════ */
applyLang(currentLang);
