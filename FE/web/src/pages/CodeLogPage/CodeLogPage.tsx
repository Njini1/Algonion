import Header from '../../containers/Header/Header.tsx';
import CodeLogList from '../../components/CodeLog/CodeLogList.tsx'
import Footer from '../../containers/Footer/Footer.tsx';

import classes from "./CodeLogPage.module.scss"


function CodeLogPage() {
	return (
    <div className={classes.page}>
      <Header/>
      <div className={classes.codeLogPage}>
        <CodeLogList/>
      </div>
      <Footer/>
    </div>
  )
}
  
export default CodeLogPage