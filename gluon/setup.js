const container = document.querySelector('#gluonContainer');

let dotnum = 30;
let boxWidth = (container.clientWidth / dotnum) - 2;
let boxHeightNum = container.clientHeight / boxWidth;

for (let i = 0;i < boxHeightNum;i++) {
    let glRow = document.createElement('div');
    glRow.className = "gluon-row";
    for (let j = 0;j < dotnum;j++) {
        let glColumn = document.createElement('div');
        glColumn.className =  "gluon-column";
        glColumn.style.width = `${boxWidth}px`;

        let glDot = document.createElement('div');
        glDot.className  = "gluon-dot";
        glDot.setAttribute('c', `${j}:${i}`);
        glDot.setAttribute('t', '0'); //time
        glDot.setAttribute('d', 'f'); //direction
        glColumn.append(glDot);



        glColumn.setAttribute('cb', `${j}:${i}`);
        glColumn.setAttribute('t', '0');
        glColumn.setAttribute('d', 'f');
        glRow.append(glColumn);
    }    
    container.appendChild(glRow);
}

// utilities 

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function lookingDot(x,y) {
    return document.querySelector(`[c="${x}:${y}"]`);
}

function lookingBlock(x,y) {
    return document.querySelector(`[cb="${x}:${y}"]`);
}


function colorCtl(rate) {
    let r = Math.floor((rate / 100) * 255);
    return `rgb(${r}, 0, 0)`; 
}
