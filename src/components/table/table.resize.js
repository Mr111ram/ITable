import { $ } from '../../core/DOM';

export function resizeHandler($root, event, resizeType) {
	const $resizer = $(event.target);
	const $parent = $resizer.closest('[data-type="resizable"]');

	const cords = $parent.getCords();

	const resizeTypeCol = resizeType === 'col';

	const resizerStyles = { opacity: 1, zIndex: 10000 };

	let value = 0;

	if (resizeTypeCol) resizerStyles.bottom = '-5000px';
	else resizerStyles.right = '-5000px';

	$resizer.style(resizerStyles);

	document.onmousemove = (e) => {
		if (resizeTypeCol) {
			const delta = e.pageX - cords.right;
			value = `${cords.width + delta}px`;
			$resizer.style({ right: -delta + 'px' });
		} else {
			const delta = e.pageY - cords.bottom;
			value = `${cords.height + delta}px`;
			$resizer.style({ bottom: -delta + 'px' });
		}
	};

	document.onmouseup = () => {
		const resizeStyle = resizeTypeCol ? { width: value } : { height: value };

		$parent.style(resizeStyle);

		if (resizeTypeCol) {
			const cells = $root.findAll(`[data-col=${$parent.$el.dataset.column}]`);
			cells.forEach((el) => $(el).style(resizeStyle));
		}

		$resizer.style({ opacity: null, bottom: null, zIndex: null, right: null });
		document.onmousemove = null;
		document.onmouseup = null;
	};
}
