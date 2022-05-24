const CODES = {
	A: 65,
	Z: 90,
};

function createCell(col) {
	return /*html*/ `
	<div class="cell" 
		contenteditable 
		spellcheck="false" 
		data-col="${col}"
	></div>
	`;
}

function createCol(col) {
	return /*html*/ `
		<div 
			class="column"
			data-type="resizable"
			data-column="${col}"
		>
			${col}
			<div 
				class="column-resize"
				data-resize="col"
			></div>
		</div>
	`;
}

function createRow(content, count = '') {
	const resize = /*html*/ `
		<div 
			class="row-resize"
			data-resize="row"
		></div>
	`;
	return /*html*/ `
		<div 
			class="row"
			data-type="resizable"
		>
			<div 
				class="row-info"
			>
				${count}
				${count && resize}
			</div>
			<div class="row-data">${content}</div>
		</div>
	`;
}

function toChar(_, index) {
	return String.fromCharCode(CODES.A + index);
}

export function createTable(rowsCount = 15) {
	const colsCount = CODES.Z - CODES.A + 1;
	const rows = [];

	const cols = new Array(colsCount)
		.fill('')
		.map(toChar)
		.map(createCol)
		.join('');

	rows.push(createRow(cols));

	const rowCells = new Array(colsCount)
		.fill('')
		.map(toChar)
		.map(createCell)
		.join('');

	for (let i = 0; i < rowsCount; i++) {
		rows.push(createRow(rowCells, i + 1));
	}

	return rows.join('');
}
