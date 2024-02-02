import { useState, useEffect } from 'react';
import './Popup.scss';
import StreakBox from './components/StreakBox';
import TodayBox from './components/TodayBox';
import getAsset from './utils/getAsset';
import { TierBox } from './components/TierBox';
import LogoBox from './components/LogoBox';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0,
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
export const Popup = () => {
  const [problemCnt, setProblemCnt] = useState(0);
  const [streak, setStreak] = useState(Array.from({ length: 7 }, () => false));

  useEffect(() => {
    let res: { [key: string]: number } = { "2024-01-27": 5, "2024-01-28": 5, "2024-01-29": 5, "2024-01-30": 5, "2024-01-31": 0, "2024-02-01": 1, "2024-02-02": 3 };
    let newStreak = Object.values(res).map(cnt => cnt > 0 ? true : false);
    let dayList = Object.keys(res);
    let lastValue = dayList[dayList.length - 1];
    setProblemCnt(() => res[lastValue]);
    setStreak(() => newStreak);
  }, []);

  return (
    <motion.main className="container" variants={container} initial="hidden" animate="visible">
      <div className="first-line">
        <TierBox item={item} />
        <div>
          <LogoBox item={item} />
          <TodayBox item={item} problemCnt={problemCnt} />
          <motion.div className="box" variants={item}><p>🚧</p></motion.div>
        </div>
      </div>
      <StreakBox item={item} streak={streak} />
    </motion.main>
  );
};

export default Popup;
