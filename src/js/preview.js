import { TextLinesReveal } from './textLinesReveal.js';

export class Preview {

	DOM = {
		el: null,
		image: null,
		imageInner: null,
		title: null,
		backCtrl: null,
		innerElements: null,
		multiLineWrap: null,
	};
	multiLines = [];
	
	/**
	 * Constructor.
	 * @param {Element} DOM_el - main element (.preview)
	 */
	constructor(DOM_el) {
		this.DOM.el = DOM_el;
		this.DOM.image = this.DOM.el.querySelector('.preview__img');
		this.DOM.imageInner = this.DOM.el.querySelector('.preview__img-inner');
		this.DOM.title = this.DOM.el.querySelector('.preview__title');
		this.DOM.backCtrl = this.DOM.el.querySelector('.preview__back');

		this.DOM.innerElements = [...this.DOM.el.querySelectorAll('.oh__inner')];
		this.DOM.multiLineWrap = [...this.DOM.el.querySelectorAll('.preview__column > p')];
		this.DOM.multiLineWrap.forEach(line => this.multiLines.push(new TextLinesReveal(line)));
	}
}