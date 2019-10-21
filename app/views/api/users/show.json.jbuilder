json.user do 
    json.partial! "api/users/user", user: @user
end 
json.songs do 
    # debugger
   @user.songs.each do |song|
        json.set! song.id do 
            json.partial! "api/songs/song", song: song
        end 
    end 
end 

