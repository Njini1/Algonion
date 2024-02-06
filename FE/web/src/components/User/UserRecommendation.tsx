import { useState } from "react";
import UserRecommendationItem from "./UserRecommendationItem.tsx";
import classes from './UserRecommendation.module.scss'

export default function UserRecommendation() {;
  const [isLoading, setIsLoading] = useState(false);
  
  // const handleRefresh = async () => {
  //   setIsLoading(true);
  // }

  return (
    <div className={classes.container}>
      <p></p>
    <button
      className={classes.refreshButton}
      // onClick={handleRefresh}
      disabled={isLoading} // Disable button while loading
    >
      {/* {isLoading ? 'Refreshing...' : 'Refresh Recommendations'} */}
      다른 문제 추천!
    </button>
      <div className={classes.items}>
        <UserRecommendationItem />
      </div>
      <div className={classes.items}>
        <UserRecommendationItem />
      </div>
    </div>
  );
}