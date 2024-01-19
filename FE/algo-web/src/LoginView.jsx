import { useEffect, useState } from 'react'
function LoginView() {
  const [count, setCount] = useState(0);
  const [token, setToken] = useState("토큰없음");
  useEffect(() => {
    const url = new URL(location.href);
    const urlParams = url.searchParams;
    const token = urlParams.get('token');
    token&& setToken(() => token);
  })
  return (
    <>
      {token}
    </>
  )
}

export default LoginView
