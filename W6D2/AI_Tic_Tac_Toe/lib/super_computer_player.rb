require_relative 'tic_tac_toe_node'

class SuperComputerPlayer < ComputerPlayer

  def move(game, mark)
      new_node = TicTacToeNode.new(game.board, mark)

      new_node = new_node.children.find { |child| child.winning_node?(mark) }
      return new_node.prev_move_pos if new_node

      #op_mark = mark == :x ? :o : :x

      new_node = new_node.find { |child| !child.losing_node?(mark) }

      return new_node.prev_move_pos if new_node

      raise "No winning or draw move"
  end

end

if __FILE__ == $PROGRAM_NAME
  puts "Play the brilliant computer!"
  hp = HumanPlayer.new("Jeff")
  cp = SuperComputerPlayer.new

  TicTacToe.new(hp, cp).run
end

