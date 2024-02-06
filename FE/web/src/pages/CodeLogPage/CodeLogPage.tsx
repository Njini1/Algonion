import Header from '../../containers/Header/Header.tsx';
import CodeLogList from '../../components/CodeLog/CodeLogList.tsx'

// import CodeLogSearchBar from '../../components/CodeLog/CodeLogSearchBar.tsx'
// import CodeLogSearchResults from '../../components/CodeLog/CodeLogSearchResults.tsx'

import Footer from '../../containers/Footer/Footer.tsx';

import classes from "./CodeLogPage.module.scss"


function CodeLogPage() {
	return (
    <div>
    <Header/>
    <div className={classes.page}>
      <div className={classes.search}>
        {/* <CodeLogSearchBar/>
        <CodeLogSearchResults/> */}
      </div>
      <div className={classes.title}>
        <h3><strong>Alice</strong> 님의 코드로그</h3>
      </div>
      <div className={classes.codeLogPage}>
        <CodeLogList/>
      </div>
    </div>
      <Footer/>
    </div>
  )
}
  
export default CodeLogPage