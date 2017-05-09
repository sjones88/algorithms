function Graph(nodes) {
	this.nodes = nodes;
	this.dfsearch = function(node, cb) {
		const dfs = (node, cb) => {
			if (node && !node.visited) {
				node.visited = true;
				cb(node);
				if (node.children.length > 0) {
					node.children.forEach((n) => {
						n.visited = true;
						dfs(n, cb);
					});
				}
			}
		}
		dfs(node, cb);
		resetVisited();
	}
	this.bfsearch = function(cb) {
		let queue = [];
		this.nodes[0].visited = true;
		queue.push(this.nodes[0]);
		while (queue.length > 0) {
			let n = queue.shift();
			cb(n);
			n.children.forEach((child) => {
				if (!child.visited) {
					child.visited = true;
					queue.push(child);
				}
			});
		}
		resetVisited();
	}
	let that = this;
	function resetVisited() {
		that.nodes.forEach((node) => {
			node.visited = false;
		});
	}
}

function Node(data) {
	this.data = data;
	this.children = [];
	this.visited = false;
}

let five = new Node(5);
let ten = new Node(10);
let two = new Node(2);
five.children.push(ten, two);
ten.children.push(five);
let g = new Graph([five, ten, two]);
g.dfsearch(g.nodes[0], (node) => {
	console.log(`${node.data}!`);
});