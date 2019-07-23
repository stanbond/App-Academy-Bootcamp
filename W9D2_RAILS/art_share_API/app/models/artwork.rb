# == Schema Information
#
# Table name: artworks
#
#  id         :bigint           not null, primary key
#  title      :string
#  image_url  :string
#  artist_id  :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Artwork < ApplicationRecord
  validates :title, :image_url, presence: true
  validates :image_url, uniqueness: true
  validates :title, uniqueness: {scope: :artist_id}

    has_many :artwork_shares,
        primary_key: :id,
        foreign_key: :artwork_id,
        class_name: 'ArtworkShare'

    belongs_to :artist,
        primary_key: :id,
        foreign_key: :artist_id,
        class_name: 'User'

    has_many :shared_viewers,
        through: :artwork_shares,
        source: :viewer
end

# add_index :user_views, [:user_id, :article_id]
