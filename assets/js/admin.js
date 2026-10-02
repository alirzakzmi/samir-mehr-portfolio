document.addEventListener('DOMContentLoaded', () => {

    const adminSidebar     = document.getElementById('adminSidebar');
    const sidebarToggleBtn = document.getElementById('sidebarToggleBtn');
    const sidebarOverlay   = document.getElementById('sidebarOverlay');

    if (sidebarToggleBtn && adminSidebar) {
        sidebarToggleBtn.addEventListener('click', () => {
            adminSidebar.classList.toggle('translate-x-full');
            if (sidebarOverlay) sidebarOverlay.classList.toggle('hidden');
        });
    }

    if (sidebarOverlay && adminSidebar) {
        sidebarOverlay.addEventListener('click', () => {
            adminSidebar.classList.add('translate-x-full');
            sidebarOverlay.classList.add('hidden');
        });
    }

    document.querySelectorAll('[data-submenu-toggle]').forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-submenu-toggle');
            const submenu  = document.getElementById(targetId);
            const arrow    = btn.querySelector('[data-submenu-arrow]');
            if (submenu) {
                submenu.classList.toggle('hidden');
                if (arrow) arrow.classList.toggle('rotate-180');
            }
        });
    });

    document.querySelectorAll('[data-image-input]').forEach(input => {
        input.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;
            if (file.size > 50 * 1024 * 1024) {
                alert('حجم فایل نباید بیشتر از ۵۰ مگابایت باشد.');
                input.value = '';
                return;
            }
            const previewId = input.getAttribute('data-image-input');
            const preview   = document.getElementById(previewId);
            if (preview) {
                const reader = new FileReader();
                reader.onload = ev => {
                    preview.src = ev.target.result;
                    preview.classList.remove('hidden');
                    const ph = document.getElementById(previewId + '-placeholder');
                    if (ph) ph.classList.add('hidden');
                };
                reader.readAsDataURL(file);
            }
        });
    });

    const slugNameInput     = document.getElementById('slugName');
    const slugCategoryInput = document.getElementById('slugCategory');
    const slugTargetInput   = document.getElementById('slugTarget');
    let slugManuallyEdited  = false;

    function buildSlug() {
        if (!slugTargetInput) return;
        const name = slugNameInput ? slugNameInput.value.trim() : '';
        let categoryText = '';
        let isOther = true;
        if (slugCategoryInput) {
            const opt = slugCategoryInput.options[slugCategoryInput.selectedIndex];
            if (opt && opt.value && opt.value !== 'other') {
                categoryText = opt.text.trim();
                isOther = false;
            }
        }
        slugTargetInput.value = isOther ? name : categoryText + '/' + name;
    }

    if (slugTargetInput) {
        slugTargetInput.addEventListener('input', () => {
            slugManuallyEdited = slugTargetInput.value.trim() !== '';
        });
    }
    if (slugNameInput) {
        slugNameInput.addEventListener('input', () => { if (!slugManuallyEdited) buildSlug(); });
        slugNameInput.addEventListener('change', () => { if (!slugManuallyEdited) buildSlug(); });
    }
    if (slugCategoryInput) {
        slugCategoryInput.addEventListener('change', () => { if (!slugManuallyEdited) buildSlug(); });
    }
});