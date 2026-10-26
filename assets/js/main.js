/* ============================================================
   اسکریپت‌های اصلی — JavaScript خالص
   ============================================================ */

const BASE = document.body.dataset.base || '';

const CATEGORIES = [
    { slug: 'laboratory',  name: 'آزمایشگاهی',  desc: 'تجهیزات و ابزارهای تخصصی آزمایشگاه‌های تشخیص طبی، پژوهشی و صنعتی.' },
    { slug: 'cooling',     name: 'سرمایشی',      desc: 'یخچال‌ها، فریزرها و تجهیزات سرمایشی آزمایشگاهی.' },
    { slug: 'measurement', name: 'اندازه‌گیری', desc: 'ترازوها، pH مترها و ابزارهای اندازه‌گیری دقیق.' },
    { slug: 'thermal',     name: 'حرارتی',       desc: 'کوره‌ها، انکوباتورها و تجهیزات حرارتی.' },
    { slug: 'mixer',       name: 'مخلوط‌کن',    desc: 'شیکرها، همزن‌ها و تجهیزات مخلوط‌کن.' },
    { slug: 'microbial',   name: 'میکروبی',      desc: 'محیط کشت‌ها و تجهیزات میکروبیولوژی.' }
];

const CHEVRON_DOWN = '<svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" d="M19 9l-7 7-7-7"/></svg>';

function categoryLinks() {
    const items = CATEGORIES.map(c =>
        `<a href="${BASE}category.html?cat=${c.slug}" class="dd-item"><span class="dd-dot"></span>${c.name}</a>`
    ).join('');
    return `
        <a href="${BASE}products.html" class="dd-item dd-item-primary"><span class="dd-dot"></span>همه محصولات</a>
        ${items}
        <a href="${BASE}products.html" class="dd-item dd-item-last"><span class="dd-dot"></span>سایر محصولات</a>`;
}

const HEADER_HTML = `
<header class="site-header">
    <div class="container header-inner">
        <a href="${BASE}index.html" class="brand">
            <img src="${BASE}assets/images/logo.png" alt="لوگو" />
            <span class="brand-text">
                <span class="brand-name">سمیر مهر رامان</span>
                <span class="brand-sub">سهامی خاص</span>
            </span>
        </a>

        <nav class="nav-desktop">
            <a href="${BASE}index.html">خانه</a>
            <div class="dropdown">
                <button class="dropdown-btn">محصولات ${CHEVRON_DOWN}</button>
                <div class="dropdown-menu">
                    <div class="dropdown-panel">${categoryLinks()}</div>
                </div>
            </div>
            <a href="${BASE}index.html#services">خدمات</a>
            <a href="${BASE}index.html#about">درباره ما</a>
            <a href="${BASE}index.html#contact">تماس با ما</a>
        </nav>

        <div class="header-actions">
            <form action="${BASE}products.html" method="GET" class="search-form">
                <input type="text" name="q" placeholder="جستجو..." class="search-input" />
            </form>
            <button id="mobileSearchBtn" class="icon-btn mobile-search-btn" aria-label="جستجو">
                <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"/></svg>
            </button>
            <button id="menuBtn" class="icon-btn menu-btn" aria-label="منو">
                <svg fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><path stroke-linecap="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
        </div>
    </div>

    <div id="mobileSearchBar" class="mobile-search hidden">
        <input type="text" placeholder="جستجو در محصولات..." />
    </div>

    <div id="mobileMenu" class="mobile-menu hidden">
        <nav class="mobile-nav">
            <a href="${BASE}index.html">خانه</a>
            <button id="mobileProductsBtn" class="mobile-products-btn">
                محصولات
                ${CHEVRON_DOWN.replace('<svg', '<svg id="mobileProductsIcon"')}
            </button>
            <div id="mobileProductsMenu" class="mobile-sub hidden">${categoryLinks()}</div>
            <a href="${BASE}index.html#services">خدمات</a>
            <a href="${BASE}index.html#about">درباره ما</a>
            <a href="${BASE}index.html#contact">تماس با ما</a>
        </nav>
    </div>
</header>`;

const FOOTER_HTML = `
<footer class="site-footer">
    <div class="layer pattern-dots"></div>
    <div class="container footer-grid">
        <div>
            <div class="footer-brand">
                <img src="${BASE}assets/images/logo.png" alt="لوگو" />
                <div>
                    <p class="footer-brand-name">شرکت سمیر مهر رامان</p>
                    <p class="footer-brand-sub">سهامی خاص</p>
                </div>
            </div>
            <p class="footer-about">تأمین‌کننده تجهیزات آزمایشگاهی، بیمارستانی و لوازم مصرفی با تمرکز بر کیفیت، پشتیبانی و رضایت مشتری.</p>
        </div>
        <div>
            <p class="footer-title">اطلاعات تماس</p>
            <ul class="footer-contact">
                <li><span class="label">تلفن:</span> <span dir="ltr">۰۲۱ - ۱۲۳۴۵۶۷۸</span></li>
                <li><span class="label">ایمیل:</span> <span dir="ltr">info@example.com</span></li>
                <li class="top"><span class="label">آدرس:</span> <span>تهران، خیابان نمونه، پلاک ۱۲۳</span></li>
            </ul>
        </div>
    </div>
    <div class="footer-bottom">
        <div class="container">
            <p>© ۱۴۰۴ شرکت سمیر مهر رامان</p>
        </div>
    </div>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
    const headerEl = document.getElementById('site-header');
    const footerEl = document.getElementById('site-footer');
    if (headerEl) headerEl.innerHTML = HEADER_HTML;
    if (footerEl) footerEl.innerHTML = FOOTER_HTML;

    initMenu();
    initProductCarousel();
    initCategoryPage();
    initLoginValidation();
});

/* ---------- منوی موبایل و جستجو ---------- */
function initMenu() {
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
    }

    const mpBtn = document.getElementById('mobileProductsBtn');
    const mpMenu = document.getElementById('mobileProductsMenu');
    const mpIcon = document.getElementById('mobileProductsIcon');
    if (mpBtn && mpMenu && mpIcon) {
        mpBtn.addEventListener('click', () => {
            mpMenu.classList.toggle('hidden');
            mpIcon.classList.toggle('is-open');
        });
    }

    if (mobileMenu) {
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                if (mpMenu && mpIcon) {
                    mpMenu.classList.add('hidden');
                    mpIcon.classList.remove('is-open');
                }
            });
        });
    }

    const msBtn = document.getElementById('mobileSearchBtn');
    const msBar = document.getElementById('mobileSearchBar');
    if (msBtn && msBar) {
        msBtn.addEventListener('click', () => msBar.classList.toggle('hidden'));
    }
}

/* ---------- اسلایدر محصولات (صفحه اصلی) ---------- */
function initProductCarousel() {
    const scrollEl = document.getElementById('productScroll');
    if (!scrollEl) return;

    const cards = Array.from(scrollEl.querySelectorAll('.product-card'));
    if (!cards.length) return;

    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dots = document.querySelectorAll('.product-dot');
    const section = document.getElementById('products');

    let autoTimer = null, isVisible = false, isPaused = false;
    const INTERVAL = 3000;

    const getStep = () => {
        if (cards.length < 2) return cards[0].getBoundingClientRect().width;
        const r0 = cards[0].getBoundingClientRect();
        const r1 = cards[1].getBoundingClientRect();
        return Math.abs(r0.left - r1.left);
    };
    const getCurrentScroll = () => Math.abs(scrollEl.scrollLeft);
    const getMaxScroll = () => scrollEl.scrollWidth - scrollEl.clientWidth;

    function updateDots() {
        if (!dots.length) return;
        const activeIndex = Math.round(getCurrentScroll() / getStep());
        dots.forEach((dot, i) => dot.classList.toggle('active', i === activeIndex));
    }

    function goNext() {
        const step = getStep(), current = getCurrentScroll(), max = getMaxScroll();
        if (current >= max - 5) scrollEl.scrollTo({ left: 0, behavior: 'smooth' });
        else scrollEl.scrollBy({ left: -Math.min(step, max - current), behavior: 'smooth' });
    }

    function goPrev() {
        const step = getStep(), current = getCurrentScroll();
        if (current <= 5) scrollEl.scrollTo({ left: -getMaxScroll(), behavior: 'smooth' });
        else scrollEl.scrollBy({ left: Math.min(step, current), behavior: 'smooth' });
    }

    function startAuto() {
        stopAuto();
        if (isVisible && !isPaused) autoTimer = setInterval(goNext, INTERVAL);
    }
    function stopAuto() {
        if (autoTimer) clearInterval(autoTimer);
        autoTimer = null;
    }

    if (nextBtn) nextBtn.addEventListener('click', () => { goNext(); stopAuto(); startAuto(); });
    if (prevBtn) prevBtn.addEventListener('click', () => { goPrev(); stopAuto(); startAuto(); });

    scrollEl.addEventListener('mouseenter', () => { isPaused = true; stopAuto(); });
    scrollEl.addEventListener('mouseleave', () => { isPaused = false; startAuto(); });
    scrollEl.addEventListener('touchstart', () => { isPaused = true; stopAuto(); }, { passive: true });
    scrollEl.addEventListener('touchend', () => { isPaused = false; startAuto(); }, { passive: true });
    scrollEl.addEventListener('scroll', updateDots, { passive: true });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(e => {
            isVisible = e.isIntersecting;
            if (isVisible && !isPaused) startAuto(); else stopAuto();
        });
    }, { threshold: 0.25 });
    if (section) observer.observe(section);
}

/* ---------- صفحه دسته‌بندی ---------- */
function initCategoryPage() {
    const nameEl = document.getElementById('categoryName');
    if (!nameEl) return;

    const cat = new URLSearchParams(window.location.search).get('cat') || 'laboratory';
    const info = CATEGORIES.find(c => c.slug === cat) || CATEGORIES[0];

    nameEl.textContent = info.name;
    document.getElementById('categoryDesc').textContent = info.desc;
    document.getElementById('breadcrumbName').textContent = info.name;
    document.title = info.name + ' | سمیر مهر رامان';
    document.querySelectorAll('.catTag').forEach(el => { el.textContent = info.name; });
}

/* ---------- فرم ورود ---------- */
function initLoginValidation() {
    const loginForm      = document.getElementById('loginForm');
    const loginEmail     = document.getElementById('loginEmail');
    const loginPassword  = document.getElementById('passwordInput');
    const loginSubmitBtn = document.getElementById('loginSubmitBtn');
    const togglePassword = document.getElementById('togglePassword');

    if (togglePassword && loginPassword) {
        const eyeClosed = document.getElementById('eyeIconClosed');
        const eyeOpen   = document.getElementById('eyeIconOpen');
        togglePassword.addEventListener('click', () => {
            const isPass = loginPassword.type === 'password';
            loginPassword.type = isPass ? 'text' : 'password';
            if (eyeClosed) eyeClosed.classList.toggle('hidden', isPass);
            if (eyeOpen)   eyeOpen.classList.toggle('hidden', !isPass);
        });
    }

    if (!loginForm || !loginEmail || !loginPassword || !loginSubmitBtn) return;

    const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = v => EMAIL_REGEX.test(v.trim());
    const isValidPassword = v => v.length >= 8;

    function updateField(input, isValid) {
        input.classList.remove('is-valid', 'is-invalid');
        if (input.value.length === 0) return;
        input.classList.add(isValid ? 'is-valid' : 'is-invalid');
    }

    function updateSubmit() {
        loginSubmitBtn.disabled = !(isValidEmail(loginEmail.value) && isValidPassword(loginPassword.value));
    }

    loginEmail.addEventListener('input', () => {
        updateField(loginEmail, isValidEmail(loginEmail.value));
        updateSubmit();
    });
    loginPassword.addEventListener('input', () => {
        updateField(loginPassword, isValidPassword(loginPassword.value));
        updateSubmit();
    });

    loginForm.addEventListener('submit', e => {
        e.preventDefault();
        window.location.href = 'dashboard.html';
    });

    updateSubmit();
}
