import UsernameSetting from '../../components/User/UsernameSetting.tsx'
import UserBasis from '../../components/User/UserBasis.tsx'
import UserBar from '../../components/User/UserBar.tsx'
import classes from "./UserPage.module.scss"

function UserPage() {
	return (
    <div className={classes.userPage}>
      <p>UserPage</p>
      <UsernameSetting/>
      <UserBasis/>
      <UserBar/>
    </div>
  )
}
  
export default UserPage