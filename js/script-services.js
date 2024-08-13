document.addEventListener('DOMContentLoaded', function () {

    const serviceTransfer = () => {
        
        const serviceLinks = document.querySelectorAll('.service__link');
        const navLinkPortfolio = document.querySelector('.nav__link-portfolio > a');
        const linkPortfolio = document.querySelector('.portfolio__link-wrapper > a');
        // console.log('linkPortfolio: ', linkPortfolio.textContent);

        serviceLinks.forEach(element => {
            element.addEventListener('click', (event) => {
                document.cookie = event.target.innerText;

                // console.log(document.cookie);
            });
        });

        navLinkPortfolio.addEventListener('click', (event) => {
            // document.cookie = event.target.innerText;
            document.cookie = navLinkPortfolio.textContent;
            // console.log(document.cookie);

            // for (let i = 0; serviceLinks.length; i++) {
            //     if (document.cookie.includes(serviceLinks[i].textContent)) {
            //         document.cookie = `name=${serviceLinks[i].textContent}; expires=Thu, 01 Jan 1970 00:00:00 GMT;`;
            //     }
            // }
        });

        linkPortfolio.addEventListener('click', (event) => {
            // document.cookie = event.target.innerText;
            document.cookie = linkPortfolio.textContent;
            // console.log(document.cookie);

        });
    }

    serviceTransfer();
});

