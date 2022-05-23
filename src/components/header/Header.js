import { CoreComponent } from '../../core/CoreComponent';
import template from './header.template.pug';

export class Header extends CoreComponent {
	static className = 'itable-header';

	toHTML() {
		return template;
	}
}
