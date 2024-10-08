document.addEventListener('DOMContentLoaded', function () {

    const scriptPortfolio = () => {

        // slider portfolio

        // const swiperPortfolio = new Swiper('.portfolio__slider', {
        //     loop: true,
        //     navigation: {
        //         prevEl: '.portfolio__slider-btn-prev',
        //         nextEl: '.portfolio__slider-btn-next'
        //     },

        //     breakpoints: {
        //         1025: {
        //             slidesPerView: 1.815,
        //             spaceBetween: 24,
        //         },
        //         920: {
        //             slidesPerView: 1.5,
        //             spaceBetween: 18,
        //         },
        //         820: {
        //             slidesPerView: 1.4,
        //             spaceBetween: 16,
        //         },
        //         640: {
        //             slidesPerView: 1.3,
        //             spaceBetween: 14,
        //         },
        //         320: {
        //             slidesPerView: 1,
        //             spaceBetween: 10,
        //         }
        //     },

        //     simulateTouch: true,
        //     touchRatio: 1,
        //     touchAngle: 45,
        //     // grabCursor: true,

        //     keyboard: {
        //         enabled: true,
        //         onlyInViewport: true,
        //         pageUpDown: true,
        //     },

        //     // mousewheel: {
        //     //     sensitivity: 1,
        //     // },

        //     autoHeight: true,

        //     parallax: true,

        //     autoplay: {
        //         delay: 3500,
        //     },
        //     speed: 1000,

        //     // freeMode: true,

        //     effect: 'slide',

    
        //     // stop slider portfolio

        //     on: {
        //         init() {
        //             this.el.addEventListener('mouseenter', () => {
        //                 this.autoplay.stop();
        //             });

        //             this.el.addEventListener('mouseleave', () => {
        //                 this.autoplay.start();
        //             });
        //         }
        //     },

        // });
    
        // swiperPortfolio.init();

        // stop slider portfolio

        // let sliderBlock = document.querySelector('.portfolio__slider-block');
        // let portfolioSlider = document.querySelector('.portfolio__slider');

        // sliderBlock.addEventListener("mouseleve", function (e) {
        //     portfolioSlider.params.autoplay.disableOnInteraction = false;
        //     portfolioSlider.params.autoplay.delay = 3000;
        //     portfolioSlider.autoplay.start();
        // });

        // sliderBlock.addEventListener("mouseenter", function (e) {
        //     portfolioSlider.autoplay.stop();
        // });


        // const cursor = document.getElementById('cursor');
        const follower = document.getElementById('aura');
        const portfolio = document.querySelector('.portfolio');
        const portfolioSliderWrap = document.querySelector('.portfolio__slider-wrapper');
        const portfolioSliderBlock = document.querySelector('.portfolio__slider-block');
        const portfolioSlider = document.querySelector('.portfolio__slider');
        const portfolioSliderItems = document.querySelectorAll('.portfolio__slider-item');
        const swiperSlides = portfolio.querySelectorAll('.swiper-slide');
        const portfolioDescriptionWrappers = document.querySelectorAll('.portfolio__description-wrapper');

        const links = document.querySelectorAll('.portfolio__link');
        const portfolioNames = document.querySelectorAll('.portfolio__description-name');
        // const portfolioDescriptionBtns = document.querySelectorAll('.portfolio__description-btn-wrapper');

        // console.log('portfolioDescriptionBtns: ', portfolioDescriptionBtns);

        const portfolioBtns = document.querySelectorAll('.portfolio__slider-btn');

        const portfolioSliderBtnPrev = document.querySelector('.portfolio__slider-btn-prev');
        let checker = false;

        const images = document.querySelectorAll('div.portfolio__slider-img > img');

        let descriptionWidth = 0;

        const coordPortfolioSliderWrap = portfolioSliderWrap.getBoundingClientRect();
        const coordPortfolioSliderBlock = portfolioSliderBlock.getBoundingClientRect();
        // console.log('coordPortfolioSliderWrap: ', coordPortfolioSliderWrap.right);
        // console.log('coordPortfolioSliderBlock: ', coordPortfolioSliderBlock.right);
        const windowWidth = window.innerWidth;
        // console.log('windowWidth: ', windowWidth);


        mouseX = 0;
        mouseY = 0;
        posX = 0;
        posY = 0;

        function mouseCoords(e) {
            mouseX = e.pageX;
            mouseY = e.pageY;

            // console.log(e.pageX + '/' + e.pageY);
        }

        let navigationFlag = true;
        let navigationFlagPrev = false;
        let navigationFlagNext = false;

        let check = true;
        let checkNext = false;
        let checkPrev = false;


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


        // const settingDescriptionWidth = function () {

        //     for (let i = 0; i < portfolioDescriptionWrappers.length; i++) {

        //         const coordPortfolioSlider = portfolioSlider.getBoundingClientRect();
        //         const coordSwiperSlide = swiperSlides[i].getBoundingClientRect();
        //         let coordPortfolioName = portfolioNames[i].getBoundingClientRect();
        
        //         const slideMarginRight = window.getComputedStyle(swiperSlides[i], null).getPropertyValue("margin-right");
    
        //         if (swiperSlides[i].classList.contains('swiper-slide-active') && coordPortfolioName.left < windowWidth / 3) {

        //             descriptionWidth = coordSwiperSlide.width;

        //             portfolioDescriptionWrappers[i].style.maxWidth = descriptionWidth + 'px';    
        //         }
            
        //         else if (swiperSlides[i].classList.contains('swiper-slide-next') && coordPortfolioName.left > windowWidth / 3) {
        
        //             descriptionWidth = coordPortfolioSlider.width - coordSwiperSlide.width - parseInt(slideMarginRight);
                
        //             portfolioDescriptionWrappers[i].style.maxWidth = descriptionWidth + 'px';    
        //         }
            
        //         else if (swiperSlides[i].classList.contains('swiper-slide-prev') && coordPortfolioName.left > windowWidth / 3) {
    
        //             descriptionWidth = coordPortfolioSlider.width - coordSwiperSlide.width - parseInt(slideMarginRight);
                
        //             portfolioDescriptionWrappers[i].style.maxWidth = descriptionWidth + 'px';    
        //         }
            
        //         else {
        
        //             descriptionWidth = coordSwiperSlide.width;

        //             portfolioDescriptionWrappers[i].style.maxWidth = descriptionWidth + 'px';  
        //         }
            
        //     }    
        // }
    
        portfolioSliderBtnPrev.addEventListener('click', () => {
            checker = true;
        });

        const descriptionNameActive = function () {

            for (let i = 0; i < portfolioNames.length; i++) {

                let coordPortfolioName = portfolioNames[i].getBoundingClientRect();
                // console.log('coordPortfolioName: ', coordPortfolioName.left);

                if (swiperSlides[i].classList.contains('swiper-slide-active') && navigationFlag && !navigationFlagNext && coordPortfolioName.left < coordPortfolioSliderWrap.right) {
                    portfolioNames[i].classList.add('portfolio__description-name-active');
                    // console.log(i + ' ' + 'active');

                }
                else if (swiperSlides[i].classList.contains('swiper-slide-next') && navigationFlagNext && !navigationFlag && coordPortfolioName.left > coordPortfolioSliderWrap.right / 2) {
                    portfolioNames[i].classList.add('portfolio__description-name-active');
                    // console.log(i + ' ' + 'next');
                    // console.log(coordPortfolioName.left);
                    // console.log(coordPortfolioName.right);
                    // console.log(coordPortfolioSliderWrap.right);
            
                }
                else if (swiperSlides[i].classList.contains('swiper-slide-prev') && navigationFlagPrev && coordPortfolioName.left < coordPortfolioSliderWrap.right) {
                    portfolioNames[i].classList.add('portfolio__description-name-active');
                    // console.log(i + ' ' + 'prev');

                }
                else {
                    portfolioNames[i].classList.remove('portfolio__description-name-active');
                    // console.log(i + ' ' + '');

                }
    
            }
            navigationFlag = false;
            navigationFlagNext = true;
            navigationFlagPrev = true;
        }

        const descriptionNameActiveClick = function () {

            for (let i = 0; i < portfolioNames.length; i++) {

                let coordPortfolioName = portfolioNames[i].getBoundingClientRect();
                // console.log('coordPortfolioName: ', coordPortfolioName.left);

                if (swiperSlides[i].classList.contains('swiper-slide-active') && navigationFlag && !navigationFlagNext && coordPortfolioName.left < coordPortfolioSliderWrap.right) {
                    portfolioNames[i].classList.add('portfolio__description-name-active');
                    // console.log(i + ' ' + 'active');

                }
                else if (swiperSlides[i].classList.contains('swiper-slide-next') && navigationFlagNext && !navigationFlag && coordPortfolioName.left < coordPortfolioSliderWrap.right / 4 && coordPortfolioName.left > coordPortfolioSliderWrap.right / 2) {
                    portfolioNames[i].classList.add('portfolio__description-name-active');
                    // console.log(i + ' ' + 'next');
                    // console.log(coordPortfolioName.left);
                    // console.log(coordPortfolioName.right);
                    // console.log(coordPortfolioSliderWrap.right);
            
                }
                else if (swiperSlides[i].classList.contains('swiper-slide-prev') && navigationFlagPrev && coordPortfolioName.left < coordPortfolioSliderWrap.right) {
                    portfolioNames[i].classList.add('portfolio__description-name-active');
                    // console.log(i + ' ' + 'prev');

                }
                else {
                    portfolioNames[i].classList.remove('portfolio__description-name-active');
                    // console.log(i + ' ' + '');

                }
    
            }
            navigationFlag = false;
            navigationFlagNext = true;
            navigationFlagPrev = true;

            // checker = false;
        }


        // // const parallaxDescrBtn = function () {

        // //     const portfolioDescriptionBtns = document.querySelectorAll('.portfolio__description-btn-wrapper');
        // //     // console.log('portfolioDescriptionBtns: ', portfolioDescriptionBtns.length);

        // //     for (let i = 0; i < swiperSlides.length; i++) {

        // //         if (swiperSlides[i].classList.contains('swiper-slide-active')) {

        // //             portfolioDescriptionBtns[i].setAttribute('data-swiper-parallax', '0%');
                
        // //             console.log(i + ' active ' + portfolioDescriptionBtns[i].getAttribute('data-swiper-parallax'));

        // //             // console.log(i + ' active-index ' + swiperSlides[i].getAttribute('data-swiper-slide-index'));

        // //             countActiv++;
        // //             console.log('countActiv: ', countActiv);

        // //             if (countActiv === 5) {
        // //                 portfolioDescriptionBtns[i].setAttribute('data-swiper-parallax', '70%');

        // //                 countActiv = 0;

        // //             }

        // //         }
            
        // //         else if (swiperSlides[i].classList.contains('swiper-slide-next')) {

        // //             countNext++;
        // //             console.log('countNext: ', countNext);

        // //             portfolioDescriptionBtns[i].setAttribute('data-swiper-parallax', '0%');
                
        // //             console.log(i + ' next ' + portfolioDescriptionBtns[i].getAttribute('data-swiper-parallax'));

        // //             // console.log(i + ' next-index ' + swiperSlides[i].getAttribute('data-swiper-slide-index'));

        // //             if (countNext === 5) {
        // //                 portfolioDescriptionBtns[i].setAttribute('data-swiper-parallax', '70%');

        // //                 countNext = 0;

        // //             }

        // //             // if (Number(swiperSlides[i].getAttribute('data-swiper-slide-index')) === 4) {
        // //             //     portfolioDescriptionBtns[i].setAttribute('data-swiper-parallax', '70%');
                
        // //             //     console.log(i + ' next ' + portfolioDescriptionBtns[i].getAttribute('data-swiper-parallax'));
        // //             // }
        // //             // else if (Number(swiperSlides[i].getAttribute('data-swiper-slide-index')) === 0) {
        // //             //     portfolioDescriptionBtns[i].setAttribute('data-swiper-parallax', '0%');
                
        // //             //     console.log(i + ' next ' + portfolioDescriptionBtns[i].getAttribute('data-swiper-parallax'));
        // //             // }
        // //         }
            
        // //         else if (swiperSlides[i].classList.contains('swiper-slide-prev')) {

        // //             countPrev++;
        // //             console.log('countPrev: ', countPrev);

        // //             portfolioDescriptionBtns[i].setAttribute('data-swiper-parallax', '0%');
                
        // //             console.log(i + ' prev ' + portfolioDescriptionBtns[i].getAttribute('data-swiper-parallax'));

        // //             // console.log(i + ' prev-index ' + swiperSlides[i].getAttribute('data-swiper-slide-index'));

        // //             // if (Number(swiperSlides[i].getAttribute('data-swiper-slide-index')) === 0) {
        // //             //     portfolioDescriptionBtns[i].setAttribute('data-swiper-parallax', '70%');
                
        // //             //     console.log(i + ' prev ' + portfolioDescriptionBtns[i].getAttribute('data-swiper-parallax'));
        // //             // }

        // //             if (countPrev === 5) {
        // //                 portfolioDescriptionBtns[i].setAttribute('data-swiper-parallax', '70%');

        // //                 countPrev = 0;

        // //             }

        // //         }
                
        // //         else {

        // //             portfolioDescriptionBtns[i].setAttribute('data-swiper-parallax', '70%');

        // //             console.log(i + ' else ' + portfolioDescriptionBtns[i].getAttribute('data-swiper-parallax'));

        // //             // console.log(i + ' else-index ' + swiperSlides[i].getAttribute('data-swiper-slide-index'));


        // //         }

        // //     }

        // // }

        // const parallaxDescrBtn = function () {

        //     const portfolioDescriptionBtns = document.querySelectorAll('.portfolio__description-btn-wrapper');

        //     for (let i = 0; i < swiperSlides.length; i++) {

        //         let coordPortfolioDescriptionBtn = portfolioDescriptionBtns[i].getBoundingClientRect().left;

        //         if (coordPortfolioDescriptionBtn > windowWidth) {

        //             portfolioDescriptionBtns[i].setAttribute('data-swiper-parallax', '70%');
        //             // portfolioDescriptionBtns[i].setAttribute('data-swiper-parallax-opacity', '1');
        //         }
        //         else {
                
        //             portfolioDescriptionBtns[i].setAttribute('data-swiper-parallax', '0%');
        //             // portfolioDescriptionBtns[i].setAttribute('data-swiper-parallax-opacity', '0');
        //         }
        //     }
        // }

        // const parallaxDescrBtnPrev = function () {

        //     const portfolioDescriptionBtns = document.querySelectorAll('.portfolio__description-btn-wrapper');

        //     for (let i = 0; i < swiperSlides.length; i++) {

        //         let coordPortfolioDescriptionBtn = portfolioDescriptionBtns[i].getBoundingClientRect().left;

        //         // if (coordPortfolioDescriptionBtn > windowWidth) {

        //         //     portfolioDescriptionBtns[i].setAttribute('data-swiper-parallax', '70%');
        //         // }

        //         if (coordPortfolioDescriptionBtn < 0 || coordPortfolioDescriptionBtn > windowWidth / 2 ) {

        //             portfolioDescriptionBtns[i].setAttribute('data-swiper-parallax', '0%');
        //             // portfolioDescriptionBtns[i].setAttribute('data-swiper-parallax-opacity', '1');

        //         }
                
        //         else {

        //             portfolioDescriptionBtns[i].setAttribute('data-swiper-parallax', '70%');
        //             // portfolioDescriptionBtns[i].setAttribute('data-swiper-parallax-opacity', '0');

        //         }
        //     }
        // }

    
        // // const setDataAtrDescrBtn = function () {
        // //     for (let i = 0; i < swiperSlides.length; i++) {

    
        // //         if (swiperSlides[i].classList.contains('swiper-slide-prev')) {
        // //             portfolioDescriptionBtns[i].setAttribute("data-swiper-parallax", '0');

        // //             console.log(i + ' ' +  portfolioDescriptionBtns[i].getAttribute("data-swiper-parallax"));

    
        // //         } else if (!swiperSlides[i].classList.contains('swiper-slide-prev')) {

        // //             portfolioDescriptionBtns[i].setAttribute("data-swiper-parallax", '70%');

        // //             console.log(i + ' ' +  portfolioDescriptionBtns[i].getAttribute("data-swiper-parallax"));

        // //             console.log(swiperSlides[i].classList.contains('swiper-slide-prev'));

        // //         }
        // //     }
        // // }

        // // swiperPortfolio.on('slideChange', function () { 
        // //     // settingDescriptionWidth();
        // //     descriptionNameActive();
        // //     // parallaxDescrBtn();
        // //     // setDataAtrDescrBtn();
        
        // // });

        // // if (check === true) {
        // //     swiperPortfolio.on('slideChange', function () { 
        // //         parallaxDescrBtn();      
        // //     });

        // // }

        // // if (checkPrev === true) {
        // //     swiperPortfolio.on('slideChange', function () { 
        // //         parallaxDescrBtnPrev();  
        // //         console.log('да');

        // //     });

        // //     // checkPrev = false;
        // // }


        // // document.querySelector('.portfolio__slider-btn-next').addEventListener('click', () => {
        // //     checkNext = true

        // //     if (checkNext === true) {
        // //         swiperPortfolio.on('slideChange', function () { 
        // //             parallaxDescrBtn();  
        // //             // console.log('да');
        // //     });
    
        // //     checkNext = false;
        // //     }
        // // });


        // // document.querySelector('.portfolio__slider-btn-prev').addEventListener('click', () => {
        // //     checkPrev = true

        // //     if (checkPrev === true) {
        // //         swiperPortfolio.on('slideChange', function () { 
        // //             parallaxDescrBtnPrev();      
        // //     });
    
        // //     checkPrev = false;
        // //     }
        // // });



        // // swiperPortfolio.on('slideChange', function () { 
        // //     // settingDescriptionWidth();
        // //     parallaxDescrBtn();
        // //     // setDataAtrDescrBtn();
        
        // // });

        // // swiperPortfolio.on('slideChangeTransitionEnd', function () {
        // //     // settingDescriptionWidth();
        // //     // setDataAtrDescrBtn();

        // // });

        // // swiperPortfolio.on('slideChangeTransitionStart', function () {
        // //     // settingDescriptionWidth();
        // //     // setDataAtrDescrBtn();

        // // });

        // // swiperPortfolio.on('slideNextTransitionEnd', function () {
        // //     settingDescriptionWidth();
        // // });

        // // swiperPortfolio.on('slideNextTransitionStart', function () {
        // //     settingDescriptionWidth();
        // // });

        // // swiperPortfolio.on('slidePrevTransitionEnd', function () {
        // //     settingDescriptionWidth();
        // // });

        // // swiperPortfolio.on('slidePrevTransitionStart', function () {
        // //     settingDescriptionWidth();
        // // });

        // // swiperPortfolio.on('slideResetTransitionEnd', function () {
        // //     settingDescriptionWidth();
        // // });


        // // swiperPortfolio.on('slideChange', function () {
        
        // //     for (let i = 0; i < portfolioNames.length; i++) {

        // //         let coordPortfolioName = portfolioNames[i].getBoundingClientRect();

        // //         if (swiperSlides[i].classList.contains('swiper-slide-active') && navigationFlag && coordPortfolioName.left < windowWidth / 3) {
        // //             portfolioNames[i].classList.add('portfolio__description-name-active');

        // //         } else if ((swiperSlides[i].classList.contains('swiper-slide-next') && navigationFlagNext && coordPortfolioName.left > windowWidth / 3)) {
        // //             portfolioNames[i].classList.add('portfolio__description-name-active');
            
        // //         } else if ((swiperSlides[i].classList.contains('swiper-slide-prev') && navigationFlagPrev && coordPortfolioName.left < windowWidth / 3)) {
        // //             portfolioNames[i].classList.add('portfolio__description-name-active');

        // //         } else {
        // //             portfolioNames[i].classList.remove('portfolio__description-name-active');
        // //         }
    
        // //     }
        // //     navigationFlag = false;
        // //     navigationFlagNext = true;
        // //     navigationFlagPrev = true;
        // // });


        // // portfolio.addEventListener('mouseover', () => {

        // //     for (let i = 0; i < images.length; i++) {

        // //         if (images[i].classList.contains('poligon_away' + i)) {
        // //             images[i].classList.remove('poligon_away' + i);
        // //         } 
        // //     }
    
        // // });
    

    
        if (windowWidth >= 461) {

            const swiperPortfolio = new Swiper('.portfolio__slider', {
                loop: true,
                navigation: {
                    prevEl: '.portfolio__slider-btn-prev',
                    nextEl: '.portfolio__slider-btn-next'
                },
    
                breakpoints: {
                    // 1025: {
                    //     slidesPerView: 1.815,
                    //     spaceBetween: 24,
                    // },
                    // 920: {
                    //     slidesPerView: 1.5,
                    //     spaceBetween: 18,
                    // },
                    // 820: {
                    //     slidesPerView: 1.4,
                    //     spaceBetween: 16,
                    // },
                    // 640: {
                    //     slidesPerView: 1.3,
                    //     spaceBetween: 14,
                    // },
                    // 320: {
                    //     slidesPerView: 1,
                    //     spaceBetween: 10,
                    // }

                    1080: {
                        slidesPerView: 2,
                        spaceBetween: 24,
                    },
                    721: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                    }
                },
    
                simulateTouch: true,
                touchRatio: 1,
                touchAngle: 45,
                grabCursor: true,
    
                keyboard: {
                    enabled: true,
                    onlyInViewport: true,
                    pageUpDown: true,
                },
    
                // mousewheel: {
                //     sensitivity: 1,
                // },
    
                autoHeight: true,
    
                parallax: true,
    
                autoplay: {
                    delay: 3500,
                },
                speed: 1000,
    
                // freeMode: true,
    
                effect: 'slide',
    
        
                // stop slider portfolio
    
                on: {
                    init() {
                        this.el.addEventListener('mouseenter', () => {
                            this.autoplay.stop();
                        });
    
                        this.el.addEventListener('mouseleave', () => {
                            this.autoplay.start();
                        });
                    }
                },
    
            });

            swiperPortfolio.on('slideChange', function () {
                // settingDescriptionWidth();
                if (checker) {
                    descriptionNameActiveClick();
                    checker = false;
                } else {
                    descriptionNameActive();
                }
                // parallaxDescrBtn();
                // setDataAtrDescrBtn();

            });
    
            // if (check === true) {
            //     swiperPortfolio.on('slideChange', function () { 
            //         parallaxDescrBtn();      
            //     });
    
            // }

            // document.querySelector('.portfolio__slider-btn-next').addEventListener('click', () => {
            //     checkNext = true
    
            //     if (checkNext === true) {
            //         swiperPortfolio.on('slideChange', function () { 
            //             parallaxDescrBtn();  
            //             // console.log('да');
            //     });
        
            //     checkNext = false;
            //     }
            // });
    
    
            // document.querySelector('.portfolio__slider-btn-prev').addEventListener('click', () => {
            //     checkPrev = true
    
            //     if (checkPrev === true) {
            //         swiperPortfolio.on('slideChange', function () { 
            //             parallaxDescrBtnPrev();      
            //     });
        
            //     checkPrev = false;
            //     }
            // });
        
        }

        if (windowWidth >= 461) {

            portfolio.addEventListener('mousemove', e => {
        
                clientX = e.pageX;
                clientY = e.pageY;
    
                let poligonFlag = false;
    
                mouseCoords(e);
    
                // cursor.style.display = 'block';
                follower.style.display = 'block';
                // cursor.classList.remove('cursor-hidden');
                // follower.classList.remove('cursor-hidden');
    
                for (let i = 0; i < images.length; i++) {
    
                    images[i].addEventListener('mouseover', () => {
                
                        images[i].classList.add('poligon' + i);
                        // animate(images[i]);
                        poligonFlag = true;
                    
                    });
    
                    images[i].addEventListener('mouseout', () => {
                
                        images[i].classList.remove('poligon' + i);
                        portfolioNames[i].classList.remove('underline');
    
                        if (poligonFlag) {
                            images[i].classList.add('poligon_away' + i);
    
                        }
                    });
    
                }
    
                for (let i = 0; i < images.length; i++) {
    
                    if (swiperSlides[i].classList.contains('swiper-slide-active') && images[i].classList.contains('poligon' + i)) {
                        
                        portfolioNames[i].classList.add('underline');
                    }
                }
    
    
                // slide dots
                // document.querySelector('.dots').addEventListener('mouseover', () => {
    
                //     if (document.querySelector('.swiper-slide_dots').classList.contains('swiper-slide-active')) {
                //         document.querySelector('.portfolio__description-name_dots').classList.add('underline');
                //     }
                
                // });
    
                // document.querySelector('.dots').addEventListener('mouseout', () => {
                
                //     document.querySelector('.portfolio__description-name_dots').classList.remove('underline');
                
                // });
    
                
                // for (let i = 0; i < images.length; i++) {
                //     images[i].addEventListener('mouseout', e => {
                
                //         images[i].classList.remove('poligon');
                // });
    
    
            });
    
    
            gsap.to({}, .01, {
    
                repeat: -1,
    
                onRepeat: () => {
    
                    posX += (mouseX - posX) / 5;
                    posY += (mouseY - posY) / 5;
    
                    // gsap.set(cursor, {
                    //     css: {
                    //         left: mouseX,
                    //         top: mouseY
                    //     }
                    // });
    
                    gsap.set(follower, {
                        css: {
                            left: posX - 24,
                            top: posY - 23
                        }
                    });
                }
            });
    
    
            for (let i = 0; i < links.length; i++) {
    
                links[i].addEventListener('mouseover', () => {
                    // cursor.classList.add('cursor_active');
                    follower.classList.add('cursor_active');
                });
    
                links[i].addEventListener('mouseout', () => {
                    // cursor.classList.remove('cursor_active');
                    follower.classList.remove('cursor_active');
                });
            }
    
            for (let i = 0; i < portfolioBtns.length; i++) {
    
                portfolioBtns[i].addEventListener('mouseover', () => {
                    // cursor.classList.add('cursor_active');
                    follower.classList.add('cursor_active');
                });
    
                portfolioBtns[i].addEventListener('mouseout', () => {
                    // cursor.classList.remove('cursor_active');
                    follower.classList.remove('cursor_active');
                });
            }
    
    
            portfolio.addEventListener('mouseout', () => {
                // cursor.style.display = 'none';
                follower.style.display = 'none';
    
                // for (let i = 0; i < images.length; i++) {
                //     images[i].classList.remove('poligon_away' + i);
                //     console.log(i);
                // }
                // cursor.classList.add('cursor-hidden');
                // follower.classList.add('cursor-hidden');
            
            });
    
        }
        
    }

    scriptPortfolio();

});
