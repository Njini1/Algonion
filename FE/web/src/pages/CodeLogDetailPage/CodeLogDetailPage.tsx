import Header from '../../containers/Header/Header.tsx';
import CodeLogProblem from '../../components/CodeLog/CodeLogProblem.tsx'
import CodeLog from '../../components/CodeLog/CodeLog.tsx'
import CodeLogMemo from '../../components/CodeLog/CodeLogMemo.tsx'

import Footer from '../../containers/Footer/Footer.tsx';

import classes from "./CodeLogDetailPage.module.scss"

function CodeLogDetailPage() {
	return (
    <div className={classes.page}>
      <Header/>
      <div className={classes.codeLogDetailPage}>
        <CodeLogProblem/>
        <CodeLog/>
        <CodeLogMemo/>
      </div>
      <Footer/>
    </div>
  )
}
  
export default CodeLogDetailPage
