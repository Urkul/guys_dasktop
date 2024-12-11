document.addEventListener('DOMContentLoaded', function () {

    const scriptHeader = () => {

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


        // menu 2 screen
        const menuScreen = function () {
            let windowScrollTop = window.pageYOffset;
            // console.log('windowScrollTop: ', windowScrollTop);
            let coordPortfolioTop = document.querySelector('.portfolio').getBoundingClientRect().top;
            let coordClientsTop = document.querySelector('.clients').getBoundingClientRect().top;
            // console.log('coordPortfolioTop: ', coordPortfolioTop);

            if (windowScrollTop > 60 && windowScrollTop < 690) {
                navbar.classList.add('header-opacity');
            } else if (windowScrollTop >= 0 && windowScrollTop <= 60) {
                navbar.classList.remove('header-opacity');
                headerContainer.classList.remove('header__container-pad');
            } else if (windowScrollTop >= 690) {
                headerContainer.classList.add('header__container-pad');
            }

            // if (windowScrollTop > 690 && windowScrollTop <= 1300) {
            if (windowScrollTop > 690 && coordPortfolioTop >= 250) {
                navbar.classList.remove('header-opacity');
                navbar.classList.add('scrolled');

                headerNav.style.display = 'none';
                headerSlogan.style.display = 'block';
                headerSubmit.style.display = 'block';
                headerBtn.style.display = 'block';
                
                headerSubmit.classList.remove('scrolled-back');
                headerSlogan.classList.remove('scrolled-back');

                // if (navbar.classList.contains('header__container-mobile')) {
                //     headerNav.style.display = 'grid';
                //     headerSubmit.classList.add('scrolled-back');
                // } else {
                //     headerNav.style.display = 'none';
                //     headerSubmit.classList.remove('scrolled-back');
                // }
            }
            // else if (windowScrollTop > 1300) {
            else if (coordPortfolioTop < 250 && !navbar.classList.contains('header__container-mobile')) {
                navbar.classList.add('scrolled');
                
                headerNav.style.display = 'none';
                headerBtn.style.display = 'block';

                headerSubmit.classList.add('scrolled-back');
                // headerSlogan.classList.add('scrolled-back');

                setTimeout(() => {
                    headerSubmit.style.display = 'none';
                    // headerSlogan.style.display = 'none';
                }, 300);

                if (coordClientsTop <= 250) {
                    headerSlogan.classList.add('scrolled-back');

                    setTimeout(() => {
                        headerSlogan.style.display = 'none';
                    }, 300);    
                } else if (coordClientsTop > 250) {
                    headerSlogan.style.display = 'block';
                    headerSlogan.classList.remove('scrolled-back');
                }
                // console.log('windowScrollTop: ', windowScrollTop);
            }
            else if (coordPortfolioTop < 250 && navbar.classList.contains('header__container-mobile')) {
                headerNav.style.display = 'block';
                setTimeout(() => {
                    headerSubmit.style.display = 'block';
                }, 300);
            }
            else if (windowScrollTop <= 690) {
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
    }

    //     // color menu 2 
    //     // const menuColor = function (target) {
    //     //     // const coordPortfolio = portfolio.getBoundingClientRect();
    //     //     // const coordProducts = products.getBoundingClientRect();
    //     //     const coordFooter = footer.getBoundingClientRect();

    //     //     // console.log('coordFooter: ', coordFooter.top);

    //     //     // if ((coordPortfolio.top < 70 && coordPortfolio.bottom > 50) || (coordProducts.top < 70 && coordProducts.bottom > 50) || (coordFooter.top < 70 && coordFooter.bottom > 50)) {
    //     //     if (coordFooter.top < 70 && coordFooter.bottom > 50) {
    //     //         headerLogo.forEach(function(logo) {
    //     //             logo.style.fill = '#eeeeee';
    //     //         });
    //     //         navIconBtn.classList.add('nav-icon-btn-white');
    //     //         navCircleItem.forEach(function(item) {
    //     //             item.classList.add('nav-circle-item-white');
    //     //         });
    //     //         dropdownButton.classList.add('dropdown__button-white');
    //     //         dropdownLink.forEach(function(link) {
    //     //             link.classList.add('dropdown__link-active');
    //     //         });

    //     //     }
    //     //     else if (headerContainer.classList.contains('header__container-mobile')) {
    //     //         headerLogo.forEach(function(logo) {
    //     //             logo.style.fill = '#eeeeee';
    //     //         });
    //     //     }
    //     //     else {
    //     //         headerLogo.forEach(function(logo) {
    //     //             logo.style.fill = '#151515';
    //     //         });
    //     //         navIconBtn.classList.remove('nav-icon-btn-white');
    //     //         navCircleItem.forEach(function(item) {
    //     //             item.classList.remove('nav-circle-item-white');
    //     //         });
    //     //         dropdownButton.classList.remove('dropdown__button-white');
    //     //         dropdownLink.forEach(function (link) {
    //     //             link.classList.remove('dropdown__link-active');
    //     //         });
    //     //     }
    //     // } 


    //     // animat footer

    //     // const paths = document.querySelectorAll('.footer__decor-item path');

    //     // for (let i = 0; i < paths.length; i++) {
    //     //     console.log(`Length ${i + 1} is ${Math.ceil(paths[i].getTotalLength())}`);
    //     // }

    //     // const footerDecorAnim = function () {

    //     //     let coordFooterTop = document.querySelector('.footer').getBoundingClientRect().top;
    //     //     // console.log('coordFooterTop: ', coordFooterTop);

    //     //     if (coordFooterTop <= 200) {
    //     //         footerDecorG.classList.add('footer-anim');
    //     //         footerDecorA.classList.add('footer-anim');
    //     //         footerDecorY.classList.add('footer-anim');
    //     //         footerDecorS.classList.add('footer-anim');
    //     //     }

    //     // }

        
    //     // run function scrolling the page
    //     window.addEventListener('scroll', function () {
    //         menuScreen();
    //         // menuColor();
    //         // footerDecorAnim();
    //     });

    //     menuScreen();
    //     // menuColor();
    //     // footerDecorAnim();

    // }

    scriptHeader();

});