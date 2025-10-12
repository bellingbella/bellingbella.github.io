let maxRadius = 5;

setInterval(() => {
     for (let i = 0;i < getRandomInt(20);i++) {
        let dot = lookingDot(getRandomInt(dotnum), getRandomInt(Math.floor(boxHeightNum))); 
        for (let j = 0;j < getRandomInt(100);j++) {
            if (dot.getAttribute('d') == 'f') {
                dot.style.backgroundColor = colorCtl(j);
                dot.style.boxShadow = `0px 20px 20px 0px ${colorCtl(j)}`;
            } else if  (dot.getAttribute('d') == 'b')  {
                dot.style.backgroundColor = colorCtl(100-j);
                dot.style.boxShadow = `0px 20px 20px 0px ${colorCtl(100-j)}`;
            }
        }
        
        let tossing = getRandomInt(1);
        if (tossing) dot.getAttribute('d') = (dot.getAttribute('d') == 'f') ? 'b' : 'd';
     }     
}, 100)