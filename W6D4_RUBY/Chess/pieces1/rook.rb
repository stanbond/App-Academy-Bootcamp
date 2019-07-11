require_relative "piece_class"
require_relative 'modules/slideable'

class Rook < Piece

  attr_accessor :color, :name, :symbol

  # include Slideable

  def initialize(*args)
    super(*args)
    @name = "#{color} rook"
    @symbol = color == :white ? "\u2656" : "\u265C"
  end

  # def move_dirs
  #   Slideable::STRGHT_STEPS
  # end

end