// import React from "react";
// import getAsset from "../../utils/getAsset";
import { motion } from 'framer-motion'
import GoogleLoginButton from "./Google";
import KakaoLoginButton from "./Kakao";
import classes from "./Main.module.scss"; // .module.scss 파일을 import

const sloganVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    }
  }
};
export default function Main() {
  // const KAKAO_AUTH_URL = ""

  return (
    <div className={classes.main_container}>
      <motion.div
        className={classes.slogan_container}
        variants={sloganVariants}
        initial="hidden"
        animate="visible">       
          <h1>모든 코드, 모두 모아</h1>
      </motion.div>
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