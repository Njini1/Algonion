import UserMain from './UserMain.tsx'
// import UserDashboard from './UserDashboard.tsx'
// import UserRecommendation from './UserRecommendation.tsx'
// import UserFriendList from './UserFriendList.tsx'
// import classes from "./UserPage.module.scss"

function UserBar() {
    return (
      <div>
        {/* 1. 메인 정보 */}
        <UserMain/>
        {/* 2. 대시 보드 */}
        {/* <UserDashboard/> */}
        {/* 3. 문제 추천 */}
        {/* <UserRecommendation/> */}
        {/* 4. 친구 목록 */}
        {/* <UserFriendList/> */}
      </div>
    )
}
  
export default UserBar