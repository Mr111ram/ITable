// import { $ } from '../../core/DOM';
import { CoreComponent } from '../../core/CoreComponent';
import { createTable } from './table.template';
import { resizeHandler } from './table.resize';

export class Table extends CoreComponent {
	static className = 'itable-table';

	constructor ($root) {
		super($root, {
			name: 'table',
			listeners: [
				'mousedown',
			]
		})
	}

	toHTML() {
		return createTable(10);
	}

	onMousedown(event){
		const shouldResize = event.target.dataset.resize;
		if (shouldResize) resizeHandler(this.$root, event, shouldResize);
	}
}
