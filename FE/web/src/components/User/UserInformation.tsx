import UserSolvedProblem from './UserSolvedProblem.tsx'
import UserStreak from './UserStreak.tsx'
// import classes from "./UserInfo.module.scss"

function UserInfo() {
  return (
    <div>
      <UserSolvedProblem/>
      <UserStreak/>
    </div>
  )
}
  
export default UserInfo