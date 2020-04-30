export const signup = (user) => $.ajax({
  method:  "POST",
  data:   {user},
  url: '/api/users',
});
export const login = (user) => $.ajax({
  method:  "POST",
  data:   { user },
  url: '/api/session',
});

export const logout = () => $.ajax({
  method:  "DELETE",
  url: '/api/session',
});

