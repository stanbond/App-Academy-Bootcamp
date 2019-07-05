require_relative "piece_class"
require_relative 'modules/slideable'

class Queen < Piece
  include Slideable

  def initialize(*args)
    super(*args)
    @name = "#{color} queen"
    @symbol = color == :white ? "\u2655" : "\u265B"
  end

  def move_dirs
    Slideable::STRGHT_STEPS + Slideable::DIAG_STEPS
  end

end