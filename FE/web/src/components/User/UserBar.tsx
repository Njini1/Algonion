import { useState } from 'react';
import UserInformation from './UserInformation.tsx'
// import UserDashboard from './UserDashboard.tsx'
import UserRecommendation from './UserRecommendation.tsx'
// import UserFriendList from './UserFriendList.tsx'
import classes from "./UserBar.module.scss"

function UserBar() {
    const [selectedTab, setSelectedTab] = useState('userinfo');

    const TabClick = (tab: 'userinfo' | 'userDashboard' | 'userRecommendation' | 'friendList') => {
      setSelectedTab(tab);
    };

    return (
      <>
        <div className={classes.userBar}>
          <button
            className={selectedTab === 'userinfo' ? classes.activeTab : ''}
            onClick={() => TabClick('userinfo')}
            >
            메인정보
          </button>
          <button
            className={selectedTab === 'userDashboard' ? classes.activeTab : ''}
            onClick={() => TabClick('userDashboard')}
            >
            대시보드
          </button>
          <button
            className={selectedTab === 'userRecommendation' ? classes.activeTab : ''}
            onClick={() => TabClick('userRecommendation')}
            >
            문제추천
          </button>
          <button
            className={selectedTab === 'friendList' ? classes.activeTab : ''}
            onClick={() => TabClick('friendList')}
            >
            친구정보
          </button>
            </div>

          <div>
          {selectedTab === 'userinfo' && 
            <UserInformation/>
          }

          {selectedTab === 'userDashboard' && 
          // <userDashboard/>>
          <div>userDashboard</div>
          // 컴포넌트 올리면서 div는 삭제해야 동작합니다
          }

          {selectedTab === 'userRecommendation' &&
          // <userRecommendation/>
          <div>userRecommendation</div>
          // 컴포넌트 올리면서 div는 삭제해야 동작합니다
          }

          {selectedTab === 'friendList' && 
          // <UserFriendList/>
          <div>friendList</div>
          // 컴포넌트 올리면서 div는 삭제해야 동작합니다
          }
        </div>
      </>
    )
}
  
export default UserBar