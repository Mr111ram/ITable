const CODES = {
	A: 65,
	Z: 90,
}

function createCell () {
	return `
	<div class="cell" contenteditable spellcheck="false"></div>
	`;
}

function createCol (col) {
	return `
		<div class="column">${col}</div>
	`;
}

function createRow (content, count='') {
	return `
		<div class="row">
			<div class="row-info">${count}</div>
			<div class="row-data">${content}</div>
		</div>
	`;
}

function toChar(_, index) {
	return String.fromCharCode(CODES.A + index)
}

export function createTable (rowsCount = 15) {
	const colsCount = CODES.Z - CODES.A + 1;
	const rows = [];

	const cols = new Array(colsCount)
		.fill('')
		.map(toChar)
		.map(createCol)
		.join('');

	rows.push(createRow(cols))

	const rowCells = new Array(colsCount)
		.fill('')
		.map(createCell)
		.join('');

	for (let i = 0; i < rowsCount; i++) {
		rows.push(createRow(rowCells, i + 1));
	}

	return rows.join('');
}