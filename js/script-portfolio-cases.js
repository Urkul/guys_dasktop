document.addEventListener("DOMContentLoaded", () => {

    const scriptPortfolioCases = () => {


        if (window.innerWidth >= 460) {
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

        }

        else if (window.innerWidth < 460) {
            new Swiper('.case-slogan__slider-container.case-slogan__slider-container-mobil', {
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
                effect: 'cube',
                cubeEffect: {
                    slideShadows: true,
                    shadow: true,
                    shadowOffset: 20,
                    shadowScale: 0.7
                    // shadowScale: 0.94
                },

                // breakpoints: {
                //         560: {
                //             slidesPerView: 1,
                //             spaceBetween: 15,
                //         }
                //     },
            });

        }

        const sliderContainer = document.querySelector('.case-slogan__slider-container');
        const sliderContainerMobil = document.querySelector('.case-slogan__slider-container.case-slogan__slider-container-mobil');
        const slideImageWrapper = document.querySelector('.case-slogan__slide-image-wrapper');
        const sliderBorderLeft = document.querySelector('.case-slogan__slider-border_left');
        const sliderBorderRight = document.querySelector('.case-slogan__slider-border_right');
        let widthBorder = 0;
        // console.log(window.innerWidth);

        if (window.innerWidth >= 460) {
            const coordSlideImageWrapper = slideImageWrapper.getBoundingClientRect();
            // console.log('coordSlideImageWrapper: ', coordSlideImageWrapper.width);
    
            widthBorder = (window.innerWidth - coordSlideImageWrapper.width) / 2;
            sliderBorderLeft.style.width = widthBorder - 9 + 'px';
            sliderBorderRight.style.width = widthBorder - 9 + 'px';
            const coordCliderBorderLeft = sliderBorderLeft.getBoundingClientRect();
            console.log('coordCliderBorderLeft: ', coordCliderBorderLeft.width);    
        } else {
            sliderContainerMobil.classList.add('container');
            sliderBorderLeft.style.width = 15 + 'px';
            sliderBorderRight.style.width = 15 + 'px';

        }


        const links = document.querySelectorAll('.portfolio__link');

        let portfolioTagsActiveColor = {    
            all: "#FF6831",  
            branding: "#7FCEFF",        
            video_production: "#41EAC8",        
            design: "#F68DD4",        
            d3: "#C59AED",        
            motion: "#EA70A6",        
            website: "#75B9ED",        
            social_media: "#67D9AB",        
            package: "#E7A3A3",        
            logo: "#CBDE76",        
            stand_event: "#6FC2DE",        
            merch: "#DDB4B4",        
            igaming: "#F7C39E",        
            horeca: "#A3A8F1",        
            it: "#B4A7EB",        
            b2b: "#F2766D",        
            b2c: "#6EC8EE",        
            naming: "#769AF7",        
            game_design: "#73E192",        
            identics: "#3d9903"        
        }; 

        links.forEach(link => {
            for (let key of Object.keys(portfolioTagsActiveColor)) {
                if (link.textContent.toLowerCase().replace(/\s+/g, '_') === key) {
                    link.style.background = portfolioTagsActiveColor[key];
                    link.style.border = "1px solid " + portfolioTagsActiveColor[key];
                    // console.log(key);
                }
            }
        });


    }

    scriptPortfolioCases();

});