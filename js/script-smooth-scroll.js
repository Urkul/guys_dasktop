
$(function () {
    
    'use strict';


    // lenis Smooth scroll
    const lenis = new Lenis({
        duration: 1.6
    })

    lenis.on('scroll', (e) => {
        // console.log(e)
    })
    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // integration Lenis on GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000)
    });
    


    // create animation ScrollTrigger
    function scrollTrig() {

        gsap.registerPlugin(ScrollTrigger);

        let gsapBl = $('.products__text-block').height();
        // console.log('gsapBl: ', gsapBl);

        // transform slider track
        let gsapTrack = $('.products__text-animation').height();
        // console.log('gsapTrack: ', gsapTrack);
        
        let scrollSliderTransform = gsapTrack - gsapBl;
        // console.log('scrollSliderTransform: ', scrollSliderTransform);

        // create ScrollTrigger
        gsap.to('.products__text-animation', {
            scrollTrigger: {
                trigger: '.products',
                start: 'top top',
                end: () => '+=' + gsapTrack,
                pin: true,
                scrub: true,
                // markers: true,
            },
            y: '-=' + scrollSliderTransform + 'px',
            // y: '-1200',
        });
        
    }

    scrollTrig();

});