import Header from '../../containers/Header/Header.tsx';
import UserBasis from '../../components/User/UserBasis.tsx'
import UserBar from '../../components/User/UserBar.tsx'
import Footer from '../../containers/Footer/Footer.tsx';

import classes from "./UserPage.module.scss"

function UserPage() {
	return (
    <div className={classes.page}>
      <Header/>
      <div className={classes.userPage}>
        <UserBasis/>
        <UserBar/>
      </div>
      <Footer/>
      </div>
  )
}
  
export default UserPage