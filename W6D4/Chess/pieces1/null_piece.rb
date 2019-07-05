require_relative "piece_class"
require "Singleton"
require "colorized_string"

class NullPiece < Piece
    include Singleton

    attr_reader :symbol

    def initialize
        @symbol = :_
    end

end