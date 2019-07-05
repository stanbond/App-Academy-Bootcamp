require_relative 'card'

class Deck
  attr_reader :cards
  def initialize
    @cards = []
    fill_deck
  end

  def fill_deck

    pairs = Card::VALUE_STRINGS.keys.product(Card::SUIT_STRINGS.keys)
    pairs.each{ |pair| @cards << Card.new(*pair) }

  end

  def shuffle
     @cards.shuffle!
  end

  def deal(num_cards)
    @cards.pop(num_cards)
  end

end