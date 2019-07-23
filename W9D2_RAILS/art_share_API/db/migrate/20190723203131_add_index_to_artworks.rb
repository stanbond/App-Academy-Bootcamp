class AddIndexToArtworks < ActiveRecord::Migration[5.2]
  def change
    #add_index :artist_id, uniqueness: [scope: :artist]
    add_index :artworks, :artist_id
    add_index :artworks, :image_url, unique: true
    add_index :artworks, [:title, :artist_id], unique: true
  end
end
