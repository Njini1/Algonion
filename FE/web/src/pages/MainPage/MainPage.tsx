import Description from "../../components/Main/Description"
import classes from "./MainPage.module.scss"

const items = [
    {
        "title": '코드·통계',
        "description": ['내 코드 관리', '난이도부터 분류까지'],
    },
    {
        "title": '코드·기록',
        "description": ['내 코드 기록', '성장의 기쁨까지'],
    },                                                                                                                                                                                         
    {
        "title": '커뮤니티',
        "description": ['모각코·모함코', '실시간 피드백까지'],
    },
]

export default function MainPage() {
	return (
    <div className={classes.page}>
      <div className={classes.mainPage}>
        <div className={classes.main}>
          <p>main 컴포넌트</p>
        </div>
        <div className={classes.descriptions}>
          <div>
            <Description items={items[0]} />
          </div>
          <div className={classes.description_right}>
            <Description items={items[1]} />
          </div>
          <div>
            <Description items={items[2]} />
          </div>
        </div>
      </div>
    </div>
  )
}
