
json.extract! song, :id, :title, :artist, :genre, :likes, :replays, :release_date 

json.songUrl url_for(song.song_url)
json.imageUrl url_for(song.album_cover)