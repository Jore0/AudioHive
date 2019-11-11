class Comment < ApplicationRecord
  
  validates :body, :song_time, :song_id presence: true 
  belongs_to :song
  belongs_to :user
  
end