require_relative "piece_class"
require_relative 'modules/slideable'

class Bishop < Piece

  include Slideable

  def initialize(*args)
    super(*args)
    @name = "#{color} bishop"
    @symbol = color == :white ? "\u2657" : "\u265D"
  end

#   def move_dirs
#     Slideable::DIAG_STEPS
#   end

end
