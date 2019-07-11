require_relative "piece_class"
require_relative 'modules/steppable'

class Knight < Piece

  attr_accessor :symbol, :color, :pos, :board, :name

  include Steppable

  def initialize(*args)
    super(*args)
    @name = "#{color} knight"
    @symbol = color == :white ? "\u2658" : "\u265E"
  end

  def move_dirs
    Steppable::KNIGHT_STEPS
  end

end