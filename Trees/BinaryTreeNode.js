function BinaryTreeNode(data) {
	this.data = data;
	this.left = null;
	this.right = null;
	this.traverse = function(callback, node) {
		if (node) { // node != null
			// in-order
			this.traverse(node.left, callback);
			callback(node);
			this.traverse(node.right, callback);
		}
	}
}