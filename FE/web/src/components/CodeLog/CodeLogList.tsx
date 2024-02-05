import classes from './CodeLogList.module.scss'

function CodeLogList() {
    function goToDetailPage(username: string, codeId: number) {
      window.location.href=`/code-log/${username}/${codeId}`
    }
    return (
      <div className={classes.page}>
        <div>
          <table>
          <thead>
            <tr>
              <th className={classes.site}>사이트</th>
              <th className={classes.number}>문제 번호</th>
              <th className={classes.name}>문제 이름</th>
              <th className={classes.category}>알고리즘 분류</th>
              <th className={classes.tier}>난이도</th>
              <th className={classes.date}>푼 날짜</th>
            </tr>
          </thead>
          <tbody>
            <tr className={classes.tdHover} onClick={() => goToDetailPage('alice', 1000)}>
              <td>Baekjoon</td>
              <td>1000</td>
              <td><a className={classes.nameHover} href="https://www.acmicpc.net/problem/1000">A+B</a></td>
              <td>수학</td>
              <td>Bronze 5</td>
              <td>23-07-08</td>
            </tr>
            <tr>
              <td>Baekjoon</td><td>1000</td><td>A+B</td><td>수학</td><td>Bronze 5</td><td>23-07-08</td>
            </tr>
            <tr>
              <td>Baekjoon</td><td>1000</td><td>A+B</td><td>수학</td><td>Bronze 5</td><td>23-07-08</td>
            </tr>
          </tbody>
          </table>
        </div>
      </div>
    )
}
  
export default CodeLogList