json.user do 
    # debugger
    json.extract! @user, :id, :username, :email, :song_ids
end 
json.songs do 
    # debugger
   @user.songs.each do |song|
        json.set! song.id do 
            json.partial! "api/songs/song", song: song
        end 
    end 
end 

