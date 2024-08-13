
// if (window.innerWidth >= 561) {
    new Swiper('.case-slogan__slider-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            // dynamicBullets: true,
        },
        grabCursor: true,
        autoHeight: true,
        loop: true,
        speed: 800,
        autoplay: {
            delay: 2000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
        },

        slidesPerView: 1,
        spaceBetween: 15,


        // breakpoints: {
        //         560: {
        //             slidesPerView: 1,
        //             spaceBetween: 15,
        //         }
        //     },
    });
// }