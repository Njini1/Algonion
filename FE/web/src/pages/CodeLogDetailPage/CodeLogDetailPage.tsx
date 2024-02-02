import Header from '../../containers/Header/Header.tsx';
import CodeLogList from '../../components/CodeLog/CodeLogList.tsx'
import Footer from '../../containers/Footer/Footer.tsx';

import classes from "./CodeLogDetailPage.module.scss"


function CodeLogDetailPage() {
	return (
    <div className={classes.page}>
      <Header/>
      <div className={classes.codeLogDetailPage}>
        <CodeLogList/>
      </div>
      <Footer/>
    </div>
  )
}
  
export default CodeLogDetailPage