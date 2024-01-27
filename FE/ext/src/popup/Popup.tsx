import { useState, useEffect } from 'react';
import './Popup.scss';
import StreakBox from './StreakBox';

export const Popup = () => {
  const [count, setCount] = useState(0);
  const link = 'https://github.com/guocaoyi/create-chrome-ext';

  const minus = () => {
    if (count > 0) setCount(count - 1);
  };

  const add = () => setCount(count + 1);

  useEffect(() => {
    chrome.storage.sync.get(['count'], (result) => {
      setCount(result.count || 0);
    });
  }, []);

  useEffect(() => {
    chrome.storage.sync.set({ count });
    chrome.runtime.sendMessage({ type: 'COUNT', count });
  }, [count]);

  const getAsset = (path: string) => {
    return new URL(`../assets/${path}`, import.meta.url).href;
  };

  return (
    <main className="container">
      <div className="tier-box">
        <p className="tier-title">TIER</p>
        <img src={getAsset('tier/star_master.svg')} alt="tier-master" />
        <p className="tier-username">SSAFY</p>
        <p className="tier-tier">MASTER</p>
      </div>
      <div className="logo-box">
        <img src={getAsset('logo/logo_dark.svg')} alt="logo" />
      </div>
      <div className="today-box">
        <p className="today-title">TODAY</p>
        <div className="today-solved">
          <p className="today-solved-count1">15</p>
          <p className="today-solved-count2">문제</p>
        </div>
      </div>
      <div className="box"></div>
      <StreakBox />
    </main>
  );
};

export default Popup;
