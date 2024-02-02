import classes from './UserBasis.module.scss';

export default function UserBasis() {


  return (
    <div className={classes.userPageContainer}>
    <div className={classes.profileBackground}></div>
    <div className={classes.profilePicture}></div>
    
    <div className={classes.nickname}>
      <h2>Your Nickname</h2>
    </div>
    
    <div className={classes.expBar}></div>
    
  </div>
  )
}