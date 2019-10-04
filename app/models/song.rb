class Song < ApplicationRecord 

    validates :title, :artist, :genre, presence: true 
    #associations
    belongs_to :user
    has_one_attached :album_cover
    has_one_attached :mp3
end 