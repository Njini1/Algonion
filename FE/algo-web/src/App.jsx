import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const redirect = "http://localhost/login/oauth2/code/kakao";
  const url = `https://kauth.kakao.com/oauth/authorize?client_id=22e6c492ebd402646a35739869230bc9&redirect_uri=${redirect}&response_type=code`
  return (
    <>
    asdf
      <a href={url}>로그인</a>
    </>
  )
}

export default App
