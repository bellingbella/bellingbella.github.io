const svglogo = document.querySelector('#svg-logo-container');


fetch('./assets/svg/logo.svg')
    .then(res => {
        if (!res.ok) {
            throw new Error('"./assets/svg/logo.svg.xml" couldn\'t be loaded.');
        }
        return res.text();
    })
    .then(data => {
        console.log(data);   
        svglogo.innerHTML = data;
    })
    .catch(err => {
        console.error(err);
    });
