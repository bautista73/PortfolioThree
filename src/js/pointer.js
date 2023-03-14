import gsap from 'gsap';

const bigBall = document.querySelector('.cursor__ball--big');
const smallBall = document.querySelector('.cursor__ball--small');
const hoverables = document.querySelectorAll('.hoverable');

// Listeners
document.addEventListener('mousemove', onMouseMove);

for (let i = 0; i < hoverables.length; i++) {
  hoverables[i].addEventListener('mouseenter', onMouseHover);
  hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}

// Move the cursor
function onMouseMove(e) {
  gsap.to(bigBall, {
    duration: 0.4,
    x: e.pageX - 15,
    y: e.pageY - window.pageYOffset - 15,
    ease: 'power2.out'
  });
  gsap.to(smallBall, {
    duration: 0.1,
    x: e.pageX - 5,
    y: e.pageY - window.pageYOffset - 7,
    ease: 'power2.out'
  });
}

// Hover an element
function onMouseHover() {
  gsap.to(bigBall, {
    duration: 0.3,
    scale: 4,
    ease: 'power2.out'
  });
}

function onMouseHoverOut() {
  gsap.to(bigBall, {
    duration: 0.3,
    scale: 1,
    ease: 'power2.out'
  });
}

