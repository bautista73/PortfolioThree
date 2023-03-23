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
        tabContent.classList.add('visible');
      } else {
        tabContent.classList.remove('visible');
      }
    });

    tab.classList.add('active');

    let newPosition;
    let meshPosition;

    switch (target) {
      
      case 'tab1':
        newPosition = { x: -4, y: -4, z: 0 };
        meshPosition = { x: 0, y: 0, z: 0 };
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
        newPosition = { x: 0, y: 0, z: 6 };
        meshPosition = { x: 0, y: -1.25, z: 1 };
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
        meshPosition = { x: -1, y: -1, z: -1 };
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

      default:
        newPosition = { x: 0, y: 0, z: 10};
        meshPosition = { x: 0, y: 0, z: 0 };
    }

    gsap.to(scene.mesh.position, {
        duration: 1,
        x: meshPosition.x,
        y: meshPosition.y,
        z: meshPosition.z,
        ease: 'power2.inOut',
    });

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


