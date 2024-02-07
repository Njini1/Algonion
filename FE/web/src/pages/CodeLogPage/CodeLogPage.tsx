import { useState, useEffect, Key } from 'react';
import Header from '../../containers/Header/Header.tsx';
import CodeLogList from '../../components/CodeLog/CodeLogList.tsx'
// import CodeLogSearchBar from '../../components/CodeLog/CodeLogSearchBar.tsx'
// import CodeLogSearchResults from '../../components/CodeLog/CodeLogSearchResults.tsx'
import Footer from '../../containers/Footer/Footer.tsx';

import classes from "./CodeLogPage.module.scss"
import {CodeLogTest} from "../../api/CodeLogAPI.ts"

interface CodeLog {
  id: Key;
  siteName: string;
  language: string;
  problemNum: string;
  problemTitle: string;
  classification: string;
  problemLevel: string;
  submissionTime: string;
  username: string;
  url: string;
}

export default function CodeLogPage() {
  
  const [data, setData] = useState<CodeLog[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await CodeLogTest();
      setData(result);
    };

    fetchData();
  }, []);

  CodeLogTest()
	
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
        <CodeLogList data={data}/>
      </div>
    </div>
      <Footer/>
    </div>
  )
}