require 'rspec'
require 'card'

describe Card do
  subject(:card) { Card.new }

  let(:values) { Card::VALUE_STRINGS.keys }
  let(:suits) { Card::SUIT_STRINGS.keys }

  it "should have suit" do
    expect(suits).to include(card.suit)
  end

  it "should have a value" do
    expect(values).to include(card.value)
  end

  it "should return index of value in array" do
    expect(card.num_value.class).to eq(Integer)
  end

end