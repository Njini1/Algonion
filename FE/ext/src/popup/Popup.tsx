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
  return (
    <motion.main className="container" variants={container} initial="hidden" animate="visible">
      <div className="first-line">
        <TierBox item={item} />
        <div>
          <LogoBox item={item} />
          <TodayBox item={item} />
          <motion.div className="box" variants={item}></motion.div>
        </div>
      </div>
      <StreakBox item={item} />
    </motion.main>
  );
};

export default Popup;
