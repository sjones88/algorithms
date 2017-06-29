// a simple stack implementation

function Stack() {
	this.items = [];
}

Stack.prototype.push = function(item) {
	// remember: a stack is first-in, last-out data structure...
	this.items.push(item);
}

Stack.prototype.pop = function() {
	// remove the element at the top of the stack
	if (!this.items.length) {
		throw new Error('Empty stack.');
	}
	return this.items.pop();
}

Stack.prototype.peek = function() {
	if (!this.items.length) {
		throw new Error('Empty stack.');
	}
	return this.items[this.items.length - 1];
}

module.exports = Stack;