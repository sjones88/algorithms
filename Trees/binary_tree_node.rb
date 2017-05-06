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

five = Node.new(5)
three = Node.new(3)
seven = Node.new(7)
five.left = three
five.right = seven

search = Proc.new do |n|
		puts n.data * 3
	end

Node.traverse(five, &search)