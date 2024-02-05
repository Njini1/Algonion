import { motion } from 'framer-motion';
import classes from "./Main.module.scss";
import getAsset from '../../utils/getAsset';

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
  return (
    <div className={classes.mainContainer}>
      <motion.div
        className={classes.slogunContainer}
        variants={sloganVariants}
        initial="hidden"
        animate="visible">       
        모든 코드, 모두 모아
      </motion.div>
      <div className={classes.buttonContainer}>
        <button className={classes.googleButton}>
          <img src={getAsset('social_login/googleSymbol.png')} alt="google-login" />
          <p>Google로 시작하기</p>
        </button>
        <button className={classes.kakaoButton}>
          <img src={getAsset('social_login/kakaoSymbol.png')} alt="google-login" />
          <p>Kakao로 시작하기</p>
        </button>
      </div>
    </div>
  )
}