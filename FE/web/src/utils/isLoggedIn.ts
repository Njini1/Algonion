export const isLoggedIn = () => {
  const accessToken = localStorage.getItem("access_token");

  // token이 존재하면 true, 그렇지 않으면 false 반환
  return !!accessToken;
};