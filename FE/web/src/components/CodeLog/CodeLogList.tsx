import { Key } from 'react'
import classes from './CodeLogList.module.scss'

const CodeLogList = ({ data }) => {
  
  function goToDetailPage(username: string, problemNum: string) {
    window.location.href=`/code-log/${username}/${problemNum}`
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
          {data.map((item: { id: Key; username: string; problemNum: string ; siteName: string ; problemUrl: string ; problemTitle: string; classification: string[]; problemLevel: string; submissionTime: string }) => (
            <tr key={item.id} className={classes.tdHover} onClick={() => goToDetailPage(item.username, item.problemNum)}>
              <td>{item.siteName}</td>
              <td>{item.problemNum}</td>
              <td><a className={classes.nameHover} href={item.problemUrl}>{item.problemTitle}</a></td>
              <td>{item.classification.join(', ')}</td>
              <td>{item.problemLevel}</td>
              <td>{item.submissionTime.split('T')[0]}</td>
            </tr>
              ))}
          </tbody>
          </table>
        </div>
      </div>
    )
}

export default CodeLogList