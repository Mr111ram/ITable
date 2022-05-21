import { DOMListener } from "./DOMListener.js";

export class CoreComponent extends DOMListener {
	constructor($root, options={}) {
		super($root, options.listeners);
		this.name = options.name;
	}

	// Return template component
	toHTML(){
		return '';
	}

	init() {
		this.initDOMListeners();
	}

	destroy(){
		this.removeDOMListeners();
	}
}