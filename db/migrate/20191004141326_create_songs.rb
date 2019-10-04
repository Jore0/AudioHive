class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.string :title, null: false
      t.integer :user_id, null: false
      t.string :artist, null: false 
      t.string :genre, null: false 
    end

    add_index :songs, :user_id
    add_index :songs, :title
  end
end
