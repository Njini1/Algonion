import { Key, useEffect, useState } from "react";
import UserRecommendationItem from "./UserRecommendationItem.tsx";
import {Button} from "@nextui-org/react";
import {getRecommendation} from "../../api/recommendationAPI.ts"
import getAsset from "../../utils/getAsset.ts";

import classes from './UserRecommendation.module.scss'

type item = { siteName: string; problemNum: string; problemTitle: string ; problemLevel: string; url: string; }[]


export default function UserRecommendation() {
  const [data, setData] = useState<item>();
  useEffect(() => {
    async function getAxios(){
      let res =await getRecommendation();
      // console.log('res', res)
      setData(res);
    }
    getAxios()
  },[]);
  
  // console.log(data);
  if (!data) {
    return (
      <div></div>
      );
  }
  
  return (
    <div className={classes.container}>
      <div className="flex gap-4 items-center">
        <Button isIconOnly color="secondary" variant="faded" aria-label="refresh">
          <img src={getAsset('img/refresh.png')} alt="refresh-icon" />

        </Button>    
        {data.map((item: { siteName: string; problemNum: string; problemTitle: string; problemLevel: string; url: string; }, index: Key) => (
          <div key={index} className={classes.items}>
            <UserRecommendationItem
              siteName={item.siteName}
              problemNum={item.problemNum}
              problemTitle={item.problemTitle}
              problemLevel={item.problemLevel}
              url={item.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
}