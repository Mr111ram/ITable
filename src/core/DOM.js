class IDOM {
	constructor(selector) {
		this.$el =
			typeof selector === 'string'
				? document.querySelector(selector)
				: selector;
	}

	html(html) {
		if (typeof html === 'string') {
			this.$el.innerHTML = html;
			return this;
		}
		return this.$el.outerHTML.trim();
	}

	clear() {
		this.html('');
		return this;
	}

	append(node) {
		if (node instanceof IDOM) {
			node = node.$el;
		}
		this.$el.append(node);
		return this;
	}

	closest (selector) {
		return $(this.$el.closest(selector));
	}

	on(eventType, callback) {
		this.$el.addEventListener(eventType, callback);
	}

	off(eventType, callback) {
		this.$el.removeEventListener(eventType, callback);
	}

	getCords(){
		return this.$el.getBoundingClientRect();
	}

	find(selector) {
		return this.$el.querySelector(selector);
	}

	findAll(selector) {
		return this.$el.querySelectorAll(selector);
	}

	style(styles={}) {
		Object.keys(styles).forEach(key => this.$el.style[key] = styles[key]);
		return this;
	}

	getStyle(key) {
		return this.$el.style[key];
	}
}

export function $(selector) {
	return new IDOM(selector);
}

$.create = (tagName, classes = '') => {
	const el = document.createElement(tagName);
	if (classes) el.classList.add(classes);
	return $(el);
};
