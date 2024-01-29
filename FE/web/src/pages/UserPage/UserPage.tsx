<<<<<<< HEAD
=======
import UsernameSetting from '../../components/User/UsernameSetting.tsx'
>>>>>>> feat/web/usernameSetting
import UserBasis from '../../components/User/UserBasis.tsx'
import UserBar from '../../components/User/UserBar.tsx'
import classes from "./UserPage.module.scss"

function UserPage() {
	return (
    <div className={classes.userPage}>
<<<<<<< HEAD
      <p>UserPage</p>
=======
      <UsernameSetting/>
>>>>>>> feat/web/usernameSetting
      <UserBasis/>
      <UserBar/>
    </div>
  )
}
  
export default UserPage