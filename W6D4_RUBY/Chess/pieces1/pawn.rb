require_relative "piece_class"
require_relative 'modules/steppable'

class Pawn < Piece

  include Steppable

  def initialize(*args)
    super(*args)
    @name = "#{color} pawn"
    @symbol = color == :white ? "\u2659" : "\u265F"
  end

#   def move_dirs
#     Steppable::PAWN_STEPS
#   end

end