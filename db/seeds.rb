# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all;
Song.destroy_all;

User.create({email: "test@gmail.com", username: "jmoney", password: "password"})
User.create({email: "test1@gmail.com", username: "smitten", password: "password"})
User.create({email: "test2@gmail.com", username: "chaser252", password: "password"})

Song.create({title: "Nonstop", user_id: 3, artist: "Drake", genre: "Hip Hop", likes: 0, replays: 0, release_date: "July 21, 2018" })
Song.create({title: "Joker & the Thief", user_id: 2, artist: "Wolfmother", genre: "Rock", likes: 0, replays: 0, release_date: "October 28, 2006"})
