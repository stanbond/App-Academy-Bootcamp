require './treenode'

class KnightPathFinder
  attr_accessor :root

  def initialize(start_position)
    @start_position = start_position
    build_move_tree
  end

  def build_move_tree
    visited = [@start_position]
    @root = TreeNode.new(nil, @start_position)
    queue = [@root]
  end

  def new_move_positions(pos)

  end

  def find_path(target_pos)
    @root.dfs(target_pos)
  end

end