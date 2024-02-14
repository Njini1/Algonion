// const tier = ''
// 1. 한 개의 grid에 10개의 문제를 묶기
//       2. 반응형으로 
//       3. 푼 문제가 새로 생길 때 마다 10개의 그룹으로 넣어야하고<br />
//       4. 문제별로 problemNum에 따라서 링크 넣어줘야하고<br />
//       5. 문제 아이콘에 마우스를 올리면 마커 띄워줘야하고<br />
//       6. 문제 정보 가져와서 마커에 티어 이미지, 문제 num, 문제 title 표시<br />
//       7. 푼 문제 표시하는 아이콘은 별 모양으로
// import { useEffect, useState } from 'react';

// import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';
import { useState, useEffect } from 'react';
import classes from './UserProblem.module.scss'
// import { axiosApi } from '../../utils/instance';


export default function problem100(props: any) {
  const [list] = useState<
    {
      problemId: number;
      problemNum: number;
      url: string;
      isSolved: boolean;
      tier: string;
    }[]
  >([
    {
      problemId: 1,
      problemNum: 100,
      url: "https://www.acmicpc.net/problem/100",
      isSolved: true,
      tier: "bronze",
    },
    {
      problemId: 2,
      problemNum: 101,
      url: "https://www.acmicpc.net/problem/101",
      isSolved: false,
      tier: "silver",
    },
    // ... 추가적인 초기 데이터
  ]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axiosApi().get('/v1/problem100');

  //     setList(response.data);
  //   };

  //   fetchData();
  // }, []);

  // console.log(props)  
  // const { list } = props;  

  const gridList = list.length > 100 ? list.slice(0, 100) : list;
  
  return (
    <div className={classes['grid-container']}>
      {gridList.map((items) => (
        <div key={items[0].problemId} className={classes['grid-list']}>
          {items.map((item) => (
            <div key={item.problemId} className={classes['grid-item']}>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <span>{item.problemNum}</span>
              </a>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}