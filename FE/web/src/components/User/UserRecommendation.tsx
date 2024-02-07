
import UserRecommendationItem from "./UserRecommendationItem.tsx";
import {Button} from "@nextui-org/react";
import getAsset from "../../utils/getAsset.ts";


import classes from './UserRecommendation.module.scss'

export default function UserRecommendation() {
  // const [isLoading, setIsLoading] = useState(false);
  
  // const handleRefresh = async () => {
  //   setIsLoading(true);
  // }

  return (
    <div className={classes.container}>
      <div className="flex gap-4 items-center">
        <Button isIconOnly color="secondary" variant="faded" aria-label="refresh">
          <img src={getAsset('img/refresh.png')} alt="refresh-icon" />

        </Button>    

        <div className={classes.items}>
          <UserRecommendationItem />
        </div>
        <div className={classes.items}>
          <UserRecommendationItem />
        </div>
      </div>
    </div>
  );
}