import BoardRadarGraph from "../Board/BoardRadarGraph";
import BoardLinearGraph from "../Board/BoardLinearGraph";
import BoardRoundGraph from "../Board/BoardRoundGraph";
import classes from "./UserDashboard.module.scss"
import { getNickname } from "../../api/nicknameAPI.ts";
// import {getCategoryGraph, getLevelGraph, getProblemStackGraph, getPointStackGraph} from '../../api/dashboardAPI.ts'
import {getLevelGraph, getProblemStackGraph} from '../../api/dashboardAPI.ts'

import { useEffect, useState } from "react";

function UserDashboard() {
  const [nickname, setNickname] = useState("");
  
  useEffect(() => {
    const fetchData = async () => {
      const results = await getNickname();
      setNickname(results);
    };
  
    fetchData();
  }, [nickname]);
  
  
  // const [categoryData, setCategoryData] = useState();
  const [levelData, setLevelData] = useState();
  const [problemData, setProblemData] = useState();
  // const [pointData, setPointData] = useState();
  
  useEffect(() => {
    async function getAxios(){
      // - [방사형 그래프] 문제 유형
      // let res1 =await getCategoryGraph();
      // setData1(res1);
      // - [원형 그래프] 문제 난이도 (우리 티어) 
      let res2 =await getLevelGraph();
      setLevelData(res2);
      // - [선형 그래프] 기간별 문제 푼 수 누적 추이
      let res3 =await getProblemStackGraph();
      setProblemData(res3);
      // - [선형 그래프] 기간별 포인트 상승량 누적 추이
      // let res4 =await getPointStackGraph();
      // setData4(res4); 

    }
    getAxios()
  },[]);


  return (
    <div className={classes.component}>

      <div className={classes.graphTable}>
      <p>기록의 여정, 육각형 개발자</p>
          {nickname && <p>닉네임: {nickname}</p>}

        <div className={classes.graph}>
          <BoardRadarGraph/>

          {/* <BoardRadarGraph items={categoryData}/> */}
        </div>
      </div>

      <div className={classes.graphTable}>
        <p>기록의 여정, 문제 난이도</p>
        <div className={classes.graph}>
        {/* <BoardRoundGraph/> */}

          <BoardRoundGraph items={levelData}/>
        </div>
      </div>

      <div className={classes.graphTable}>
        <p>365일의 걸음, 푼 문제</p>
        <div className={classes.graph}>
        {/* <BoardLinearGraph/> */}

          <BoardLinearGraph items={problemData}/>
        </div>
      </div>

      <div className={classes.graphTable}>
        <p>365일의 걸음, 누적 점수</p>
        <div className={classes.graph}>
        {/* <BoardLinearGraph/> */}

          {/* <BoardLinearGraph items={pointData}/> */}
        </div>
      </div>

    </div>
  )
}
  
export default UserDashboard