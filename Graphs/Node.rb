class Node
	attr_accessor :data, :children, :visited
	def initialize(data)
		@data = data
		@children = []
		@visited = false
	end
end

