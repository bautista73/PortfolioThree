import { gsap } from 'gsap';
import { Scene } from '../js/script.js';

const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

const scene = new Scene();

tabs.forEach((tab) => {
  let isClicked = false;
  tab.addEventListener('click', () => {
    if (!isClicked) {
        isClicked = true;
        setTimeout(() => {
          isClicked = false;
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
            newPosition = { x: -4, y: 5, z: 15 };
            meshPosition = { x: 0, y: 0, z: 0 };
            tabContents.forEach((tabContent) => {
              if (tabContent.id === target) {
                gsap.fromTo(
                  tabContent, 
                  {opacity: 0}, 
                  { duration: 1, opacity: 1, pointerEvents: 'auto', ease: 'power3.in', delay: 0.6 });
              } else {
                gsap.to(
                  tabContent, 
                  {duration: 0.5, opacity: 0, pointerEvents: 'none'});
              }
            });
            break;

          case 'tab2':
            newPosition = { x: -2.8, y: -12, z: 8 };
            meshPosition = { x: -1.5, y: 1, z: 0 };
            tabContents.forEach((tabContent) => {
              if (tabContent.id === target) {
                gsap.fromTo(
                  tabContent, 
                  { opacity: 0,}, 
                  { duration: 1, opacity: 1, pointerEvents: 'auto', ease: 'power3.in', delay: 0.6 });
              } else {
                gsap.to(
                  tabContent, 
                  { duration: 0.5, opacity: 0, pointerEvents: 'none'});
              }
            });
            break;

          case 'tab3':
            newPosition = { x: 10, y: 10, z: 11 };
            meshPosition = { x: 2, y: 0, z: 1 };
            tabContents.forEach((tabContent) => {
              if (tabContent.id === target) {
                gsap.fromTo(
                  tabContent, 
                  { opacity: 0,}, 
                  { duration: 1, opacity: 1, pointerEvents: 'auto', ease: 'power3.in', delay: 0.6 });
              } else {
                gsap.to(
                  tabContent, 
                  { duration: 0.5, opacity: 0, pointerEvents: 'none'});
              }
            });
            break;

          default:
            newPosition = { x: 0, y: 0, z: 10};
            meshPosition = { x: 0, y: 0, z: 0 };
        }

        gsap.to(scene.mesh.position, {
            duration: 1.7,
            x: meshPosition.x,
            y: meshPosition.y,
            z: meshPosition.z,
            ease: 'power3.out',
        });

        gsap.to(scene.camera.position, {
            duration: 1.7,
            x: newPosition.x,
            y: newPosition.y,
            z: newPosition.z,
            ease: 'power3.out',
        });
      }, 500);
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const defaultTab = document.querySelector('.tab[data-default]');
  if (defaultTab) {
    defaultTab.click();
  }
})

const links = document.querySelectorAll('.item__link');
const metas = document.querySelectorAll('.item__meta');

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('mouseover', () => {
    metas[i].classList.add('hovered');
  });

  links[i].addEventListener('mouseout', () => {
    metas[i].classList.remove('hovered');
  });
}



