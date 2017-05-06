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
			if block_given?
				block.call(node)
			end
			self.traverse(node.right, &block)
		end
	end
end