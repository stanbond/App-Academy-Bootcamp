class Piece

    attr_accessor :symbol, :color, :pos, :board, :name

    def initialize (color, pos, board)
        @color = color
        @pos = pos
        @board = board
    end
    
    def to_s
    " #{@symbol} "
    end

    def empty?

    end

    def pos=(val)
        @pos = val
    end

    # def symbol
        # @symbol = :PH
    # end

    #private 

    def valid_moves
    valid_moves = []
    self.moves.each do |move|
      valid_moves << move unless move_into_check?(move)
    end
    valid_moves
  end

  def move_into_check?(move)
    board_copy = board.dup
    board_copy.move!(self.current_pos, move)
    board_copy.in_check?(self.color)
  end

end