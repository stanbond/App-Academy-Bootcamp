require_relative 'pieces'


class Board

    START_POSITION = [Rook, Knight, Bishop, King, Queen, Bishop, Knight, Rook]
    START_ROW = [0, 1, 6, 7]

    attr_accessor :board

    def initialize
        @board = Array.new(8) {Array.new(8) { NullPiece.instance } }
        setup_board

    end

    def setup_board
        START_ROW.each do |row|
            color = row < 2 ? :white : :black
            @board[row].each_index do |idx|
                if row == 0 || row == 7
                    @board[row][idx] = START_POSITION[idx].new(color, [row, idx], @board)
                else
                    @board[row][idx] = Pawn.new(color, [row, idx], @board)
                end
            end
        end
    end

    def [](pos)
        row, col = pos
        @board[row][col]
    end

    def []=(pos, val)
        row, col = pos
        @board[row][col] = val
    end

    def move_piece(start_pos, end_pos)
        piece = self[start_pos]
        self[start_pos] = NullPiece.instance
        piece.pos = end_pos
        self[end_pos] = piece
    end

    def valid_pos?(pos)
        pos.all? { |x| x.between?(0, 7) }
    end

    # def add_piece(piece, pos)
    # this function taken care by setup_board
    # end

    def checkmate?(color)
        # is color.king able to move out of LOS of other-color.piece?
    end

    def in_check?(color)
        # is color.king in LOS of other-color.piece?
        king_pos = find_king(color).pos

        pieces.any? do |piece|
            piece.color != color && piece.moves.include?(king_pos)
        end
    end

    def find_king(color)
        @board.each do |row|
            row.each do |piece|
                if piece.color == color && piece.name == "#{piece.color.to_s} king"
                    return piece
                end
            end
        end
    end

    def pieces(color)
        @board.flatten.reject { |piece| piece.is_a?(NullPiece) }
    end

    def dup
        new_board = Board.new
        pieces.each do |piece|
            new_board[piece.pos] = piece.class.new(new_board, piece_class.current_pos ,piece_class.color)
        end
        new_board
    end

    def move_piece!(start_pos, end_pos)
        piece = self[start_pos]
        self[end_pos] = piece
        piece.pos = end_pos
        self[start_pos] = NullPiece.instance
    end

    # def inspect
    # @board.board.inspect
    # end
end