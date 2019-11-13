
json.extract! song, :id, :title, :artist, :genre, :likes, :replays, :release_date 

if song.user.image_url.attached? 
  json.userImage url_for(song.user.image_url)
end 
json.songOwner song.user.username
json.songOwnerId song.user.id
json.songUrl url_for(song.song_url)
json.imageUrl url_for(song.album_cover)