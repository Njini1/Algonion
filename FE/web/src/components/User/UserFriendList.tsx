import classes from './UserFriendList.module.scss'

function UserFriendList() {
  return (
    <div className={classes.page}>
      <table className={classes.table}>
      <thead>
        <tr>
          <th>Lorem</th><th>Ipsum</th><th>Dolor</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Lorem</td><td>Ipsum</td><td>Dolor</td>
        </tr>
        <tr>
          <td>Lorem</td><td>Ipsum</td><td>Dolor</td>
        </tr>
        <tr>
          <td>Lorem</td><td>Ipsum</td><td>Dolor</td>
        </tr>
        <tr>
          <td>Lorem</td><td>Ipsum</td><td>Dolor</td>
        </tr>
        <tr>
          <td>Lorem</td><td>Ipsum</td><td>Dolor</td>
        </tr>
      </tbody>
      </table>
    </div>
  )
}
  
export default UserFriendList