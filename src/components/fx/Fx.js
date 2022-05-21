import { CoreComponent } from "../../core/CoreComponent";
import template from "./fx.template.pug";

export class Fx extends CoreComponent{
	static className = 'itable-fx';

	constructor ($root) {
		super($root, {
			name: 'Fx',
			listeners: ['input'],
		});
	}

	toHTML() {
		return template;
	}

	onInput(event) {
		console.log('Fx: onInput', event);
	}
}