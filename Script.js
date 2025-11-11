document.addEventListener('DOMContentLoaded', () => {
    // -------------------------
    // 🔹 Animaciones de scroll
    // -------------------------
    const sections = document.querySelectorAll('.section');
    const texts = document.querySelectorAll('.text-animate');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            entry.target.classList.toggle('visible', entry.isIntersecting);
        });
    }, observerOptions);

    sections.forEach(section => sectionObserver.observe(section));

    const textObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            entry.target.classList.toggle('visible', entry.isIntersecting);
        });
    }, observerOptions);

    texts.forEach(text => textObserver.observe(text));


    // -------------------------
    // 🔹 Carrusel 1 (Soccer)
    // -------------------------
    const slider1 = document.querySelector('.image-slider .slides');
    const prevButton1 = document.querySelector('.image-slider .prev');
    const nextButton1 = document.querySelector('.image-slider .next');

    if (slider1 && prevButton1 && nextButton1) {
        const images1 = slider1.querySelectorAll('img');
        let index1 = 0;
        const totalImages1 = images1.length;
        const intervalTime1 = 3000;
        let slideInterval1;

        const showSlide1 = (n) => {
            index1 = (n + totalImages1) % totalImages1;
            slider1.style.transform = `translateX(-${index1 * 100}%)`;
        };

        const nextSlide1 = () => showSlide1(index1 + 1);
        const prevSlide1 = () => showSlide1(index1 - 1);

        const startSlideInterval1 = () => slideInterval1 = setInterval(nextSlide1, intervalTime1);
        const stopSlideInterval1 = () => clearInterval(slideInterval1);

        nextButton1.addEventListener('click', () => {
            nextSlide1();
            stopSlideInterval1();
            startSlideInterval1();
        });

        prevButton1.addEventListener('click', () => {
            prevSlide1();
            stopSlideInterval1();
            startSlideInterval1();
        });

        startSlideInterval1();
    }


    // -------------------------
    // 🔹 Carrusel 2 (About Us)
    // -------------------------
    const slider2 = document.querySelector('.image-slider-about .slides-about');
    const prevButton2 = document.querySelector('.image-slider-about .prev');
    const nextButton2 = document.querySelector('.image-slider-about .next');

    if (slider2 && prevButton2 && nextButton2) {
        const images2 = slider2.querySelectorAll('img');
        let index2 = 0;
        const totalImages2 = images2.length;
        const intervalTime2 = 3000;
        let slideInterval2;

        const showSlide2 = (n) => {
            index2 = (n + totalImages2) % totalImages2;
            slider2.style.transform = `translateX(-${index2 * 100}%)`;
        };

        const nextSlide2 = () => showSlide2(index2 + 1);
        const prevSlide2 = () => showSlide2(index2 - 1);

        const startSlideInterval2 = () => slideInterval2 = setInterval(nextSlide2, intervalTime2);
        const stopSlideInterval2 = () => clearInterval(slideInterval2);

        nextButton2.addEventListener('click', () => {
            nextSlide2();
            stopSlideInterval2();
            startSlideInterval2();
        });

        prevButton2.addEventListener('click', () => {
            prevSlide2();
            stopSlideInterval2();
            startSlideInterval2();
        });

        startSlideInterval2();
    }
});
