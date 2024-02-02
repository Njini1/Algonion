import UserRecommendationItem from "./UserRecommendationItem";
import classes from './UserRecommendation.module.scss'

export default function UserRecommendation() {;
  return (
    <div className={classes.container}>
      <div className={classes.items}>
        <UserRecommendationItem />
        <UserRecommendationItem/>
      </div>
      <div className={classes.items}>
        <UserRecommendationItem />
        <UserRecommendationItem/>
      </div>
    </div>
  );
}