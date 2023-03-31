import gsap from 'gsap';

const bigBall = document.querySelector('.cursor__ball--big');
const smallBall = document.querySelector('.cursor__ball--small');
const hoverables = document.querySelectorAll('.hoverable');

function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints;
}
if (!isTouchDevice()) {
  
  document.addEventListener('mousemove', onMouseMove);

  for (let i = 0; i < hoverables.length; i++) {
    hoverables[i].addEventListener('mouseenter', onMouseHover);
    hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
  }

  function onMouseMove(e) {
    gsap.to(bigBall, {
      duration: 0.3,
      x: e.pageX - 15,
      y: e.pageY - window.pageYOffset - 15,
      ease: 'power2.out'
    });
    gsap.to(smallBall, {
      duration: 0.1,
      x: e.pageX - 5,
      y: e.pageY - window.pageYOffset - 10,
      ease: 'power2.out'
    });
  }

  function onMouseHover() {
    gsap.to(bigBall, {
      duration: 0.3,
      scale: 2,
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
} else {

  document.removeEventListener('mousemove', onMouseMove);

  for (let i = 0; i < hoverables.length; i++) {
    hoverables[i].removeEventListener('mouseenter', onMouseHover);
    hoverables[i].removeEventListener('mouseleave', onMouseHoverOut);
  }
}

