import Header from '../../containers/Header/Header.tsx';
import UserBasis from '../../components/User/UserBasis.tsx'
import UserBar from '../../components/User/UserBar.tsx'
import Footer from '../../containers/Footer/Footer.tsx';

import classes from "./UserPage.module.scss"
import { isRealUser } from '../../api/userAPI.ts';
import { useEffect } from 'react';

function UserPage() {
  // nickname 받아오기 + 존재하지 않는 사용자 404 처리
  const nickname = decodeURIComponent(window.location.href.split('/')[4]);

  useEffect(() => {
    async function getAxios(){
      let isValid = await isRealUser(nickname)
      console.log(nickname, isValid)
      if (!isValid) {
        // 페이지 이동 함수
        window.location.href = "/*";
      }
    }
    getAxios()
  }, []);

	return (
    <div className={classes.page}>
      <Header/>
        <UserBasis />
      <div className={classes.userBarContainer}>
        <UserBar />
      </div>
      <Footer/>
      </div>
  )
}
  
export default UserPage