// import React from "react";
// import getAsset from "../../utils/getAsset";
import GoogleLoginButton from "./Google";
import KakaoLoginButton from "./Kakao";
import classes from "./Main.module.scss"; // .module.scss 파일을 import

export default function Main() {
  
  // const KAKAO_AUTH_URL = ""

  return (
    <div className={classes.main_container}>
      <div>
        <h1>모든 코드, 모두 모아</h1>
      </div>
      <div className={classes["login-buttons-container"]}>
        <div>
        <GoogleLoginButton></GoogleLoginButton>
        </div>
        <div>
        <KakaoLoginButton></KakaoLoginButton>
        </div>
      </div>
    </div>
  )
}