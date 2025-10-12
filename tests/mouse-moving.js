const body = document.body;

let latestEvent;
let ticking = false;

window.addEventListener('pointermove', (e) => {
  latestEvent = e;
  if (!ticking) {
    ticking = true;
    requestAnimationFrame(() => {
      updateUI(latestEvent);
      ticking = false;
    });
  }
});

let last = 0;
function updateUI(e) {
  let xr = Math.floor(e.clientX / boxWidth);
  let yr = Math.floor(e.clientY / boxWidth);

  let lookedDot = lookingDot(xr, yr);
  if (lookedDot.style.backgroundColor != 'red') {
    lookedDot.style.backgroundColor = 'red';
    lookedDot.innerText = '';
  } else {
    lookedDot.style.backgroundColor = 'black';
    lookedDot.innerText = '';
  }

}

