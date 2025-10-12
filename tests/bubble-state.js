


let d = ["belling","mamak","bella","quiky","dreima","orcotail","coxpha","llanda","kuox","cyberg","lypthoyn","hodeinma","podein","holmo","ludeia"];

setInterval(() => {
    let xr = getRandomInt(dotnum);
    let yr = getRandomInt(Math.floor(boxHeightNum));

    let tossCoin = getRandomInt(90);
    let lookedDot = lookingDot(xr, yr);


    if (tossCoin > 1) {
        let color = colorCtl(getRandomInt(100));
        lookedDot.style.backgroundColor = color;
        lookedDot.innerText = '';       
    }
    else {
        
        let randomCulta = getRandomInt(d.length - 1);
        
        for (let i = 0;i < d[randomCulta].length;i++) {
            let looked2 = lookingDot(xr+i, yr)
            looked2.innerText = d[randomCulta][i];
            looked2.style.backgroundColor = 'transparent';  

        }
    }

    

}, 10);

