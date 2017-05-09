require_relative 'Node'
class Graph
	attr_accessor :nodes

	def initialize(nodes=[])
		@nodes = nodes
	end

	def bfsearch(node=@nodes[0], &cb)
		queue = []
		node.visited = true
		queue << node
		while queue.length > 0
			n = queue.shift
			if block_given?
				cb.call(n)
			end
			n.children.each do |m|
				if !m.visited
					m.visited = true
					queue << m
				end
			end
		end
		resetVisited
	end

	def dfsearch(node=@nodes[0], &cb)
		if node != nil && !node.visited
			cb.call(node)
			node.visited = true
			node.children.each { |n| dfsearch(n, &cb) }
		end
		resetVisited
	end

	def resetVisited
		@nodes.each {|node| node.visited = false }
	end
end