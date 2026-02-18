document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.site-header');
    let lastScrollY = window.scrollY;
    let ticking = false;

    function update() {
        const currentScrollY = window.scrollY;

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
