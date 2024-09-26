document.addEventListener("DOMContentLoaded", () => {

    const scriptPortfolioPage = () => {

        const portfolioTagsLinks = document.querySelectorAll('.portfolio__tags-link');
        const portfolioProjectsItem = document.querySelectorAll('.list-portfolio__item-wrapper');
        const allTags = document.querySelectorAll('.list-portfolio__item-link');
        const navLinkPortfolio = document.querySelector('.nav__link-portfolio > a');

        let flagAll = true;
        let flagCases = false;
        let flagActiveTags = false;
        // let flagActiveCase = false;

        let cooka = '';

        const colorBg = '#f5f5f5';

        // let portfolioTagsActiveColor = {    
        //     all: "#FF6831",  
        //     branding: "#2D82B7",        
        //     video_production: "#3BCFB1",        
        //     design: "#FFACE4",        
        //     d3: "#440381",        
        //     motion: "#C2085A",        
        //     website: "#279AF1",        
        //     social_media: "#098754",        
        //     package: "#DC5ABA",        
        //     logo: "#A9CF00",        
        //     stand_event: "#104B5F",        
        //     merch: "#9A241C",        
        //     igaming: "#F3BF07",        
        //     horeca: "#9BA2FF",        
        //     it: "#4E4087",        
        //     b2b: "#CD2323",        
        //     b2c: "#D1ACFF",        
        //     naming: "#AC2DB7",        
        //     game_design: "#005FCF",        
        //     identics: "#3d9903"        
        // }; 
    
        // let portfolioTagsActiveColor = [   
        //     "#FF6831",  
        //     "#2D82B7",        
        //     "#3BCFB1",        
        //     "#FFACE4",        
        //     "#440381",        
        //     "#C2085A",        
        //     "#279AF1",        
        //     "#098754",        
        //     "#DC5ABA",        
        //     "#A9CF00",        
        //     "#104B5F",        
        //     "#9A241C",        
        //     "#F3BF07",        
        //     "#9BA2FF",        
        //     "#4E4087",        
        //     "#CD2323",        
        //     "#D1ACFF",        
        //     "#AC2DB7",        
        //     "#005FCF",        
        //     "#3d9903"        
        // ]; 
    
        let portfolioTagsActiveColor = [
            "#FF6831",
            "#7FCEFF",
            "#41EAC8",
            "#F68DD4",
            "#C59AED",
            "#EA70A6",
            "#75B9ED",
            "#67D9AB",
            "#E7A3A3",
            "#CBDE76",
            "#6FC2DE",
            "#DDB4B4",
            "#F7C39E",
            "#A3A8F1",
            "#B4A7EB",
            "#F2766D",
            "#6EC8EE",
            "#769AF7",
            "#73E192",
            "#3d9903"
        ];


        // section menu

        const navbar = document.querySelector('.header__wrapper');
        const headerContainer = document.querySelector('.header__container');

        const headerLogo = document.querySelectorAll('.header__logo > path');

        // const headerNavWrap = document.querySelector('.header__nav');
        const headerNav = document.querySelector('.header__nav');

        const headerNavList = document.querySelector('.nav__list');
        const headerNavListItems = document.querySelectorAll('.nav__list > li > a');

        // const headerNavSlogan = document.querySelector('.header__nav-slogan');
        // const headerNavSubmit = document.querySelector('.header__nav__submit');
        const headerSlogan = document.querySelector('.header__nav-slogan');
        const headerSubmit = document.querySelector('.header__nav__submit');

        // const headerNavBtn = document.querySelector('.header__nav-btn');
        const headerBtn = document.querySelector('.header__nav-btn');
        const navIconBtn = document.querySelector('.nav-icon-btn');
        // const iconBtn = document.querySelector('.nav-icon-btn');
        const navCircleItem = document.querySelectorAll('.nav-circle-item');

        const headerNavClose = document.querySelector('.header__nav-close');

        const headerLanguage = document.querySelector('.header__language');
        const dropdownButton = document.querySelector('.dropdown__button');
        const dropdownLink = document.querySelectorAll('.dropdown__list-link');

        // const productsText = document.querySelector('.products__text-animation');
        const productsTextBlock = document.querySelectorAll('.products__text-block');
        const productsTextSecondBlock = document.querySelectorAll('.products__text-second_block');
        const productsImg = document.querySelectorAll('.products__img');
        const productsBtn = document.querySelectorAll('.products__animation-btn-block');
        const productsBgRigh = document.querySelectorAll('.products__description-bg-right');

        const portfolio = document.querySelector('.portfolio');
        // const products = document.querySelector('.products');
        const footer = document.querySelector('.footer');

        const footerDecorG = document.querySelector('.footer__decor-item_g');
        const footerDecorA = document.querySelector('.footer__decor-item_a');
        const footerDecorY = document.querySelector('.footer__decor-item_y');
        const footerDecorS = document.querySelector('.footer__decor-item_s');

        const height = Math.max( document.body.scrollHeight, document.body.offsetHeight, 
            document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
        // console.log(height);

        const windowWidth = window.innerWidth;
        // console.log('windowWidth: ', windowWidth);

        // stop scroll
        const scrollController = {
            scrollPosition: 0,
            disabledScroll() {
                scrollController.scrollPosition = window.scrollY;
                document.body.style.cssText = `
                overflow: hidden;
                position: fixed;
                top: -${scrollController.scrollPosition}px;
                left: 0;
                height: 100vh;
                width: 100vw;
                padding-right: ${window.innerWidth - document.body.offsetWidth}px
            `;
                document.documentElement.style.scrollBehavior = 'unset';
            },
            enabledScroll() {
                document.body.style.cssText = '';
                window.scroll({ top: scrollController.scrollPosition })
                document.documentElement.style.scrollBehavior = '';
            },
        }



        // menu navigation
        const navClose = function () {
            // headerContainer.classList.remove('header__container-mobile');
            navbar.classList.remove('header__container-mobile');
            // guysTagline.style.display = 'block';

            if (windowWidth <= 890) {
                // headerSubmit.style.display = 'none';
            } else {
                // headerSubmit.style.display = 'block';
            }
            headerSlogan.style.display = 'none';
            headerSubmit.style.display = 'none';

            headerNav.style.display = 'none';

            navIconBtn.style.display = 'flex';
            // headerLanguage.style.display = 'none';
            headerNavClose.style.display = 'none';

            headerNavList.classList.remove('black-bg');
            headerLogo.forEach(function(logo) {
                logo.style.fill = '#151515';
            });

            // if (item.classList.contains('nav__link4') || item.classList.contains('nav__link5')) {
            //     productsText.style.top = '0vh';

            // for (let i = 0; i < productsTextBlock.length; i++){
            //     productsTextSecondBlock[i].classList.remove('products__text-second_block-open');

            //     productsImg[i].classList.remove(`img-right${i}`);

            //     productsBtn[i].classList.remove(`btn-block_right${i}`);

            //     productsBgRigh[i].classList.remove(`bg-right${i}`);

            // }
            // }

            // start scroll
            // document.body.classList.remove('no-scroll');
            scrollController.enabledScroll();
        }

        headerBtn.addEventListener('click', () => {
            // headerContainer.classList.add('header__container-mobile');
            navbar.classList.add('header__container-mobile');
            // guysTagline.style.display = 'none';
            // headerSubmit.style.display = 'none';
            headerSubmit.style.display = 'block';
            headerSlogan.style.display = 'none';
            headerNav.style.display = 'block';

            navIconBtn.style.display = 'none';
            // headerLanguage.style.display = 'block';
            headerLanguage.style.display = 'flex';
            headerNavClose.style.display = 'block';

            headerNavList.classList.add('black-bg');
            headerLogo.forEach(function(logo) {
                logo.style.fill = '#eeeeee';
            });
            // stop scroll
            // document.body.classList.toggle('no-scroll');
            scrollController.disabledScroll();

            headerNavListItems.forEach(function (item) {
                item.addEventListener('click', () => {
                    // // headerContainer.classList.remove('header__container-mobile');
                    // navbar.classList.remove('header__container-mobile');
                    // headerSubmit.style.display = 'block';
                    // headerSlogan.style.display = 'block';
                    // headerNav.style.display = 'none';
            
                    // navIconBtn.style.display = 'flex';
                    // // headerLanguage.style.display = 'none';
                    // headerNavClose.style.display = 'none';
            
                    // headerNavList.classList.remove('black-bg');
                    // headerLogo.forEach(function(logo) {
                    //     logo.style.fill = '#151515';
                    // });

                    // // if (item.classList.contains('nav__link4') || item.classList.contains('nav__link5')) {
                    // //     productsText.style.top = '0vh';

                    // for (let i = 0; i < productsTextBlock.length; i++){
                    //     productsTextSecondBlock[i].classList.remove('products__text-second_block-open');

                    //     productsImg[i].classList.remove(`img-right${i}`);

                    //     productsBtn[i].classList.remove(`btn-block_right${i}`);

                    //     productsBgRigh[i].classList.remove(`bg-right${i}`);

                    // }
                    // // }

                    // // start scroll
                    // // document.body.classList.remove('no-scroll');
                    // scrollController.enabledScroll();
                    navClose();
                });
            });

            headerSubmit.addEventListener('click', () => {
                // // headerContainer.classList.remove('header__container-mobile');
                // navbar.classList.remove('header__container-mobile');
                // headerSubmit.style.display = 'block';
                // headerSlogan.style.display = 'block';
                // headerNav.style.display = 'none';
        
                // navIconBtn.style.display = 'flex';
                // // headerLanguage.style.display = 'none';
                // headerNavClose.style.display = 'none';
        
                // headerNavList.classList.remove('black-bg');
                // headerLogo.forEach(function(logo) {
                //     logo.style.fill = '#151515';
                // });
        
        
                // for (let i = 0; i < productsTextBlock.length; i++){
                //     productsTextSecondBlock[i].classList.remove('products__text-second_block-open');
        
                //     productsImg[i].classList.remove(`img-right${i}`);
        
                //     productsBtn[i].classList.remove(`btn-block_right${i}`);
        
                //     productsBgRigh[i].classList.remove(`bg-right${i}`);
        
                // }
                // // start scroll
                // // document.body.classList.toggle('no-scroll');
                // scrollController.enabledScroll();
                navClose();
            });
        
        });

        headerNavClose.addEventListener('click', () => {
            // // headerContainer.classList.remove('header__container-mobile');
            // navbar.classList.remove('header__container-mobile');
            // headerSubmit.style.display = 'block';
            // headerSlogan.style.display = 'block';
            // headerNav.style.display = 'none';

            // navIconBtn.style.display = 'flex';
            // // headerLanguage.style.display = 'none';
            // headerNavClose.style.display = 'none';

            // headerNavList.classList.remove('black-bg');
            // headerLogo.forEach(function(logo) {
            //     logo.style.fill = '#151515';
            // });


            // for (let i = 0; i < productsTextBlock.length; i++){
            //     productsTextSecondBlock[i].classList.remove('products__text-second_block-open');

            //     productsImg[i].classList.remove(`img-right${i}`);

            //     productsBtn[i].classList.remove(`btn-block_right${i}`);

            //     productsBgRigh[i].classList.remove(`bg-right${i}`);

            // }
            // // start scroll
            // // document.body.classList.toggle('no-scroll');
            // scrollController.enabledScroll();
            navClose();
        });



        // menu 2 screen
        const menuScreen = function () {
            let windowScrollTop = window.pageYOffset;
            // console.log('windowScrollTop: ', windowScrollTop);
            // let coordPortfolioTop = document.querySelector('.portfolio').getBoundingClientRect().top;
            // console.log('coordPortfolioTop: ', coordPortfolioTop);

            if (windowScrollTop > 60 && windowScrollTop < 250) {
                navbar.classList.add('header-opacity');
            } else if (windowScrollTop >= 0 && windowScrollTop <= 60) {
                navbar.classList.remove('header-opacity');
                headerContainer.classList.remove('header__container-pad');
            } else if (windowScrollTop >= 690) {
                headerContainer.classList.add('header__container-pad');
            }

            if (windowScrollTop > 250 && windowScrollTop <= 860) {
                navbar.classList.remove('header-opacity');
                navbar.classList.add('scrolled');

                headerNav.style.display = 'none';
                // headerSlogan.style.display = 'block';
                // headerSubmit.style.display = 'block';
                headerBtn.style.display = 'block';
                
                // headerSubmit.classList.remove('scrolled-back');
                // headerSlogan.classList.remove('scrolled-back');

                // if (navbar.classList.contains('header__container-mobile')) {
                //     headerNav.style.display = 'grid';
                //     headerSubmit.classList.add('scrolled-back');
                // } else {
                //     headerNav.style.display = 'none';
                //     headerSubmit.classList.remove('scrolled-back');
                // }
            }
            else if (windowScrollTop > 860 && !headerContainer.classList.contains('header__container-mobile')) {
                navbar.classList.add('scrolled');
                
                headerNav.style.display = 'none';
                headerBtn.style.display = 'block';

                // headerSubmit.classList.add('scrolled-back');
                // headerSlogan.classList.add('scrolled-back');

                // setTimeout(() => {
                    // headerSubmit.style.display = 'none';
                    // headerSlogan.style.display = 'none';
                // }, 600);
                // console.log('windowScrollTop: ', windowScrollTop);
            }
            // else if (coordPortfolioTop < 250 && headerContainer.classList.contains('header__container-mobile')) {
            //     headerNav.style.display = 'block';
            //     setTimeout(() => {
            //         headerSubmit.style.display = 'block';
            //     }, 600);
            // }
            else if (windowScrollTop <= 250) {
                navbar.classList.remove('scrolled');

                headerNav.style.display = 'block';
                headerSlogan.style.display = 'none';
                // headerSubmit.style.display = 'none';
                headerBtn.style.display = 'none';

                if (navbar.classList.contains('header__container-mobile')) {
                    headerSubmit.style.display = 'block';
                } else {
                    headerSubmit.style.display = 'none';
                }

                // headerSubmit.classList.remove('scrolled-back');
                // headerSlogan.classList.remove('scrolled-back');

            }

            if (navbar.classList.contains('header__container-mobile')) {
                headerNav.style.display = 'block';
                // setTimeout(() => {
                    headerSubmit.style.display = 'block';
                // }, 600);
                headerSubmit.classList.remove('scrolled-back');
                // headerSlogan.classList.remove('scrolled-back');
            }
        }


        if (windowWidth <= 890) {
            headerBtn.style.display = 'block';
            headerNav.style.display = 'none';
            // headerSubmit.style.display = 'none';
        }
        else {
            // color menu 2
            // const menuColor = function (target) {
            //     // const coordPortfolio = portfolio.getBoundingClientRect();
            //     // const coordProducts = products.getBoundingClientRect();
            //     const coordFooter = footer.getBoundingClientRect();

            //     // console.log('coordFooter: ', coordFooter.top);

            //     // if ((coordPortfolio.top < 70 && coordPortfolio.bottom > 50) || (coordProducts.top < 70 && coordProducts.bottom > 50) || (coordFooter.top < 70 && coordFooter.bottom > 50)) {
            //     if (coordFooter.top < 70 && coordFooter.bottom > 50) {
            //         headerLogo.forEach(function(logo) {
            //             logo.style.fill = '#eeeeee';
            //         });
            //         navIconBtn.classList.add('nav-icon-btn-white');
            //         navCircleItem.forEach(function(item) {
            //             item.classList.add('nav-circle-item-white');
            //         });
            //         dropdownButton.classList.add('dropdown__button-white');
            //         dropdownLink.forEach(function(link) {
            //             link.classList.add('dropdown__link-active');
            //         });

            //     }
            //     else if (headerContainer.classList.contains('header__container-mobile')) {
            //         headerLogo.forEach(function(logo) {
            //             logo.style.fill = '#eeeeee';
            //         });
            //     }
            //     else {
            //         headerLogo.forEach(function(logo) {
            //             logo.style.fill = '#151515';
            //         });
            //         navIconBtn.classList.remove('nav-icon-btn-white');
            //         navCircleItem.forEach(function(item) {
            //             item.classList.remove('nav-circle-item-white');
            //         });
            //         dropdownButton.classList.remove('dropdown__button-white');
            //         dropdownLink.forEach(function (link) {
            //             link.classList.remove('dropdown__link-active');
            //         });
            //     }
            // } 


            // animat footer

            // const paths = document.querySelectorAll('.footer__decor-item path');

            // for (let i = 0; i < paths.length; i++) {
            //     console.log(`Length ${i + 1} is ${Math.ceil(paths[i].getTotalLength())}`);
            // }

            // const footerDecorAnim = function () {

            //     let coordFooterTop = document.querySelector('.footer').getBoundingClientRect().top;
            //     // console.log('coordFooterTop: ', coordFooterTop);

            //     if (coordFooterTop <= 200) {
            //         footerDecorG.classList.add('footer-anim');
            //         footerDecorA.classList.add('footer-anim');
            //         footerDecorY.classList.add('footer-anim');
            //         footerDecorS.classList.add('footer-anim');
            //     }

            // }

            
            // run function scrolling the page
            window.addEventListener('scroll', function () {
                menuScreen();
                // menuColor();
                // footerDecorAnim();
            });

            menuScreen();
            // menuColor();
            // footerDecorAnim();
        }
            
    
        
        // tag management
        // portfolioTagsLinks[0].style.backgroundColor = portfolioTagsActiveColor[0];

        // function CookiesDelete() {
        //     var cookies = document.cookie.split(";");
        //     for (var i = 0; i < cookies.length; i++) {
        //         var cookie = cookies[i];
        //         var eqPos = cookie.indexOf("=");
        //         var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        //         document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;";
        //         document.cookie = name + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        //     }
        // }

        const activeTag = () => {

            for (let i = 0; i < portfolioTagsLinks.length; i++) {

                if (document.cookie.includes(portfolioTagsLinks[i].textContent)) {

                    portfolioTagsLinks[i].style.backgroundColor = portfolioTagsActiveColor[i];
                    portfolioTagsLinks[i].classList.add('portfolio-active');
                    // portfolioTagsLinks[i].classList.remove('colorBg');
                    if (i > 0) {
                        portfolioTagsLinks[0].classList.remove('portfolio-active');
                        // portfolioTagsLinks[0].classList.add('colorBg');
                        portfolioTagsLinks[0].style.backgroundColor = colorBg;
                    } else {
                        for (let i = 1; i < portfolioTagsLinks.length; i++) {
                            portfolioTagsLinks[i].classList.remove('portfolio-active');
                            // portfolioTagsLinks[i].classList.add('colorBg');
                            portfolioTagsLinks[i].style.backgroundColor = colorBg;
                        };
                    }
                
                    // return portfolioTagsLinks[i];
                }
            }
        }

        const receivServiceСookie = () => {

            for (let i = 0; i < portfolioTagsLinks.length; i++) {

                if (document.cookie.includes(portfolioTagsLinks[i].textContent)) {
                    portfolioProjectsItem.forEach(element => {
                        element.classList.remove('block');
                    });

                    allTags.forEach(element => {
                        if (document.cookie.includes(element.textContent)) {
                            element.parentNode.parentNode.style.display = 'block';
                            cooka = element.textContent;
                        }
                        activeTag();
                    });
                    // console.log(document.cookie);
                    // document.cookie = `name= ; Path=/; Domain=127.0.0.1; expires=Thu, 01 Jan 1970 00:00:00 GMT;`;
                    // document.cookie = `name=${portfolioTagsLinks[i].textContent}; expires=Thu, 01 Jan 1970 00:00:00 GMT;`;
                    // // document.cookie = `name=${portfolioTagsLinks[i].textContent}; expires=-1`;
                    // CookiesDelete();
                    // console.log(cooka);
                    // console.log(document.cookie);

                    break;
                
                } else {
                    portfolioProjectsItem.forEach(element => {
                        element.classList.add('block');
                    });
                }
            }
        }

        const receivService = () => {
            for (let i = 0; i < portfolioTagsLinks.length; i++) {

                portfolioTagsLinks[i].addEventListener('click', (event) => {
                    // console.log(event);
                    // document.cookie = `name=${document.cookie}; expires=Thu, 01 Jan 1970 00:00:00 GMT;`;
    
                    if (flagAll) {
                        portfolioProjectsItem.forEach(element => {
                            element.classList.remove('block');
                        });
                        // allTags.forEach(element => {
                        //     if (document.cookie.includes(element.textContent)) {
                        //         element.parentNode.parentNode.style.display = 'none';
                        //         cooka = element.textContent;
                        //     }
                        //     activeTag();
                        // }); 
                        flagAll = false;
                    }
                
                    portfolioTagsLinks[i].style.backgroundColor = portfolioTagsActiveColor[i];
                    portfolioTagsLinks[i].classList.add('portfolio-active');
                    // portfolioTagsLinks[i].classList.remove('colorBg');
                    if (i > 0) {
                        portfolioTagsLinks[0].classList.remove('portfolio-active');
                        // portfolioTagsLinks[0].classList.add('colorBg');
                        portfolioTagsLinks[0].style.backgroundColor = colorBg;
                    } else {
                        for (let i = 1; i < portfolioTagsLinks.length; i++) {
                            portfolioTagsLinks[i].classList.remove('portfolio-active');
                            // portfolioTagsLinks[i].classList.add('colorBg');
                            portfolioTagsLinks[i].style.backgroundColor = colorBg;
                        };
                    }
    
                    // const search = document.querySelector('#search');
                    // const allTags = document.querySelectorAll('.list-portfolio__item-link');
                    // search.onkeyup = function (event) {
                    // console.log(event.target.innerText);
    
                
                    // const regex = new RegExp(event.target.innerText.toLowerCase());
                    const regex = new RegExp(event.target.innerText);
                    // console.log('regex: ', regex);
    
                    if (portfolioTagsLinks[i].innerText.toLowerCase() === 'all') {
                        // console.log('regex: ', regex);
    
                        // if (cooka != '') {
                        //     allTags.forEach(element => {
                        //         if (cooka.includes(element.textContent)) {
                        //             element.parentNode.parentNode.style.display = 'none';
                        //         }
                        //         cooka = '';
                        //         // activeTag();
                        //     });  
                        // }
    
                        allTags.forEach(element => {
                            element.parentNode.parentNode.style.display = 'block';
                        })
                        cooka = '';
                        flagCases = false;
                        // console.log('yes');
    
                    }
                    else if (portfolioTagsLinks[i].innerText.toLowerCase() != 'all' && !flagCases) {
    
                        allTags.forEach(element => {
                            element.parentNode.parentNode.style.display = 'none';
                        })
                        flagCases = true;
                    }
    
                    if ((portfolioTagsLinks[i].innerText.toLowerCase() != 'all' && flagCases) || (cooka != '')) {
                    
                        allTags.forEach(element => {
                            if (cooka.includes(element.textContent)) {
                                element.parentNode.parentNode.style.display = 'block';
                            }
                            // activeTag();
                        });
    
                        allTags.forEach(element => {
                            // console.log(allTags.parentNode.id);
                            if (regex.test(element.textContent)) {
                                element.parentNode.parentNode.style.display = 'block';
                                // console.log('да');
                                // console.log(element.parentNode.parentNode);
                            }
                            // else {
                            //     element.parentNode.parentNode.parentNode.style.display = 'none';
                            //     console.log('нет');
        
                            // }
                        })
                        // }    
                    }
                });
    
                // receivServiceСookie();
    
            }
        }

        const checkBlocks = (count) => {
            allTags.forEach(element => {
                if (element.parentNode.parentNode.style.display === 'block') {
                    count++;
                }
            });

            // console.log(count);

            if (count === 0) {
                portfolioTagsLinks[0].classList.add('portfolio-active');
                portfolioTagsLinks[0].style.backgroundColor = portfolioTagsActiveColor[0];

                allTags.forEach(element => {
                    element.parentNode.parentNode.style.display = 'block';
                })
                cooka = '';
                flagCases = false;    

                for (let i = 1; i < portfolioTagsLinks.length; i++) {
                    portfolioTagsLinks[i].classList.remove('portfolio-active');
                    portfolioTagsLinks[i].style.backgroundColor = colorBg;
                }
            }
        }

        const checkLinks = () => {

            for (let j = 1; j < portfolioTagsLinks.length; j++) {

                // if ((portfolioTagsLinks[i].innerText.toLowerCase() != 'all' && flagCases) || (cooka != '')) {
                    
                //     allTags.forEach(element => {
                //         if (cooka.includes(element.textContent)) {
                //             element.parentNode.parentNode.style.display = 'block';
                //         }
                //         // activeTag();
                //     });

                        // console.log(allTags.parentNode.id);
                if (portfolioTagsLinks[j].classList.contains('portfolio-active') ) {
                    allTags.forEach(element => {
                        if (element.textContent === portfolioTagsLinks[j].textContent) {
                            if (element.parentNode.parentNode.style.display != 'block') {
                                portfolioTagsLinks[j].classList.remove('portfolio-active');
                                portfolioTagsLinks[j].style.backgroundColor = colorBg;    
                            } 
                            else {
                                portfolioTagsLinks[j].classList.add('portfolio-active');
                                portfolioTagsLinks[j].style.backgroundColor = portfolioTagsActiveColor[j];    
                            }
                            // console.log("case - " + element.textContent);    
                            // console.log("link - " + portfolioTagsLinks[j].textContent);    
                        }
                        // else if (element.textContent === portfolioTagsLinks[j].textContent && element.parentNode.parentNode.style.display === 'block') {
                        //     portfolioTagsLinks[j].classList.add('portfolio-active');
                        //     portfolioTagsLinks[j].style.backgroundColor = portfolioTagsActiveColor[j];
    
                        // }
                    });
                }
                // if (!portfolioTagsLinks[j].classList.contains('portfolio-active') ) {
                //     portfolioTagsLinks[0].classList.add('portfolio-active');
                //     portfolioTagsLinks[0].style.backgroundColor = portfolioTagsActiveColor[0];
    
                //     allTags.forEach(element => {
                //         element.parentNode.parentNode.style.display = 'block';
                //     })
                //     cooka = '';
                //     flagCases = false;    
    
                // }
                        // else if (regex.test(element.textContent) && !portfolioTagsLinks[i].classList.contains('portfolio-active')) {
                        //     element.parentNode.parentNode.style.display = 'none';
                        //     // console.log('нет');

                        // }
                    // }    
                // }
            }

        }

        const checkLinksActive = () => {

            let countLinksActive;

            for (let j = 1; j < portfolioTagsLinks.length; j++) {

                countLinksActive = false;

                if (portfolioTagsLinks[j].classList.contains('portfolio-active')) {
                    countLinksActive = true;
                    break;
                }
                // if (!portfolioTagsLinks[j].classList.contains('portfolio-active') ) {
                //     portfolioTagsLinks[0].classList.add('portfolio-active');
                //     portfolioTagsLinks[0].style.backgroundColor = portfolioTagsActiveColor[0];
    
                //     allTags.forEach(element => {
                //         element.parentNode.parentNode.style.display = 'block';
                //     })
                //     cooka = '';
                //     flagCases = false;    
    
                // }
                        // else if (regex.test(element.textContent) && !portfolioTagsLinks[i].classList.contains('portfolio-active')) {
                        //     element.parentNode.parentNode.style.display = 'none';
                        //     // console.log('нет');

                        // }
                    // }    
                // }
            }

            if (!countLinksActive) {
                portfolioTagsLinks[0].classList.add('portfolio-active');
                portfolioTagsLinks[0].style.backgroundColor = portfolioTagsActiveColor[0];

                allTags.forEach(element => {
                    element.parentNode.parentNode.style.display = 'block';
                })
                cooka = '';
                flagCases = false; 
            }

        }

        const receivService2 = () => {
            for (let i = 0; i < portfolioTagsLinks.length; i++) {

                portfolioTagsLinks[i].addEventListener('click', (event) => {
                    // console.log(event);
                    // document.cookie = `name=${document.cookie}; expires=Thu, 01 Jan 1970 00:00:00 GMT;`;
                    const regex = new RegExp(event.target.innerText);
                    flagActiveTags = false;
                    // flagActiveCase = false;
                    let flagTags = false;
                    let countBlock = 0;
    
                    if (flagAll) {
                        portfolioProjectsItem.forEach(element => {
                            element.classList.remove('block');
                        });
                        // allTags.forEach(element => {
                        //     if (document.cookie.includes(element.textContent)) {
                        //         element.parentNode.parentNode.style.display = 'none';
                        //         cooka = element.textContent;
                        //     }
                        //     activeTag();
                        // }); 
                        flagAll = false;
                    }
                    
                    if (portfolioTagsLinks[i].classList.contains('portfolio-active') && i > 0) {
                        portfolioTagsLinks[i].style.backgroundColor = colorBg;
                        portfolioTagsLinks[i].classList.remove('portfolio-active');

                        cooka = '';
                        
                        for (let i = 1; i < portfolioTagsLinks.length; i++) {
                            if (portfolioTagsLinks[i].classList.contains('portfolio-active')) {
                                flagActiveTags = true;
                                break;
                            }
                        }

                        if (!flagActiveTags) {
                            portfolioTagsLinks[0].classList.add('portfolio-active');
                            portfolioTagsLinks[0].style.backgroundColor = portfolioTagsActiveColor[0];

                            flagTags = true;

                        }
                        // else if (flagActiveTags) {
                        //     // let countBlock = 0;
                        //     allTags.forEach(element => {
                        //         if (element.parentNode.parentNode.style.display === 'block') {
                        //             countBlock++;
                        //         }
                        //     });

                        //     console.log(countBlock);

                        //     if (countBlock === 0) {
                        //         portfolioTagsLinks[0].classList.add('portfolio-active');
                        //         portfolioTagsLinks[0].style.backgroundColor = portfolioTagsActiveColor[0];
    
                        //         flagTags = true;    

                        //         for (let i = 1; i < portfolioTagsLinks.length; i++) {
                        //             portfolioTagsLinks[i].classList.remove('portfolio-active');
                        //             portfolioTagsLinks[i].style.backgroundColor = colorBg;
                        //         }
                        //     }
                        // }

                    } else if (!portfolioTagsLinks[i].classList.contains('portfolio-active') && i > 0) {
                        portfolioTagsLinks[i].style.backgroundColor = portfolioTagsActiveColor[i];
                        portfolioTagsLinks[i].classList.add('portfolio-active');
                        
                        if (portfolioTagsLinks[0].classList.contains('portfolio-active')) {
                            portfolioTagsLinks[0].classList.remove('portfolio-active');
                            portfolioTagsLinks[0].style.backgroundColor = colorBg;
                        }
                    } else if (i === 0) {
                        portfolioTagsLinks[0].classList.add('portfolio-active');
                        portfolioTagsLinks[0].style.backgroundColor = portfolioTagsActiveColor[0];

                        for (let i = 1; i < portfolioTagsLinks.length; i++) {
                            portfolioTagsLinks[i].classList.remove('portfolio-active');
                            portfolioTagsLinks[i].style.backgroundColor = colorBg;
                        }

                    }
    


                    // portfolioTagsLinks[i].classList.remove('colorBg');
                    // if (i > 0 && flagActiveTags) {
                    //     portfolioTagsLinks[0].classList.remove('portfolio-active');
                    //     // portfolioTagsLinks[0].classList.add('colorBg');
                    //     portfolioTagsLinks[0].style.backgroundColor = colorBg;
                    // }
                    // else if (i > 0 && !flagActiveTags) {
                    //     portfolioTagsLinks[0].classList.add('portfolio-active');
                    //     portfolioTagsLinks[0].style.backgroundColor = portfolioTagsActiveColor[0];

                    // }
                    // else {
                    //     for (let i = 1; i < portfolioTagsLinks.length; i++) {
                    //         portfolioTagsLinks[i].classList.remove('portfolio-active');
                    //         // portfolioTagsLinks[i].classList.add('colorBg');
                    //         portfolioTagsLinks[i].style.backgroundColor = colorBg;
                    //         // countActiveTags = 0;
                    //     };
                    // }
    
                    // const search = document.querySelector('#search');
                    // const allTags = document.querySelectorAll('.list-portfolio__item-link');
                    // search.onkeyup = function (event) {
                    // console.log(event.target.innerText);
    
                
                    // const regex = new RegExp(event.target.innerText.toLowerCase());
                    // const regex = new RegExp(event.target.innerText);
                    // console.log('regex: ', regex);
    
                    if (portfolioTagsLinks[i].innerText.toLowerCase() === 'all' || flagTags) {
                        // console.log('regex: ', regex);
    
                        // if (cooka != '') {
                        //     allTags.forEach(element => {
                        //         if (cooka.includes(element.textContent)) {
                        //             element.parentNode.parentNode.style.display = 'none';
                        //         }
                        //         cooka = '';
                        //         // activeTag();
                        //     });  
                        // }
    
                        allTags.forEach(element => {
                            element.parentNode.parentNode.style.display = 'block';
                        })
                        cooka = '';
                        flagCases = false;
                        // console.log('yes');
    
                    }
                    else if (portfolioTagsLinks[i].innerText.toLowerCase() != 'all' && !flagCases) {
    
                        allTags.forEach(element => {
                            element.parentNode.parentNode.style.display = 'none';
                        })
                        flagCases = true;
                    }
    
                    if ((portfolioTagsLinks[i].innerText.toLowerCase() != 'all' && flagCases) || (cooka != '')) {
                    
                        allTags.forEach(element => {
                            if (cooka.includes(element.textContent)) {
                                element.parentNode.parentNode.style.display = 'block';
                            }
                            // activeTag();
                        });
    
                        allTags.forEach(element => {
                            // console.log(allTags.parentNode.id);
                            if (regex.test(element.textContent) && portfolioTagsLinks[i].classList.contains('portfolio-active')) {
                                element.parentNode.parentNode.style.display = 'block';
                                // console.log('да');
                                // console.log(element.parentNode.parentNode);
                            }
                            else if (regex.test(element.textContent) && !portfolioTagsLinks[i].classList.contains('portfolio-active')) {
                                element.parentNode.parentNode.style.display = 'none';
                                // console.log('нет');
        
                            }
                        })
                        // }    
                    }

                    checkBlocks(countBlock);
                    checkLinks();
                    checkLinksActive();

                    // allTags.forEach(element => {
                    //     if (element.parentNode.parentNode.style.display === 'block') {
                    //         countBlock++;
                    //     }
                    // });

                    // console.log(countBlock);

                    // if (countBlock === 0) {
                    //     portfolioTagsLinks[0].classList.add('portfolio-active');
                    //     portfolioTagsLinks[0].style.backgroundColor = portfolioTagsActiveColor[0];

                    //     allTags.forEach(element => {
                    //         element.parentNode.parentNode.style.display = 'block';
                    //     })
                    //     cooka = '';
                    //     flagCases = false;    

                    //     for (let i = 1; i < portfolioTagsLinks.length; i++) {
                    //         portfolioTagsLinks[i].classList.remove('portfolio-active');
                    //         portfolioTagsLinks[i].style.backgroundColor = colorBg;
                    //     }
                    // }
                });
    
                // receivServiceСookie();
    
            }
        }

        const receivService3 = () => {
            for (let i = 0; i < portfolioTagsLinks.length; i++) {

                portfolioTagsLinks[i].addEventListener('click', (event) => {
                    // console.log(event);
                    // document.cookie = `name=${document.cookie}; expires=Thu, 01 Jan 1970 00:00:00 GMT;`;
                    const regex = new RegExp(event.target.innerText);
                    flagActiveTags = false;
                    // flagActiveCase = false;
                    let flagTags = false;
                    let countBlock = 0;
    
                    if (flagAll) {
                        portfolioProjectsItem.forEach(element => {
                            element.classList.remove('block');
                        });
                        // allTags.forEach(element => {
                        //     if (document.cookie.includes(element.textContent)) {
                        //         element.parentNode.parentNode.style.display = 'none';
                        //         cooka = element.textContent;
                        //     }
                        //     activeTag();
                        // }); 
                        flagAll = false;
                    }
                    
                    if (portfolioTagsLinks[i].classList.contains('portfolio-active') && i > 0) {
                        portfolioTagsLinks[i].style.backgroundColor = colorBg;
                        portfolioTagsLinks[i].classList.remove('portfolio-active');

                        cooka = '';
                        
                        for (let i = 1; i < portfolioTagsLinks.length; i++) {
                            if (portfolioTagsLinks[i].classList.contains('portfolio-active')) {
                                flagActiveTags = true;
                                break;
                            }
                        }

                        if (!flagActiveTags) {
                            portfolioTagsLinks[0].classList.add('portfolio-active');
                            portfolioTagsLinks[0].style.backgroundColor = portfolioTagsActiveColor[0];

                            flagTags = true;

                        }
                        // else if (flagActiveTags) {
                        //     // let countBlock = 0;
                        //     allTags.forEach(element => {
                        //         if (element.parentNode.parentNode.style.display === 'block') {
                        //             countBlock++;
                        //         }
                        //     });

                        //     console.log(countBlock);

                        //     if (countBlock === 0) {
                        //         portfolioTagsLinks[0].classList.add('portfolio-active');
                        //         portfolioTagsLinks[0].style.backgroundColor = portfolioTagsActiveColor[0];
    
                        //         flagTags = true;    

                        //         for (let i = 1; i < portfolioTagsLinks.length; i++) {
                        //             portfolioTagsLinks[i].classList.remove('portfolio-active');
                        //             portfolioTagsLinks[i].style.backgroundColor = colorBg;
                        //         }
                        //     }
                        // }

                    } else if (!portfolioTagsLinks[i].classList.contains('portfolio-active') && i > 0) {
                        portfolioTagsLinks[i].style.backgroundColor = portfolioTagsActiveColor[i];
                        portfolioTagsLinks[i].classList.add('portfolio-active');
                        
                        if (portfolioTagsLinks[0].classList.contains('portfolio-active')) {
                            portfolioTagsLinks[0].classList.remove('portfolio-active');
                            portfolioTagsLinks[0].style.backgroundColor = colorBg;
                        }
                    } else if (i === 0) {
                        portfolioTagsLinks[0].classList.add('portfolio-active');
                        portfolioTagsLinks[0].style.backgroundColor = portfolioTagsActiveColor[0];

                        for (let i = 1; i < portfolioTagsLinks.length; i++) {
                            portfolioTagsLinks[i].classList.remove('portfolio-active');
                            portfolioTagsLinks[i].style.backgroundColor = colorBg;
                        }

                    }
    


                    // portfolioTagsLinks[i].classList.remove('colorBg');
                    // if (i > 0 && flagActiveTags) {
                    //     portfolioTagsLinks[0].classList.remove('portfolio-active');
                    //     // portfolioTagsLinks[0].classList.add('colorBg');
                    //     portfolioTagsLinks[0].style.backgroundColor = colorBg;
                    // }
                    // else if (i > 0 && !flagActiveTags) {
                    //     portfolioTagsLinks[0].classList.add('portfolio-active');
                    //     portfolioTagsLinks[0].style.backgroundColor = portfolioTagsActiveColor[0];

                    // }
                    // else {
                    //     for (let i = 1; i < portfolioTagsLinks.length; i++) {
                    //         portfolioTagsLinks[i].classList.remove('portfolio-active');
                    //         // portfolioTagsLinks[i].classList.add('colorBg');
                    //         portfolioTagsLinks[i].style.backgroundColor = colorBg;
                    //         // countActiveTags = 0;
                    //     };
                    // }
    
                    // const search = document.querySelector('#search');
                    // const allTags = document.querySelectorAll('.list-portfolio__item-link');
                    // search.onkeyup = function (event) {
                    // console.log(event.target.innerText);
    
                
                    // const regex = new RegExp(event.target.innerText.toLowerCase());
                    // const regex = new RegExp(event.target.innerText);
                    // console.log('regex: ', regex);
    
                    if (portfolioTagsLinks[i].innerText.toLowerCase() === 'all' || flagTags) {
                        // console.log('regex: ', regex);
    
                        // if (cooka != '') {
                        //     allTags.forEach(element => {
                        //         if (cooka.includes(element.textContent)) {
                        //             element.parentNode.parentNode.style.display = 'none';
                        //         }
                        //         cooka = '';
                        //         // activeTag();
                        //     });  
                        // }
    
                        allTags.forEach(element => {
                            element.parentNode.parentNode.style.display = 'block';
                        })
                        cooka = '';
                        flagCases = false;
                        // console.log('yes');
    
                    }
                    else if (portfolioTagsLinks[i].innerText.toLowerCase() != 'all' && !flagCases) {
    
                        allTags.forEach(element => {
                            element.parentNode.parentNode.style.display = 'none';
                        })
                        flagCases = true;
                    }
    
                    if ((portfolioTagsLinks[i].innerText.toLowerCase() != 'all' && flagCases) || (cooka != '')) {
                    
                        allTags.forEach(element => {
                            if (cooka.includes(element.textContent)) {
                                element.parentNode.parentNode.style.display = 'block';
                            }
                            // activeTag();
                        });
    
                        allTags.forEach(element => {
                            // console.log(allTags.parentNode.id);
                            if (regex.test(element.textContent) && portfolioTagsLinks[i].classList.contains('portfolio-active')) {
                                element.parentNode.parentNode.style.display = 'block';
                                // console.log('да');
                                // console.log(element.parentNode.parentNode);
                            }
                            // else if (regex.test(element.textContent) && !portfolioTagsLinks[i].classList.contains('portfolio-active')) {
                            else if (regex.test(element.textContent) && !portfolioTagsLinks[i].classList.contains('portfolio-active')) {
                                // element.parentNode.parentNode.style.display = 'none';
                                let childs = element.parentNode.childNodes;
                                let flagLink = true;

                                for (let link of portfolioTagsLinks) {
                                    for (let child of childs) {
                                        // console.log(child.textContent);
                                        if (link.textContent === child.textContent && link.classList.contains('portfolio-active')) {
                                            // console.log(link.textContent);
                                            flagLink = false;
                                            element.parentNode.parentNode.style.display = 'block';
                                            break;
                                        } else {
                                            element.parentNode.parentNode.style.display = 'none';
                                        }
                                    }
                                    if (!flagLink) {
                                        break;
                                    }
                                }
                                // console.log('element.parentNode.parentNode: ', element.parentNode);
                                // console.log('нет');
        
                            }
                        })
                        // }    
                    }

                    checkBlocks(countBlock);
                    checkLinks();
                    checkLinksActive();

                    // allTags.forEach(element => {
                    //     if (element.parentNode.parentNode.style.display === 'block') {
                    //         countBlock++;
                    //     }
                    // });

                    // console.log(countBlock);

                    // if (countBlock === 0) {
                    //     portfolioTagsLinks[0].classList.add('portfolio-active');
                    //     portfolioTagsLinks[0].style.backgroundColor = portfolioTagsActiveColor[0];

                    //     allTags.forEach(element => {
                    //         element.parentNode.parentNode.style.display = 'block';
                    //     })
                    //     cooka = '';
                    //     flagCases = false;    

                    //     for (let i = 1; i < portfolioTagsLinks.length; i++) {
                    //         portfolioTagsLinks[i].classList.remove('portfolio-active');
                    //         portfolioTagsLinks[i].style.backgroundColor = colorBg;
                    //     }
                    // }
                });
    
                // receivServiceСookie();
    
            }
        }

        navLinkPortfolio.addEventListener('click', () => {
            document.cookie = navLinkPortfolio.textContent;
        });

        // console.log('document.cookie: ', document.cookie);


        receivServiceСookie();
        receivService3();


        // receivServiceСookie();

    

        // for (let i = 0; i < portfolioTagsLinks.length; i++) {
        //     portfolioTagsLinks[i].addEventListener('mouseover', () => {
        //         portfolioTagsLinks[i].style.backgroundColor = portfolioTagsActiveColor[i];   
        //         portfolioTagsLinks[i].classList.add('portfolio-active');
        //     });

        //     portfolioTagsLinks[i].addEventListener('mouseout', () => {
        //         portfolioTagsLinks[i].style.backgroundColor = colorBg;   
        //         portfolioTagsLinks[i].classList.remove('portfolio-active');
        //     });
        // }
    
        // for (let i = 0; i < portfolioTagsLinks.length; i++) {

        //     portfolioTagsLinks[i].addEventListener('click', () => {
        //         if (!portfolioTagsLinks[i].classList.contains('portfolio-active')) {
        //             portfolioTagsLinks[0].classList.remove('portfolio-active');
        //             portfolioTagsLinks[0].style.backgroundColor = colorBg;
        //         }
    
        //     });
        // }

        // portfolioTagsLinks.forEach((element) => {
        //     element.addEventListener('click', () => {
        //     });
        // });
    
        // for (let i = 0; i < portfolioProjectsItem.length; i++) {
        //     portfolioProjectsItem[i].classList.remove('proj-' + (i + 1));
        // }

        // for (let i = 0; i < portfolioProjectsItem.length; i++) {
        //     // portfolioProjectsItem[i].addEventListener('click', () => portfolioProjectsItem[i].classList.add('proj-' + (i + 1)));
        //     portfolioProjectsItem[i].addEventListener('click', () => {
        //         document.cookie = document.portfolioProjectsItem[i].dataset.indexNumber;
        //         console.log('document.cookie: ', document.cookie);
        //     });

        //     // function setCookie(){
        //     //     document.cookie = "mycookie="+document.getElementById("input").value;
        //     // }
        // }
        
    }
    
    scriptPortfolioPage();

});


