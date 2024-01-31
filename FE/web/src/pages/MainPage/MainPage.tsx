import Description from "../../components/Main/Description"

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

function MainPage() {
	return (
        <div>
            <p>Main</p>
            <Description items={items[0]} />
            {/* <Description items={items[1]} /> */}
            {/* <Description items={items[2]} /> */}

        </div>
  )
}
  
export default MainPage