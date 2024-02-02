import Header from '../../containers/Header/Header.tsx';
import CodeLogProblem from '../../components/CodeLog/CodeLogProblem.tsx'
import CodeLog from '../../components/CodeLog/CodeLog.tsx'
import CodeLogMemo from '../../components/CodeLog/CodeLogMemo.tsx'

import Footer from '../../containers/Footer/Footer.tsx';

import classes from "./CodeLogPage.module.scss"

function CodeLogPage() {
	return (
    <div className={classes.page}>
      <Header/>
      <div className={classes.codeLogPage}>
        <CodeLogProblem/>
        <CodeLog/>
        <CodeLogMemo/>
      </div>
      <Footer/>
    </div>
  )
}
  
export default CodeLogPage