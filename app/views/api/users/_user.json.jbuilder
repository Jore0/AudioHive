json.extract! user, :id, :username, :email, :song_ids

if user.image_url.attached?
  json.profileImageUrl url_for(user.image_url)
end 
