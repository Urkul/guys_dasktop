
const footerSect = document.querySelector('.footer');

const footerContent = document.querySelector('.footer__content-items');
const footerDecor = document.querySelector('.footer__decor');

let flagFooterTop = true; 

// let coordFooter = footer.getBoundingClientRect();
// console.log('coordFooter: ', coordFooter.top);

let indexCoordFooter = 0;


// function scrollFooter() {

//     let coordFooter = footerSect.getBoundingClientRect();
//     // console.log('coordFooter: ', coordFooter.top);


//     // indexCoordFooter = coordFooter.top - window.pageYOffset;
//     // console.log('indexCoordFooter: ', indexCoordFooter);

//     // if (coordFooter.top < 200 && coordFooter.top >= 50) {

//     //     // console.log('coordFooterTop: ', coordFooter.top);

//     //     footerSect.classList.add('footer-sticky');

//     //     // animateFooterContentOpen(footerContent);
//     //     // flagFooterTop = false;
//     // }
    
//     // // else if (footerDecorTop >= window.innerHeight && !flagFooterTop)
//     // else if (coordFooter.top < 50 || coordFooter.top > 200) {
        
//     //     // animateFooterContentClose(footerContent);
//     //     // flagFooterTop = true; 
//     //     // footerSect.classList.remove('footer-sticky');

        
//     // }
// }

// // function animateFooterContentOpen(footerContent) {
// //     transition.begin(footerContent, [
// //         "transform translate(0,0) translate(0,-420px) .8s ",
// //         "opacity 0 1 1s linear"
// //     ]);
// // }

// // function animateFooterContentClose(footerContent) {
// //     transition.begin(footerContent, [
// //         "transform translate(0,-420px) translate(0,0) .8s ",
// //         "opacity 1 0 1s linear"
// //     ]);
// // }


// document.addEventListener('scroll', function () {

//     // let coordFooterDecor = footerDecor.getBoundingClientRect();
    
//     // scrollFooter();
// });


// scroll smooth block news with footer
const newsFooter = document.querySelector('.news__footer');
const topHidden  = document.querySelector('.top-hidden');
// const coordFooter = footer.getBoundingClientRect();
// const scrollHeight = Math.max(
//     document.body.scrollHeight, document.documentElement.scrollHeight,
//     document.body.offsetHeight, document.documentElement.offsetHeight,
//     document.body.clientHeight, document.documentElement.clientHeight
// );
// console.log('coordFooter: ', coordFooter.height);
// console.log('scrollHeight: ', scrollHeight);

newsFooter.addEventListener('click', function(e) {
    e.preventDefault();

    // const offsetPosition = scrollHeight - coordFooter.height;
    // console.log('offsetPosition: ', offsetPosition);

    // window.scrollBy({
    //     top: offsetPosition,
    //     behavior: 'smooth'
    // });

    // topHidden.scrollIntoView(false);
    topHidden.scrollIntoView({
        block: "end",
        inline: "nearest",
        behavior: "smooth"
    });

});


// scroll smooth all href
// const anchors = document.querySelectorAll('a[href*="#"]');

// for (let anchor of anchors) {
//     anchor.addEventListener("click", function (e) {
//         e.preventDefault();
//         const blockID = anchor.getAttribute('href');
//         document.querySelector('' + blockID).scrollIntoView({
//             behavior: "smooth",
//             block: "start"
//         });
//     }); 
// }


// gsap.registerPlugin(ScrollTrigger);

//     // const tl = gsap.timeline();

//     // tl.fromTo('.portfolio__title', {
//     //     x: -300,
//     //     opacity: 0,
//     // }, {
//     //     x: 0,
//     //     opacity: 1,
//     //     duration: 1,
//     // }, 1).fromTo('.portfolio__link-wrapper', {
//     //     y: 50,
//     //     opacity: 0,
//     // }, {
//     //     y: 0,
//     //     opacity: 1,
//     //     duration: 1,
//     // }, 1.4).fromTo('.portfolio__slider-btn-wrapper', {
//     //     x: 200,
//     //     opacity: 0,
//     // }, {
//     //     x: 0,
//     //     opacity: 1,
//     //     duration: 1,
//     //     // stagger: 0.15,
//     // }, 1.8).fromTo('.portfolio__slider', {
//     //     scaleY: 0,
//     //     y: 200,
//     //     opacity: 0.1,
//     // }, {
//     //     scaleY: 1,
//     //     y: 0,
//     //     opacity: 1,
//     //     duration: 1,
//     // }, 2.2);

//     // Scroll animation

// gsap.to('.footer__content-items', {
//     scrollTrigger: {
//         trigger: '.footer',
//         markers: true,
//         start: 'top top',
//         scrub: true,
//     },
//     yPercent: -280,

// });

