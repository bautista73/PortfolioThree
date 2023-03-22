import { gsap } from 'gsap';
import { Scene } from '../js/script.js';

const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');
const webglShader = document.querySelector('.webgl-shader');

const scene = new Scene();

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.target;

    tabs.forEach((t) => {
      t.classList.remove('active');
    });

    tabContents.forEach((tabContent) => {
      if (tabContent.id === target) {
        tabContent.classList.add('visible');
      } else {
        tabContent.classList.remove('visible');
      }
    });

    tab.classList.add('active');

    let newPosition;

    switch (target) {
      
      case 'tab1':
        newPosition = { x: 10, y: 2, z: 5 };
        tabContents.forEach((tabContent) => {
          if (tabContent.id === target) {
            gsap.fromTo(
              tabContent, 
              {opacity: 0}, 
              { duration: 1, opacity: 1, ease: 'power3.in', delay: 0.6 });
          } else {
            gsap.to(
              tabContent, 
              {duration: 0.5, opacity: 0,});
          }
        });
        break;

      case 'tab2':
        newPosition = { x: 0, y: 0, z: 1 };
        tabContents.forEach((tabContent) => {
          if (tabContent.id === target) {
            gsap.fromTo(
              tabContent, 
              { opacity: 0,}, 
              { duration: 1, opacity: 1, ease: 'power3.in', delay: 0.6 });
          } else {
            gsap.to(
              tabContent, 
              { duration: 0.5, opacity: 0,});
          }
        });
        break;

      case 'tab3':
        newPosition = { x: 5, y: -5, z: 65 };
        tabContents.forEach((tabContent) => {
          if (tabContent.id === target) {
            gsap.fromTo(
              tabContent, 
              { opacity: 0,}, 
              { duration: 1, opacity: 1, ease: 'power3.in', delay: 0.6 });
          } else {
            gsap.to(
              tabContent, 
              { duration: 0.5, 
                opacity: 0,});
          }
        });
        break;

      default:
        newPosition = { x: 10, y: 10, z: 4};
    }

    gsap.to(scene.camera.position, {
        duration: 1,
        x: newPosition.x,
        y: newPosition.y,
        z: newPosition.z,
        ease: 'power2.inOut',
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const defaultTab = document.querySelector('.tab[data-default]');
  if (defaultTab) {
    defaultTab.click();
  }
})


