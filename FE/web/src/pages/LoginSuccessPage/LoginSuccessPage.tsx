import { useEffect } from "react";
import { deleteCookie, getCookie } from "../../utils/cookieUtil";
import {CircularProgress} from "@nextui-org/react";

function LoginSuccessPage() {
  useEffect(() => {
    const accessToken = getCookie("access_token");
    if (accessToken) {
      deleteCookie("access_token");
    }
  }, []);

  // 페이지 접속하자마자 바로 이동
  window.onload = function () {
    // 페이지 접속하자마자 바로 이동
    window.location.replace("/mainpage");
  };


  return (
    <div className="flex flex-col items-center justify-center h-screen">

    <CircularProgress size="lg" color="secondary" label="로그인 성공! 잠시만 기다려주세요" />


    </div>
  );
}

export default LoginSuccessPage;