import { useEffect, useState } from 'react';

import Header from '../../containers/Header/Header.tsx';
import CodeLogProblem from '../../components/CodeLog/CodeLogProblem.tsx'
import CodeLog from '../../components/CodeLog/CodeLog.tsx'
import CodeLogMemo from '../../components/CodeLog/CodeLogMemo.tsx'
import Footer from '../../containers/Footer/Footer.tsx';

import {getCodeLogDetail} from '../../api/codeLogAPI.ts'
import classes from "./CodeLogDetailPage.module.scss"


interface Data {
  siteName: string;
  submissionId: string;
  problemNum: string;
  problemTitle: string;
  problemLevel: string;
  memory: string;
  runtime: string;
  language: string;
  submissionCode: string;
  codeLength: string;
  submissionTime: string;
  url: string;
  memo: string;
  visible: boolean;
}

function CodeLogDetailPage() {
  const problemId = window.location.href.split('/')[5];
  // console.log(problemId)
  
  const [data, setData] = useState<Data>();;
  
  useEffect(() => {
    async function getAxios(){
      let res = await getCodeLogDetail(problemId);
      // console.log(res)
      setData(res);
    }
    getAxios()
  }, []);
  
  
	return (
    <div className={classes.page}>
      <Header/>
      <div className={classes.codeLogDetailPage}>
        <CodeLogProblem
                  problemId={problemId} 
                  siteName={data?.siteName || ''}
                  problemNum={data?.problemNum || ''}
                  problemTitle={data?.problemTitle || ''}
                  url={data?.url || ''}
                  />
        <CodeLog code={data?.submissionCode || ''}/>
        <CodeLogMemo problemId={problemId} 
                     memo={data?.memo || ''} />
      </div>
      <Footer/>
    </div>
  )
}
  
export default CodeLogDetailPage
