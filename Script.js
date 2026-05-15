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

    // Floating actions visibility — show after hero
    const floatingActions = document.querySelector('.floating-actions');
    const hero = document.querySelector('.hero');
    if (floatingActions && hero) {
        const ctaObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                floatingActions.classList.toggle('visible', !entry.isIntersecting);
            });
        }, { threshold: 0.3 });
        ctaObserver.observe(hero);
    } else if (floatingActions) {
        floatingActions.classList.add('visible');
    }

    // Carousel(s) — auto-rotate with progress bar, counter, slide overlay animation, swipe, hover-pause
    const carousels = document.querySelectorAll('[data-carousel]');
    carousels.forEach(carousel => {
        const track = carousel.querySelector('.carousel-track');
        const slides = Array.from(carousel.querySelectorAll('.carousel-slide'));
        const prevBtn = carousel.querySelector('.carousel-btn.prev');
        const nextBtn = carousel.querySelector('.carousel-btn.next');
        const dotsContainer = carousel.querySelector('.carousel-dots');
        const progressBar = carousel.querySelector('.progress-bar');
        const counterCurrent = carousel.querySelector('.counter-current');
        const counterTotal = carousel.querySelector('.counter-total');
        if (!track || slides.length < 2) return;

        const total = slides.length;
        let index = 0;
        let timer;
        const styles = getComputedStyle(carousel);
        const durationStr = styles.getPropertyValue('--slide-duration').trim() || '5500ms';
        const delay = parseInt(durationStr, 10) || 5500;

        const pad = (n) => String(n + 1).padStart(2, '0');
        if (counterTotal) counterTotal.textContent = pad(total - 1);

        slides.forEach((_, i) => {
            const dot = document.createElement('button');
            dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
            dot.setAttribute('role', 'tab');
            dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
            dot.addEventListener('click', () => { go(i); restart(); });
            dotsContainer?.appendChild(dot);
        });
        const dots = dotsContainer ? dotsContainer.querySelectorAll('.carousel-dot') : [];

        // mark first slide active
        slides[0].classList.add('is-active');

        const updateProgress = () => {
            if (!progressBar) return;
            progressBar.classList.remove('run');
            // force reflow to restart transition
            // eslint-disable-next-line no-unused-expressions
            progressBar.offsetWidth;
            progressBar.classList.add('run');
        };

        const go = (n) => {
            index = (n + total) % total;
            track.style.transform = `translateX(-${index * 100}%)`;
            slides.forEach((s, i) => s.classList.toggle('is-active', i === index));
            dots.forEach((d, i) => d.classList.toggle('active', i === index));
            if (counterCurrent) counterCurrent.textContent = pad(index);
            updateProgress();
        };
        const next = () => go(index + 1);
        const prev = () => go(index - 1);

        const start = () => {
            carousel.classList.remove('paused');
            updateProgress();
            timer = setInterval(next, delay);
        };
        const stop = () => {
            clearInterval(timer);
            carousel.classList.add('paused');
            if (progressBar) {
                // freeze current progress visually
                const computed = getComputedStyle(progressBar).transform;
                progressBar.classList.remove('run');
                progressBar.style.transform = computed === 'none' ? 'scaleX(0)' : computed;
            }
        };
        const restart = () => {
            clearInterval(timer);
            if (progressBar) progressBar.style.transform = '';
            start();
        };

        prevBtn?.addEventListener('click', () => { prev(); restart(); });
        nextBtn?.addEventListener('click', () => { next(); restart(); });
        carousel.addEventListener('mouseenter', stop);
        carousel.addEventListener('mouseleave', () => {
            if (progressBar) progressBar.style.transform = '';
            start();
        });

        // Keyboard support
        carousel.setAttribute('tabindex', '0');
        carousel.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') { prev(); restart(); }
            if (e.key === 'ArrowRight') { next(); restart(); }
        });

        // Touch swipe
        let touchStartX = 0;
        carousel.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            stop();
        }, { passive: true });
        carousel.addEventListener('touchend', (e) => {
            const delta = e.changedTouches[0].screenX - touchStartX;
            if (Math.abs(delta) > 40) (delta < 0 ? next() : prev());
            if (progressBar) progressBar.style.transform = '';
            start();
        }, { passive: true });

        // Start when carousel scrolls into view, pause when out
        const visObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) start();
                else stop();
            });
        }, { threshold: 0.2 });
        visObserver.observe(carousel);
    });

    // Modals (open via data-open-modal, close via data-close-modal)
    const openModal = (modal) => {
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        const firstFocusable = modal.querySelector('.modal-option:not(.disabled), .modal-close');
        setTimeout(() => firstFocusable?.focus(), 220);
    };

    const closeModal = (modal) => {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    };

    document.querySelectorAll('[data-open-modal]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const modal = document.getElementById(btn.dataset.openModal);
            if (!modal) return;
            // Close any currently-open modal first so transitions chain cleanly
            const currentlyOpen = document.querySelector('.modal.active');
            if (currentlyOpen && currentlyOpen !== modal) closeModal(currentlyOpen);

            // Waitlist: pass the program name and reset to form state
            if (modal.id === 'waitlist') {
                const program = btn.dataset.program || '';
                const nameSlot = modal.querySelector('.waitlist-program-name');
                const programInput = modal.querySelector('.waitlist-program-input');
                if (nameSlot) nameSlot.textContent = program;
                if (programInput) programInput.value = program;
                modal.querySelector('.waitlist-form-state')?.removeAttribute('hidden');
                modal.querySelector('.waitlist-success-state')?.setAttribute('hidden', '');
                modal.querySelector('.waitlist-form')?.reset();
            }

            openModal(modal);
        });
    });

    // Waitlist form: submit via fetch, show success inline
    const waitlistForm = document.querySelector('.waitlist-form');
    if (waitlistForm) {
        waitlistForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const submitBtn = waitlistForm.querySelector('button[type="submit"]');
            const originalHtml = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            try {
                const data = new FormData(waitlistForm);
                const res = await fetch(waitlistForm.action, {
                    method: 'POST',
                    body: data,
                    headers: { 'Accept': 'application/json' }
                });
                if (res.ok) {
                    const modal = waitlistForm.closest('.modal');
                    modal?.querySelector('.waitlist-form-state')?.setAttribute('hidden', '');
                    modal?.querySelector('.waitlist-success-state')?.removeAttribute('hidden');
                } else {
                    throw new Error('Submission failed');
                }
            } catch (err) {
                alert('Sorry, something went wrong. Please try again or contact us directly.');
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalHtml;
            }
        });
    }

    document.querySelectorAll('[data-close-modal]').forEach(el => {
        el.addEventListener('click', (e) => {
            const modal = el.closest('.modal');
            if (!modal) return;
            // Allow anchor-style data-close-modal links to still navigate
            if (el.tagName === 'A' && el.getAttribute('href')) {
                closeModal(modal);
                return; // let the anchor handle navigation
            }
            e.preventDefault();
            closeModal(modal);
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const active = document.querySelector('.modal.active');
            if (active) closeModal(active);
        }
    });

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
