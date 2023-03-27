import { gsap } from 'gsap';
import { Item } from './item.js';
import { Preview } from './preview.js';

//work list hover

const itemAll = document.querySelectorAll('.item');

itemAll.forEach((item) => {
  const imageWrap = item.querySelector('.item__image-wrap');
  const image = item.querySelector('.item__image');
  const title = item.querySelector('.item__title');

  item.addEventListener('mouseenter', () => {
    gsap.killTweensOf(imageWrap);
    gsap.killTweensOf(image);
    gsap.to(imageWrap, { duration: 0.5, x: '0%', ease: 'power2.out' });
    gsap.to(image, { duration: 0.5, visibility: 'visible' });
    gsap.to(title, { duration: 0.5, marginLeft: '210px', ease: 'power2.out' });
  });

  item.addEventListener('mouseleave', () => {
    gsap.killTweensOf(imageWrap);
    gsap.killTweensOf(image);
    gsap.to(imageWrap, { duration: 0.5, x: '-100%', ease: 'power2.out' });
    gsap.to(title, { duration: 0.5, marginLeft: '2px', ease: 'power2.out' });
    gsap.to(image, { duration: 0.5, visibility: 'hidden', delay: 0.5, onComplete: () => {
        gsap.set(image, { clearProps: 'visibility' });
      }});
  });
});


// full screen transition

const body = document.body;
const contentEl = document.querySelector('.content');
const frameEl = document.querySelector('.frame');
const overlayRows = [...document.querySelectorAll('.overlay__row')];
const previews = [];
[...document.querySelectorAll('.preview')].forEach(preview => previews.push(new Preview(preview)));

const items = [];
[...document.querySelectorAll('.item')].forEach((item, pos) => items.push(new Item(item, previews[pos])));

const openItem = item => {
    
    gsap.timeline({
        defaults: {
            duration: 1, 
            ease: 'power3.inOut'
        }
    })
    .add(() => {
        contentEl.classList.add('content--hidden');
    }, 'start')

    .addLabel('start', 0)
    .set([item.preview.DOM.innerElements, item.preview.DOM.backCtrl], {
        opacity: 0
    }, 'start')
    .to(overlayRows, {
        scaleY: 1
    }, 'start')

    .addLabel('content', 'start+=0.6')

    .add(() => {
        body.classList.add('preview-visible');

        gsap.set(frameEl, {
            opacity: 0
        }, 'start')
        item.preview.DOM.el.classList.add('preview--current');
    }, 'content')

    .to([item.preview.DOM.image, item.preview.DOM.imageInner], {
        startAt: {y: pos => pos ? '101%' : '-101%'},
        y: '0%'
    }, 'content')
    
    .add(() => {
        for (const line of item.preview.multiLines) {
            line.in();
        }
        gsap.set(item.preview.DOM.multiLineWrap, {
            opacity: 1,
            delay:0.1
        })
    }, 'content')
    // animate frame element
    .to(frameEl, {
        ease: 'expo',
        startAt: {y: '-100%', opacity: 0},
        opacity: 1,
        y: '0%'
    }, 'content+=0.3')
    .to(item.preview.DOM.innerElements, {
        ease: 'expo',
        startAt: {yPercent: 101},
        yPercent: 0,
        opacity: 1
    }, 'content+=0.3')
    .to(item.preview.DOM.backCtrl, {
        opacity: 1
    }, 'content')

};

const closeItem = item => {
    
    gsap.timeline({
        defaults: {
            duration: 1, 
            ease: 'power3.inOut'
        }
    })
    .addLabel('start', 0)
    .to(item.preview.DOM.innerElements, {
        yPercent: -101,
        opacity: 0,
    }, 'start')
    .add(() => {
        for (const line of item.preview.multiLines) {
            line.out();
        }
    }, 'start')
    
    .to(item.preview.DOM.backCtrl, {
        opacity: 0
    }, 'start')

    .to(item.preview.DOM.image, {
        y: '101%'
    }, 'start')
    .to(item.preview.DOM.imageInner, {
        y: '-101%'
    }, 'start')
    
    .to(frameEl, {
        opacity: 0,
        y: '-100%',
        onComplete: () => {
            body.classList.remove('preview-visible');
            gsap.set(frameEl, {
                opacity: 1,
                y: '0%'
            })
        }
    }, 'start')

    .addLabel('grid', 'start+=0.6')

    .to(overlayRows, {

        scaleY: 0,
        onComplete: () => {
            item.preview.DOM.el.classList.remove('preview--current');
            contentEl.classList.remove('content--hidden');
        }
    }, 'grid')
};

for (const item of items) {
    item.DOM.link.addEventListener('click', () => openItem(item));
    item.preview.DOM.backCtrl.addEventListener('click', () => closeItem(item));
}


