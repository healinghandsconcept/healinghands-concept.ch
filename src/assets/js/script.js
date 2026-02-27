document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.site-header');
    const headerShell = document.querySelector('.header-shell');
    const menuToggle = document.querySelector('.menu-toggle');
    const menuPanel = document.querySelector('#site-menu');
    let lastScrollY = window.scrollY;
    let ticking = false;

    function closeMenu() {
        if (!headerShell || !menuToggle) {
            return;
        }
        headerShell.classList.remove('menu-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Ouvrir le menu');
    }

    if (menuToggle && headerShell && menuPanel) {
        menuToggle.addEventListener('click', () => {
            const isOpen = headerShell.classList.toggle('menu-open');
            menuToggle.setAttribute('aria-expanded', String(isOpen));
            menuToggle.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
            header.classList.remove('header-hidden');
        });

        menuPanel.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                closeMenu();
            });
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                closeMenu();
            }
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                closeMenu();
            }
        });
    }

    function update() {
        const currentScrollY = window.scrollY;

        if (headerShell && headerShell.classList.contains('menu-open')) {
            header.classList.remove('header-hidden');
            ticking = false;
            return;
        }

        // Threshold to avoid flickering on small movements
        if (Math.abs(currentScrollY - lastScrollY) < 10) {
            ticking = false;
            return;
        }

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // Scrolling Down -> Hide
            header.classList.add('header-hidden');
        } else {
            // Scrolling Up -> Show
            header.classList.remove('header-hidden');
        }

        lastScrollY = currentScrollY;
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(update);
            ticking = true;
        }
    });
});
