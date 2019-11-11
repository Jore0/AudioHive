class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.text :body, null: false
      t.integer :user_id, null: false
      t.integer :song_id, null: false 
      t.string :song_time, null: false
      t.timestamps 

    end
      add_index :comments, :user_id
      add_index :comments, :song_id
  end
end
