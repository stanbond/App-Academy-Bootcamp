
json.extract! @pokemon, :id, :name, :attack, :defense, :poke_type, :moves, :items, :image_url
json.image_url asset_path(@pokemon.image_url)


