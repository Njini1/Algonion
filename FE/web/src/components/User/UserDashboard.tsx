import BoardRadarGraph from "../Board/BoardRadarGraph";
import BoardLinearGraph from "../Board/BoardLinearGraph";
import BoardRoundGraph from "../Board/BoardRoundGraph";
import classes from "./UserDashboard.module.scss"

// - [방사형 그래프] 문제 유형
// - [원형 그래프] 문제 난이도 (우리 티어) 
// - [선형 그래프] 기간별 문제 푼 수 누적 추이
// - [선형 그래프] 기간별 포인트 상승량 누적 추이

function UserDashboard() {
  return (
    <div className={classes.component}>

      <div className={classes.graphTable}>
      <p>기록의 여정, 육각형 개발자</p>
        <div className={classes.graph}>
          <BoardRadarGraph/>
        </div>
      </div>

      <div className={classes.graphTable}>
        <p>기록의 여정, 문제 난이도</p>
        <div className={classes.graph}>
          <BoardRoundGraph/>
        </div>
      </div>


      <h2>UserDashboard</h2>
      <div className={classes.graphTable}>
        <p>365일의 걸음, 푼 문제</p>
        <div className={classes.graph}>
          <BoardLinearGraph/>
        </div>
      </div>

      <div className={classes.graphTable}>
        <p>365일의 걸음, 누적 점수</p>
        <div className={classes.graph}>
          <BoardLinearGraph/>
        </div>
      </div>

    </div>
  )
}
  
export default UserDashboard