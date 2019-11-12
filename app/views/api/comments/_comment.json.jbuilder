json.extract! comment, :id, :body, :song_time, :user_id, :song_id, :parent_comment_id

json.username comment.user.username

if comment.user.image_url.attached? 
  json.imageUrl url_for(comment.user.image_url)
else 
  json.imageUrl image_url("userDefaultImage.png")
end
