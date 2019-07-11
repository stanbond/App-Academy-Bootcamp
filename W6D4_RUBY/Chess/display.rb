require_relative "board"

class Display 

    def initialize(board)
        @board = board
        # @cursor = cursor
    end

    def render
        @board.board.each do |row|
            row.each do |piece|
                print " " + piece.symbol.to_s + " "
            end
            print "\n"
        end
    end

    # def inspect
    #     render.inspect
    # end

end