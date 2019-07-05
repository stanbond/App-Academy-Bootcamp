require_relative "piece_class"
require_relative 'modules/steppable'

class King < Piece

  attr_accessor :symbol, :color, :pos, :board, :name

  include Steppable

  def initialize(*args)
    super(*args)
    @name = "#{color} king"
    @symbol = color == :white ? "\u2654" : "\u265A"
  end

#   def move_dirs
#     Steppable::KING_STEPS
#   end

end