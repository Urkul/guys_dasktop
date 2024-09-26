
const animatItems = document.querySelectorAll('._animat-item');
const sloganTextLine = document.querySelectorAll('.slogan__text-line');

if (animatItems.length > 0) {

    window.addEventListener('scroll', animatOnScroll);

    function animatOnScroll() {
        for (let i = 0; i < animatItems.length; i++){
            const animatItem = animatItems[i];
            const animatItemHeight = animatItem.offsetHeight;
            const animatItemOffset = offset(animatItem).top;
            const animatStart = 4;

            let animatItemPoint = window.innerHeight - animatItemHeight / animatStart;

            if (animatItemHeight > window.innerHeight) {
                animatItemPoint = window.innerHeight - window.innerHeight / animatStart;
            }

            if ((pageYOffset > animatItemOffset - animatItemPoint) && pageYOffset < (animatItemOffset + animatItemHeight)) {

                setTimeout(() => {
                    animatItem.classList.add('_active-animat');
                }, 100);
                
            } else {
                if (!animatItem.classList.contains('_animat-no-hide')) {
                    animatItem.classList.remove('_active-animat');
                }
            }
        }
    }

    // функция получения отступа сверху
    function offset(el) {
        const rect = el.getBoundingClientRect();
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {
            top: rect.top + scrollTop,
            left: rect.left + scrollLeft
        }
    }
}

// sloganTextLine.addEventListener('mouseover', () => {
//     sloganTextLine.style.color = "#FF6831";
// });

// sloganTextLine.addEventListener('mouseout', () => {
//     sloganTextLine.style.color = "#cecece";
// });

sloganTextLine.forEach((item) => {
    item.addEventListener('mouseover', () => {
        item.style.color = "#FF6831";
    });
    
    item.addEventListener('mouseout', () => {
        item.style.color = "#cecece";
    });
});

