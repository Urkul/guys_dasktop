document.addEventListener("DOMContentLoaded", () => {

    const portfolioTagsLinks = document.querySelectorAll('.portfolio__tags-link');

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
    
    let portfolioTagsActiveColor = [   
        "#FF6831",  
        "#2D82B7",        
        "#3BCFB1",        
        "#FFACE4",        
        "#440381",        
        "#C2085A",        
        "#279AF1",        
        "#098754",        
        "#DC5ABA",        
        "#A9CF00",        
        "#104B5F",        
        "#9A241C",        
        "#F3BF07",        
        "#9BA2FF",        
        "#4E4087",        
        "#CD2323",        
        "#D1ACFF",        
        "#AC2DB7",        
        "#005FCF",        
        "#3d9903"        
    ]; 

    for (let i = 0; i < portfolioTagsLinks.length; i++) {

        portfolioTagsLinks[i].addEventListener('click', () => {
            if (!portfolioTagsLinks[i].classList.contains('portfolio-active')) {
                portfolioTagsLinks[0].classList.remove('portfolio-active');
            }
    
        });
    }

    // portfolioTagsLinks.forEach((tag) => {
    //     tag.addEventListener('click', () => {
    //         tag.classList.remove('portfolio-active');
    //     });
    // });
});


