import UserBasis from '../../components/User/UserBasis.tsx'
import UserBar from '../../components/User/UserBar.tsx'
import classes from "./UserPage.module.scss"

function UserPage() {
	return (
    <div className={classes.userPage}>

      {/* 2. 정상 로그인 로그인 상태 */}
      <UserBasis/>
      <UserBar/>
    </div>
  )
}
  
export default UserPage