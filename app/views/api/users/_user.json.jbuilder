json.extract! user, :id, :username, :email, :song_ids

# debugger
if user.image_url.attached?
  json.profileImageUrl url_for(user.image_url)
end 
#add if statement