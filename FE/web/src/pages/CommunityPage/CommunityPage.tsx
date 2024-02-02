import Header from '../../containers/Header/Header.tsx';
import RoomList from '../../components/Community/RoomList.tsx'
import Footer from '../../containers/Footer/Footer.tsx';

import classes from "./CommunityPage.module.scss"


function CommunityPage() {
	return (
    <div className={classes.page}>
      <Header/>
      <div className={classes.CommunityPage}>
        <RoomList/>
      </div>
      <Footer/>
    </div>
  )
}
  
export default CommunityPage