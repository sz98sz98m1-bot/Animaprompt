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

const hoverEls = document.querySelectorAll('a,button,.pkg-card,.price-card,.testi-card,.faq-q,.vs-item');
hoverEls.forEach(el => {
  el.addEventListener('mouseenter', () => { cur.style.width = '0px'; cur.style.height = '0px'; trail.style.width = '44px'; trail.style.height = '44px'; trail.style.borderColor = 'rgba(247,183,49,.6)'; });
  el.addEventListener('mouseleave', () => { cur.style.width = '6px'; cur.style.height = '6px'; trail.style.width = '28px'; trail.style.height = '28px'; trail.style.borderColor = 'rgba(247,183,49,.3)'; });
});

/* ═══════════ NAVBAR ═══════════ */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => navbar.classList.toggle('solid', scrollY > 50), { passive: true });

/* ═══════════ MOBILE MENU ═══════════ */
const ham = document.getElementById('ham');
const drawer = document.getElementById('mobDrawer');
const overlay = document.getElementById('mobOverlay');
const close = () => { drawer.classList.remove('open'); overlay.classList.remove('show'); };
ham.addEventListener('click', () => { drawer.classList.toggle('open'); overlay.classList.toggle('show'); });
overlay.addEventListener('click', close);
document.querySelectorAll('.mob-a,.mob-cta').forEach(a => a.addEventListener('click', close));

/* ═══════════ CANVAS PARTICLES ═══════════ */
const canvas = document.getElementById('heroCanvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class Particle {
  constructor() { this.reset(); }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 1.5 + 0.5;
    this.speedX = (Math.random() - 0.5) * 0.4;
    this.speedY = (Math.random() - 0.5) * 0.4;
    this.opacity = Math.random() * 0.4 + 0.1;
    this.life = 0; this.maxLife = 200 + Math.random() * 300;
  }
  update() {
    this.x += this.speedX; this.y += this.speedY; this.life++;
    if (this.life > this.maxLife) this.reset();
  }
  draw() {
    const fade = this.life < 30 ? this.life / 30 : this.life > this.maxLife - 30 ? (this.maxLife - this.life) / 30 : 1;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(247,183,49,${this.opacity * fade})`;
    ctx.fill();
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
function animCount(el, target, suffix = '') {
  let current = 0;
  const duration = 1800;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = Math.floor(current).toLocaleString() + suffix;
    if (current >= target) clearInterval(timer);
  }, 16);
}

const statObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      document.querySelectorAll('.sb-num[data-count]').forEach(el => {
        animCount(el, parseInt(el.dataset.count));
      });
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
function setVsActive(i) {
  vsItems.forEach(item => item.classList.remove('active'));
  vsItems[i].classList.add('active');
}
vsItems.forEach((item, i) => item.addEventListener('click', () => { vsIndex = i; setVsActive(i); }));
setInterval(() => { vsIndex = (vsIndex + 1) % vsItems.length; setVsActive(vsIndex); }, 3000);

/* ═══════════ VIDEO PLAY BUTTON ═══════════ */
const overlay2 = document.getElementById('vfOverlay');
const playBtn = document.getElementById('playBtn');
if (overlay2) {
  overlay2.addEventListener('click', () => {
    // Replace with actual video embed when available
    overlay2.style.display = 'none';
    const placeholder = document.getElementById('videoPlaceholder');
    if (placeholder) {
      placeholder.innerHTML = `
        <div style="display:flex;align-items:center;justify-content:center;height:100%;background:#0a0a0a;">
          <div style="text-align:center;color:rgba(255,255,255,.4);font-family:'Roboto Mono',monospace;font-size:13px;padding:40px;">
            <div style="font-size:40px;margin-bottom:16px;">🎬</div>
            أضف رابط الفيديو هنا<br>
            <small style="font-size:11px;margin-top:8px;display:block;color:rgba(255,255,255,.2);">استبدل iframe في الكود برابط يوتيوب</small>
          </div>
        </div>`;
    }
  });
}

/* ═══════════ CARD TILT ═══════════ */
document.querySelectorAll('.pkg-card,.price-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `translateY(-6px) rotateX(${-y * 3}deg) rotateY(${x * 3}deg)`;
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
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

/* ═══════════ SCROLL TO TOP ═══════════ */
const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  scrollTopBtn.classList.toggle('show', scrollY > 400);
}, { passive: true });
scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ═══════════ PRICING HOVER GLOW ═══════════ */
document.querySelectorAll('.price-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left, y = e.clientY - r.top;
    card.style.backgroundImage = `radial-gradient(circle at ${x}px ${y}px, rgba(247,183,49,.06), transparent 50%)`;
  });
  card.addEventListener('mouseleave', () => { card.style.backgroundImage = ''; });
});
