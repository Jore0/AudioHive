export const fetchComments = songId =>
  $.ajax({
    method: "GET",
    url: `api/songs/${songId}/comments`
  });

export const createComment = comment =>
  $.ajax({
    method: "POST",
    url: "api/comments",
    data: { comment }
  });
