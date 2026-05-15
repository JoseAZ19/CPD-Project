document.addEventListener('DOMContentLoaded', () => {
    // Scroll reveal animations
    const reveals = document.querySelectorAll('.reveal');
    if (reveals.length) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
        reveals.forEach(el => revealObserver.observe(el));
    }

    // Header scroll state
    const header = document.querySelector('.site-header');
    if (header) {
        const onScroll = () => {
            header.classList.toggle('scrolled', window.scrollY > 20);
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
    }

    // Floating CTA visibility — show after hero
    const floatingCta = document.querySelector('.floating-cta');
    const hero = document.querySelector('.hero');
    if (floatingCta && hero) {
        const ctaObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                floatingCta.classList.toggle('visible', !entry.isIntersecting);
            });
        }, { threshold: 0.3 });
        ctaObserver.observe(hero);
    } else if (floatingCta) {
        floatingCta.classList.add('visible');
    }

    // Mobile menu
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const menuOverlay = document.querySelector('.menu-overlay');
    const navLinks = document.querySelectorAll('.nav-menu a');

    const closeMenu = () => {
        menuToggle?.classList.remove('active');
        navMenu?.classList.remove('active');
        menuOverlay?.classList.remove('active');
        menuToggle?.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    };

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            const open = navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active', open);
            menuOverlay?.classList.toggle('active', open);
            menuToggle.setAttribute('aria-expanded', String(open));
            document.body.style.overflow = open ? 'hidden' : '';
        });

        navLinks.forEach(link => link.addEventListener('click', closeMenu));
        menuOverlay?.addEventListener('click', closeMenu);

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeMenu();
        });
    }
});
