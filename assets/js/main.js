/* ============================================================
   اسکریپت‌های اصلی
   ============================================================ */

const BASE = window.BASE_PATH || '';

const HEADER_HTML = `
<header class="sticky top-0 z-50 bg-white/85 backdrop-blur-xl border-b border-lab-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
        <a href="${BASE}index.html" class="flex items-center gap-3 shrink-0">
            <img src="${BASE}assets/images/logo.png" alt="لوگو" class="w-12 h-12 object-contain rounded-xl bg-lab-50 p-1.5 border border-lab-200" />
            <span class="leading-tight">
                <span class="block text-base font-extrabold text-lab-900">سمیر مهر رامان</span>
                <span class="block text-[11px] text-lab-600 font-semibold">سهامی خاص</span>
            </span>
        </a>
        <nav class="hidden lg:flex items-center gap-1 text-sm font-bold text-slate-600">
            <a href="${BASE}index.html" class="px-3.5 py-2 rounded-lg">خانه</a>
            <div class="relative group">
                <button class="flex items-center gap-1 px-3.5 py-2 rounded-lg">
                    محصولات
                    <svg class="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" d="M19 9l-7 7-7-7"/></svg>
                </button>
                <div class="absolute top-full right-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div class="w-64 bg-white rounded-2xl border border-lab-100 shadow-soft overflow-hidden py-2">
                        <a href="${BASE}products.html" class="flex items-center gap-2.5 px-4 py-2.5 text-sm font-bold text-lab-700 border-b border-lab-50"><span class="w-1.5 h-1.5 rounded-full bg-lab-600"></span>همه محصولات</a>
                        <a href="${BASE}category.html?cat=laboratory" class="flex items-center gap-2.5 px-4 py-2.5 text-sm font-semibold text-slate-600"><span class="w-1.5 h-1.5 rounded-full bg-lab-500"></span>آزمایشگاهی</a>
                        <a href="${BASE}category.html?cat=cooling" class="flex items-center gap-2.5 px-4 py-2.5 text-sm font-semibold text-slate-600"><span class="w-1.5 h-1.5 rounded-full bg-lab-500"></span>سرمایشی</a>
                        <a href="${BASE}category.html?cat=measurement" class="flex items-center gap-2.5 px-4 py-2.5 text-sm font-semibold text-slate-600"><span class="w-1.5 h-1.5 rounded-full bg-lab-500"></span>اندازه‌گیری</a>
                        <a href="${BASE}category.html?cat=thermal" class="flex items-center gap-2.5 px-4 py-2.5 text-sm font-semibold text-slate-600"><span class="w-1.5 h-1.5 rounded-full bg-lab-500"></span>حرارتی</a>
                        <a href="${BASE}category.html?cat=mixer" class="flex items-center gap-2.5 px-4 py-2.5 text-sm font-semibold text-slate-600"><span class="w-1.5 h-1.5 rounded-full bg-lab-500"></span>مخلوط‌کن</a>
                        <a href="${BASE}category.html?cat=microbial" class="flex items-center gap-2.5 px-4 py-2.5 text-sm font-semibold text-slate-600"><span class="w-1.5 h-1.5 rounded-full bg-lab-500"></span>میکروبی</a>
                        <a href="${BASE}products.html" class="flex items-center gap-2.5 px-4 py-2.5 text-sm font-semibold text-slate-600 border-t border-lab-50"><span class="w-1.5 h-1.5 rounded-full bg-slate-400"></span>سایر محصولات</a>
                    </div>
                </div>
            </div>
            <a href="${BASE}index.html#services" class="px-3.5 py-2 rounded-lg">خدمات</a>
            <a href="${BASE}index.html#about" class="px-3.5 py-2 rounded-lg">درباره ما</a>
            <a href="${BASE}index.html#contact" class="px-3.5 py-2 rounded-lg">تماس با ما</a>
        </nav>
        <div class="flex items-center gap-2">
            <form action="${BASE}products.html" method="GET" class="relative hidden md:block">
                <input type="text" name="q" placeholder="جستجو..." class="w-40 bg-lab-50/60 border border-lab-100 rounded-xl px-3 py-2 text-sm" />
            </form>
            <button id="mobileSearchBtn" class="md:hidden p-2.5 rounded-xl text-lab-700 border border-lab-100">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"/></svg>
            </button>
            <button id="menuBtn" class="lg:hidden p-2.5 rounded-xl text-lab-800 border border-lab-100">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><path stroke-linecap="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
        </div>
    </div>
    <div id="mobileSearchBar" class="hidden md:hidden border-t border-lab-100 bg-white px-4 py-3">
        <input type="text" placeholder="جستجو در محصولات..." class="w-full bg-lab-50/60 border border-lab-100 rounded-xl px-3 py-2.5 text-sm" />
    </div>
    <div id="mobileMenu" class="hidden lg:hidden border-t border-lab-100 bg-white">
        <nav class="max-w-7xl mx-auto px-4 py-3 flex flex-col text-sm font-bold text-slate-700">
            <a href="${BASE}index.html" class="px-3 py-3 rounded-lg">خانه</a>
            <button id="mobileProductsBtn" class="flex items-center justify-between px-3 py-3 rounded-lg text-right">
                محصولات
                <svg id="mobileProductsIcon" class="w-4 h-4 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div id="mobileProductsMenu" class="hidden flex-col pr-3">
                <a href="${BASE}products.html" class="flex items-center gap-2 px-3 py-2.5 rounded-lg text-xs font-bold text-lab-700"><span class="w-1.5 h-1.5 rounded-full bg-lab-600"></span>همه محصولات</a>
                <a href="${BASE}category.html?cat=laboratory" class="flex items-center gap-2 px-3 py-2.5 rounded-lg text-xs font-semibold text-slate-600"><span class="w-1.5 h-1.5 rounded-full bg-lab-500"></span>آزمایشگاهی</a>
                <a href="${BASE}category.html?cat=cooling" class="flex items-center gap-2 px-3 py-2.5 rounded-lg text-xs font-semibold text-slate-600"><span class="w-1.5 h-1.5 rounded-full bg-lab-500"></span>سرمایشی</a>
                <a href="${BASE}category.html?cat=measurement" class="flex items-center gap-2 px-3 py-2.5 rounded-lg text-xs font-semibold text-slate-600"><span class="w-1.5 h-1.5 rounded-full bg-lab-500"></span>اندازه‌گیری</a>
                <a href="${BASE}category.html?cat=thermal" class="flex items-center gap-2 px-3 py-2.5 rounded-lg text-xs font-semibold text-slate-600"><span class="w-1.5 h-1.5 rounded-full bg-lab-500"></span>حرارتی</a>
                <a href="${BASE}category.html?cat=mixer" class="flex items-center gap-2 px-3 py-2.5 rounded-lg text-xs font-semibold text-slate-600"><span class="w-1.5 h-1.5 rounded-full bg-lab-500"></span>مخلوط‌کن</a>
                <a href="${BASE}category.html?cat=microbial" class="flex items-center gap-2 px-3 py-2.5 rounded-lg text-xs font-semibold text-slate-600"><span class="w-1.5 h-1.5 rounded-full bg-lab-500"></span>میکروبی</a>
                <a href="${BASE}products.html" class="flex items-center gap-2 px-3 py-2.5 rounded-lg text-xs font-semibold text-slate-600 border-t border-lab-50"><span class="w-1.5 h-1.5 rounded-full bg-slate-400"></span>سایر محصولات</a>
            </div>
            <a href="${BASE}index.html#services" class="px-3 py-3 rounded-lg">خدمات</a>
            <a href="${BASE}index.html#about" class="px-3 py-3 rounded-lg">درباره ما</a>
            <a href="${BASE}index.html#contact" class="px-3 py-3 rounded-lg">تماس با ما</a>
        </nav>
    </div>
</header>`;

const FOOTER_HTML = `
<footer class="relative mt-14 bg-lab-900 text-lab-100 overflow-hidden">
    <div class="absolute inset-0 pattern-dots opacity-30"></div>
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 py-14 grid md:grid-cols-2 gap-10 text-sm">
        <div>
            <div class="flex items-center gap-3">
                <img src="${BASE}assets/images/logo.png" alt="لوگو" class="w-12 h-12 object-contain bg-white rounded-xl p-1.5" />
                <div>
                    <p class="font-extrabold text-white">شرکت سمیر مهر رامان</p>
                    <p class="text-xs text-lab-300">سهامی خاص</p>
                </div>
            </div>
            <p class="mt-5 text-xs leading-7 text-lab-200">تأمین‌کننده تجهیزات آزمایشگاهی، بیمارستانی و لوازم مصرفی با تمرکز بر کیفیت، پشتیبانی و رضایت مشتری.</p>
        </div>
        <div>
            <p class="font-extrabold text-white mb-4">اطلاعات تماس</p>
            <ul class="space-y-3 text-xs">
                <li class="flex items-center gap-2"><span class="text-lab-400 font-bold">تلفن:</span> <span dir="ltr">۰۲۱ - ۱۲۳۴۵۶۷۸</span></li>
                <li class="flex items-center gap-2"><span class="text-lab-400 font-bold">ایمیل:</span> <span dir="ltr">info@example.com</span></li>
                <li class="flex items-start gap-2"><span class="text-lab-400 font-bold shrink-0">آدرس:</span> <span>تهران، خیابان نمونه، پلاک ۱۲۳</span></li>
            </ul>
        </div>
    </div>
    <div class="relative border-t border-white/10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 py-5 text-center text-xs text-lab-300">
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
    initLoginValidation();
});

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
            mpMenu.classList.toggle('flex');
            mpIcon.classList.toggle('rotate-180');
        });
    }

    if (mobileMenu) {
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                if (mpMenu && mpIcon) {
                    mpMenu.classList.add('hidden');
                    mpMenu.classList.remove('flex');
                    mpIcon.classList.remove('rotate-180');
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

    function setFieldState(input, state) {
        input.classList.remove('border-slate-200','border-rose-400','border-lab-500','ring-2','ring-rose-200','ring-lab-500/30');
        if (state === 'valid')   input.classList.add('border-lab-500','ring-2','ring-lab-500/30');
        else if (state === 'invalid') input.classList.add('border-rose-400','ring-2','ring-rose-200');
        else input.classList.add('border-slate-200');
    }

    function updateField(input, isValid) {
        if (input.value.length === 0) setFieldState(input, 'idle');
        else if (isValid) setFieldState(input, 'valid');
        else setFieldState(input, 'invalid');
    }

    function updateSubmit() {
        const allOK = isValidEmail(loginEmail.value) && isValidPassword(loginPassword.value);
        loginSubmitBtn.disabled = !allOK;
        if (allOK) {
            loginSubmitBtn.classList.remove('bg-slate-300','cursor-not-allowed','opacity-60');
            loginSubmitBtn.classList.add('bg-lab-600');
        } else {
            loginSubmitBtn.classList.add('bg-slate-300','cursor-not-allowed','opacity-60');
            loginSubmitBtn.classList.remove('bg-lab-600');
        }
    }

    loginEmail.addEventListener('input', () => { updateField(loginEmail, isValidEmail(loginEmail.value)); updateSubmit(); });
    loginPassword.addEventListener('input', () => { updateField(loginPassword, isValidPassword(loginPassword.value)); updateSubmit(); });

    setFieldState(loginEmail, 'idle');
    setFieldState(loginPassword, 'idle');
    updateSubmit();
}