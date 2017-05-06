class Node
	attr_accessor :data, :left, :right
	def initialize(data)
		@data = data
		@left = nil
		@right = nil
	end

	def self.traverse(node, &block)
		if node != nil
			self.traverse(node.left, &block)
			block.call(node)
			self.traverse(node.right, &block)
		end
	end
end