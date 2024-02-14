import classes from './UserProblem.module.scss'
// import { axiosApi } from '../../utils/instance';

export default function Problem100({ list }: {
  list: {
    problemId: number;
    problemNum: string;
    problemTitle: string;
    problemLevel: string;
    algoScore: number;
    siteName: string;
    url: string;
  }[];
}) {

    const gridLists: React.ReactNode[] = [];
    for (let i = 0; i < 10; i++) {
      const gridListItems: React.ReactNode[] = [];
      for (let j = 0; j < 10; j++) {
        const index = i * 10 + j;
        if (index < list.length) {
          const { problemId, problemNum, problemTitle, problemLevel, algoScore, url } = list[index];
          
          gridListItems.push(
            <div key={problemId}>
              <span>
                <a href={url}>
                  <img src="./user_image.png" alt="" />
                </a>
                <div>{problemNum}</div>
              </span>
            </div>
          );
        }
      }

      gridLists.push(
        <div className={classes["grid-list"]} key={i}>
          {gridListItems}
        </div>
      );
    }
  
    return (
      <div className={classes["grid-container"]}>
        {gridLists}
      </div>
    );
}