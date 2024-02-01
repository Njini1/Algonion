import { useState } from 'react';
import classes from './UserBasis.module.scss';

export default function UserBasis() {
  
  const [selectedTab, setSelectedTab] = useState('userinfo');

  const handleTabClick = (tab: 'userinfo' | 'userDashboard' | 'userRecommendation' | 'friendList') => {
    setSelectedTab(tab);
  };

  return (
    <div className={classes.userPageContainer}>
    <div className={classes.profileBackground}></div>
    <div className={classes.profilePicture}></div>
    
    <div className={classes.nickname}>
      <h2>Your Nickname</h2>
    </div>
    
    <div className={classes.expBar}></div>
    
    <div className={classes.userBar}>
      <button
        className={selectedTab === 'userinfo' ? classes.activeTab : ''}
        onClick={() => handleTabClick('userinfo')}
      >
        userinfo
      </button>
      <button
        className={selectedTab === 'userDashboard' ? classes.activeTab : ''}
        onClick={() => handleTabClick('userDashboard')}
      >
        userDashboard
      </button>
      <button
        className={selectedTab === 'userRecommendation' ? classes.activeTab : ''}
        onClick={() => handleTabClick('userRecommendation')}
      >
        userRecommendation
      </button>
      <button
        className={selectedTab === 'friendList' ? classes.activeTab : ''}
        onClick={() => handleTabClick('friendList')}
      >
        friendList
      </button>
      
      {selectedTab === 'userinfo' && <div>Profile content goes here.</div>}
      {selectedTab === 'userDashboard' && <div>userDashboard content goes here.</div>}
      {selectedTab === 'userRecommendation' && <div>userRecommendation content goes here.</div>}
      {selectedTab === 'friendList' && <div>friendList content goes here.</div>}
    </div>
  </div>
  )
}