export const fetchUser = id =>
  $.ajax({
    method: "GET",
    url: `/api/users/${id}`
  });
export const updateUser = user => {
  // debugger;
  return $.ajax({
    method: "PATCH",
    url: `/api/users/${user.id}`,
    data: user,
    contentType: false,
    processData: false
  });
};
