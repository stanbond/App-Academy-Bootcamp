class TreeNode
    attr_accessor :parent, :children, :value, :path, :counter

  def initialize(parent, value)
    @parent = parent
    @children = []
    @value = value
    @path = []
    @counter = 0
  end

  def print_tree
    
  end

  def add_child(child_node)

  end

  def delete_child(child_node)

  end

end