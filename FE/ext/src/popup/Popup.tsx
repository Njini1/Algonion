import { useState, useEffect } from 'react';
import './Popup.scss';
import StreakBox from './components/StreakBox';
import TodayBox from './components/TodayBox';
import getAsset from './utils/getAsset';
import { TierBox } from './components/TierBox';
import LogoBox from './components/LogoBox';

export const Popup = () => {
  return (
    <main className="container">
      <TierBox />
      <div>
        <LogoBox />
        <TodayBox />
        <div className="box"></div>
      </div>
      <StreakBox />
    </main>
  );
};

export default Popup;
