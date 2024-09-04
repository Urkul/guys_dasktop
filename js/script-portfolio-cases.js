document.addEventListener("DOMContentLoaded", () => {

    const scriptPortfolioCases = () => {


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
            speed: 1800,
            autoplay: {
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: false,
            },

            slidesPerView: 1,
            spaceBetween: 15,
            // freeMode: true,


            // breakpoints: {
            //         560: {
            //             slidesPerView: 1,
            //             spaceBetween: 15,
            //         }
            //     },
        });


        // }

        const sliderContainer = document.querySelector('.case-slogan__slider-container');
        const slideImageWrapper = document.querySelector('.case-slogan__slide-image-wrapper');
        const sliderBorderLeft = document.querySelector('.case-slogan__slider-border_left');
        const sliderBorderRight = document.querySelector('.case-slogan__slider-border_right');
        let widthBorder = 0;
        // console.log(window.innerWidth);

        if (window.innerWidth >= 460) {
            const coordSlideImageWrapper = slideImageWrapper.getBoundingClientRect();
            // console.log('coordSlideImageWrapper: ', coordSlideImageWrapper.width);
    
            widthBorder = (window.innerWidth - coordSlideImageWrapper.width) / 2;
            sliderBorderLeft.style.width = widthBorder - 15 + 'px';
            sliderBorderRight.style.width = widthBorder - 15 + 'px';
            const coordCliderBorderLeft = sliderBorderLeft.getBoundingClientRect();
            // console.log('coordCliderBorderLeft: ', coordCliderBorderLeft.width);    
        } else {
            sliderContainer.classList.add('container');
            sliderBorderLeft.style.width = 15 + 'px';
            sliderBorderRight.style.width = 15 + 'px';

        }


    }

    scriptPortfolioCases();

});