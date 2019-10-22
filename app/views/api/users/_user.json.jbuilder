json.extract! user, :id, :username, :email, :song_ids

# debugger
if json.profileImageUrl
  json.profileImageUrl url_for(user.image_url)
end 
#add if statement