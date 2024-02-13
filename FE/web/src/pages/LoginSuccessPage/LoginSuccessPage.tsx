import { useEffect } from "react";
import { deleteCookie, getCookie } from "../../utils/cookieUtil";

function LoginSuccessPage() {
  useEffect(() => {
    const accessToken = getCookie("access_token");
    if (accessToken) {
      deleteCookie("access_token");
    }
  }, []);

  // 페이지 접속하자마자 바로 이동
  window.onload = function () {
    window.location.replace("/mainpage");
  };


  return (
    <div className="text-2xl bold h-100">
      <h1>로그인 성공!</h1>
      <h2>창을 닫으셔도 됩니다</h2>
    </div>
  );
}

export default LoginSuccessPage;