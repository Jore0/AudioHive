# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'
User.destroy_all;
Song.destroy_all;

u1 =User.new({email: "test@gmail.com", username: "jmoney", password: "password"})
u2 =User.new({email: "test1@gmail.com", username: "smitten", password: "password"})
u3 =User.new({email: "test2@gmail.com", username: "chaser252", password: "password"})

u1.save
u2.save
u3.save

avatar1 = open('https://audio-hive-seeds.s3.amazonaws.com/jose.JPG')
avatar2 = open('https://audio-hive-seeds.s3.amazonaws.com/marissa.jpg')
u1.image_url.attach(io: avatar1, filename: 'jose.JPG')
u2.image_url.attach(io: avatar2, filename: 'marissa.jpg')

s1 = Song.new({title: "Nonstop", user_id: u1.id, artist: "Drake", genre: "Hip Hop", likes: 0, replays: 0, release_date: "July 21, 2018" })
s2 = Song.new({title: "Joker & the Thief", user_id: u2.id, artist: "Wolfmother", genre: "Rock", likes: 0, replays: 0, release_date: "October 28, 2006"})
s3 = Song.new({title: "Que Calor", user_id: u2.id, artist: "Major Lazor(feat. JBalvin & El Alfa)", genre: "Latin", likes: 0, replays: 0, release_date: "September 15, 2019"})
s4 = Song.new({title: "The Hills", user_id: u2.id, artist: "The Weeknd", genre: "Alternative R&B", likes: 0, replays: 0, release_date: "May 27, 2015"})
s5 = Song.new({title: "Smells Like Teen Spirit", user_id: u2.id, artist: "Nirvana", genre: "Rock", likes: 0, replays: 0, release_date: "August 27, 1991"})
s6 = Song.new({title: "I Like it", user_id: u2.id, artist: "Cardi B.", genre: "Hip Hop", likes: 0, replays: 0, release_date: "May 25, 2018"})
s7 = Song.new({title: "Sweater Weather", user_id: u2.id, artist: "The Neighbourhood", genre: "Rock", likes: 0, replays: 0, release_date: "March 28, 2012"})
s8 = Song.new({title: "Time in a Tree", user_id: u2.id, artist: "Raleigh Ritchie", genre: "Alternative R&B", likes: 0, replays: 0, release_date: "August 2, 2018"})
s9 = Song.new({title: "Redemption", user_id: u2.id, artist: "Zacari, Babes Wodumo", genre: "Hip Hop", likes: 0, replays: 0, release_date: "February 9, 2018"})
s1.save
s2.save
s3.save
s4.save
s5.save
s6.save
s7.save
s8.save
s9.save

song1 = open('https://audio-hive-seeds.s3.amazonaws.com/Nonstop.mp3')
song2 = open('https://audio-hive-seeds.s3.amazonaws.com/JokerAndTheThief.mp3')
song3 = open('https://audio-hive-seeds.s3.amazonaws.com/QueCalor.mp3')
song4 = open('https://audio-hive-seeds.s3.amazonaws.com/theHills.mp3')
song5 = open('https://audio-hive-seeds.s3.amazonaws.com/SmellsLikeTeenSpirit.mp3')
song6 = open('https://audio-hive-seeds.s3.amazonaws.com/ILikeIt.mp3')
song7 = open('https://audio-hive-seeds.s3.amazonaws.com/SweaterWeatherTheNeighbourhood.mp3')
song8 = open('https://audio-hive-seeds.s3.amazonaws.com/TimeinaTree.mp3')
song9 = open('https://audio-hive-seeds.s3.amazonaws.com/Redemptionmp3.mp3')

cover1 = open("https://audio-hive-seeds.s3.amazonaws.com/scorpion.jpg")
cover2 = open("https://audio-hive-seeds.s3.amazonaws.com/wolfmother.jpg")
cover3 = open("https://audio-hive-seeds.s3.amazonaws.com/queCalorAlbumCover.jpg")
cover4 = open("https://audio-hive-seeds.s3.amazonaws.com/beautyBehindtheMadness.png")
cover5 = open("https://audio-hive-seeds.s3.amazonaws.com/NirvanaNevermind.jpg")
cover6 = open("https://audio-hive-seeds.s3.amazonaws.com/invasionofPrivacy.png")
cover7 = open("https://audio-hive-seeds.s3.amazonaws.com/Iloveyoutheneighbourhood.jpeg")
cover8 = open("https://audio-hive-seeds.s3.amazonaws.com/timeInATree.jpg")
cover9 = open("https://audio-hive-seeds.s3.amazonaws.com/blackpanther.jpg")


s1.song_url.attach(io: song1, filename: 'Nonstop.mp3')
s2.song_url.attach(io: song2, filename: 'JokerAndTheThief.mp3')
s3.song_url.attach(io: song3, filename: 'QueCalor.mp3')
s4.song_url.attach(io: song4, filename: 'theHills.mp3')
s5.song_url.attach(io: song5, filename: 'SmellsLikeTeenSpirit.mp3')
s6.song_url.attach(io: song6, filename: 'ILikeIt.mp3')
s7.song_url.attach(io: song7, filename: 'SweaterWeatherTheNeighbourhood.mp3')
s8.song_url.attach(io: song8, filename: 'TimeinaTree.mp3')
s9.song_url.attach(io: song9, filename: 'Redemptionmp3.mp3')

s1.album_cover.attach(io: cover1, filename: "scorpio.jpg")
s2.album_cover.attach(io: cover2, filename: "wolfmother.jpg")
s3.album_cover.attach(io: cover3, filename: "queCalorAlbumCover.jpg")
s4.album_cover.attach(io: cover4, filename: "beautyBehindtheMadness.png")
s5.album_cover.attach(io: cover5, filename: "NirvanaNevermind.jpg")
s6.album_cover.attach(io: cover6, filename: "invasionofPrivacy.png")
s7.album_cover.attach(io: cover7, filename: "Iloveyoutheneighbourhood.jpeg")
s8.album_cover.attach(io: cover8, filename: "timeInATree.jpg")
s9.album_cover.attach(io: cover9, filename: "blackpanther.jpg")

