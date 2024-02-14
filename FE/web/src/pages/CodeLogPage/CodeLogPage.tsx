
import Header from '../../containers/Header/Header.tsx';
import CodeLogList from '../../components/CodeLog/CodeLogList.tsx'
import CodeLogRecommendation from '../../components/CodeLog/CodeLogRecommendation.tsx'

// import CodeLogSearchBar from '../../components/CodeLog/CodeLogSearchBar.tsx'
// import CodeLogSearchResults from '../../components/CodeLog/CodeLogSearchResults.tsx'
import Footer from '../../containers/Footer/Footer.tsx';

import classes from "./CodeLogPage.module.scss"
import { useEffect, useState } from 'react';
import { getNickname } from '../../api/nicknameAPI.ts';


export default function CodeLogPage() {
  const [nickname, setNickname] = useState('');
  
  useEffect(() => {
    async function getAxios(){
      let name = await getNickname()
      setNickname(name)
    }
    getAxios()
  }, []);

	
  return (
    <div>
    <Header/>
    <div className={classes.page}>
      <div className={classes.search}>
        {/* <CodeLogSearchBar/>
        <CodeLogSearchResults/> */}
      </div>
      <div className={classes.title}>
        <h3><strong>{nickname}</strong> 님의 코드로그</h3>
        <CodeLogRecommendation/>
      </div>
      <div className={classes.codeLogPage}>
        <CodeLogList/>
      </div>
    </div>
      <Footer/>
    </div>
  )
}