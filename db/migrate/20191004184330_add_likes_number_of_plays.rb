class AddLikesNumberOfPlays < ActiveRecord::Migration[5.2]
  def change
    add_column :songs, :likes, :integer
    add_column :songs, :replays, :integer
    add_column :songs, :playlist_id, :integer
    add_column :songs, :release_date, :string
    
  end
end
