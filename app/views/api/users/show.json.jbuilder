json.user do 
    json.partial! "api/users/user", user: @user
    json.extract! @user, :id, :username, :email, :song_ids
end 
json.songs do 
   @user.songs.each do |song|
        json.set! song.id do 
            json.partial! "api/songs/song", song: song
        end 
    end 
end 

