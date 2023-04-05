import { gsap } from 'gsap';

 export class Item {

	DOM = {
		el: null,
        image: null,
        imageInner: null,
        link: null,
        meta: null,
        title: null,
        desc: null,
	}
    
    /**
	 * Constructor.
	 * @param {Element} DOM_el - main element (.item)
     * @param {Preview} previewEl - the Preview element
	 */
	constructor(DOM_el, previewEl) {
		this.DOM.el = DOM_el;
        this.preview = previewEl;
        this.DOM.image = this.DOM.el.querySelector('.item__img');
        this.DOM.imageInner = this.DOM.el.querySelector('.item_git _img-inner');
        this.DOM.link = this.DOM.el.querySelector('.item__link');
        this.DOM.meta = this.DOM.el.querySelector('.item__meta');
        this.DOM.title = this.DOM.el.querySelector('.item__title');
        this.DOM.desc = this.DOM.el.querySelector('.item__desc');

        this.DOM.link.addEventListener('mouseenter', () => {
            gsap.killTweensOf(this.DOM.imageInner);
            gsap.to(this.DOM.imageInner, {
                duration: 2,
                ease: 'power4',
                scale: 1.2
            });
        });
        this.DOM.link.addEventListener('mouseleave', () => {
            gsap.killTweensOf(this.DOM.imageInner);
            gsap.to(this.DOM.imageInner, {
                duration: 0.7,
                ease: 'expo',
                scale: 1
            });
        });
	}
}