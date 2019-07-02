require_relative 'tic_tac_toe'
require "byebug"

class TicTacToeNode
   attr_accessor :prev_move_pos, :board, :next_mover_mark

  def initialize(board, mark, prev_move_pos = nil)
    @board = board
    @next_mover_mark = mark #(mark == :o ? :x : :o)
    @prev_move_pos = prev_move_pos # check later
    # @op_mark = other_player(@mark)
    #@children = children
    # @parent = parent
  end

  def losing_node?(evaluator)

  end

  def winning_node?(evaluator)
    if board.winner == evaluator
      return true
    elsif @children.empty?
      return false
    else
      if evaluator == @current_player
        #player's turn, one child node wins
        @children.any? { |child| child.winning_node?(evaluator) }
      elsif evaluator == @next_player
        #opponent's turn, all child nodes win
        @children.all? { |child| child.winning_node?(evaluator) }
      else
        #tie or lose
        return false
      end
    end
  end

  # This method generates an array of all moves that can be made after
  # the current move.
  def children
    # debugger
    positions = []
    (0..2).each do |x|
      (0..2).each do |y|
        new_board = @board.dup
        pos = [x, y]

        if new_board[pos].nil? && !new_board.over?
          new_board[pos] = next_mover_mark
          
          positions << TicTacToeNode.new(new_board, (next_mover_mark == :o ? :x : :o), pos)
        end
      end
    end
    positions
  end
  
end

# new_node = TicTacToeNode.new(Board.new, :x)
# new_node.children

    # possible_moves = []
    #   updated_board = @board

    #   updated_board.rows.each.with_index do |row, idx|
    #     row.each_index do |pos|
    #       if updated_board.rows[idx][pos].nil?
    #         #puts "#{idx}, #{pos}"

    #         updated_board.rows[idx][pos] = @mark
    #         child = TicTacToeNode.new(updated_board, self, [idx, pos])

    #         self.add_child(child)
    #         all_possible_moves << child
    #         updated_board.rows[idx][pos] = nil
    #       end
    #     end
    #   end

    #   all_possible_moves
    # end

    # def add_child(child)
    #   self.children << child
    #   child.prev_move_pos = self