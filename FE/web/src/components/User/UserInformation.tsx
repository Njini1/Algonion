import UserSolvedProblem from './UserSolvedProblem.tsx'
import UserStreak from './UserStreak.tsx'
import classes from "./UserInfo.module.scss"

function UserInfo() {
  return (
    <div className={classes.page}>
      <div className={classes.userSolvedProblem}>
        <UserSolvedProblem/>
      </div>
      <div className={classes.userStreak}>
        <UserStreak/>
      </div>
    </div>
  )
}
  
export default UserInfo