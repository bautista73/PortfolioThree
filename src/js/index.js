import { gsap } from 'gsap';
import { Scene } from '../js/script.js';

const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

const scene = new Scene();

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.target;

    tabs.forEach((t) => {
      t.classList.remove('active');
    });

    tabContents.forEach((tabContent) => {
      if (tabContent.id === target) {
        tabContent.classList.add('active');
      } else {
        tabContent.classList.remove('active');
      }
    });

    tab.classList.add('active');

    let newPosition;

    switch (target) {
      case 'tab1':
        newPosition = { x: 0, y: 0, z: 6 };
        break;
      case 'tab2':
        newPosition = { x: 0, y: 0, z: 0 };
        break;
      case 'tab3':
        newPosition = { x: 0, y: 0, z: 25 };
        break;
      default:
        newPosition = { x: 0, y: 0, z: 6 };
    }

    gsap.to(scene.camera.position, {
      duration: 1, // Set duration in seconds
      x: newPosition.x,
      y: newPosition.y,
      z: newPosition.z,
      ease: 'power2.inOut', // Set easing function
    });
  });
});





// const canvasButton = document.querySelector('#canvas-button-square');
// const canvas = document.querySelector('#webgl');

// canvasButton.addEventListener('click', () => {
//   canvas.style.width = '50%';
//   canvas.style.right = '0';
//   canvas.style.transition = 'width 0.5s ease-in-out, right 0.5s ease-in-out';
// });

