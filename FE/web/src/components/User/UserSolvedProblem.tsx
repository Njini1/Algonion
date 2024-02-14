// import React from "react";
import {CardHeader, CardBody, CardFooter, Chip, Card} from "@nextui-org/react";
import UserProblem from './UserProblem'
import { getSolved100 } from "../../api/mainInfoAPI";

import classes from './UserSolvedProblem.module.scss'
import { useEffect, useState } from "react";

function UserSolvedProblem() {
  // nickname 과 username(현재 로그인 되어 있는 유저) 불러 오기
  const nickname = decodeURIComponent(window.location.href.split('/')[4]);
  
  // problems 정보 가져 오기
  const [problems, setProblems] = useState();
  useEffect(() => {
    async function getAxios(){
      let res = await getSolved100(nickname);
      setProblems(res);
    }
    getAxios()
  }, [nickname]);

  // 예시 유저 문제 푼거 정보
  const list: { 
    problemId: number,
    problemNum: string,
    problemTitle: string,
    problemLevel: string,
    algoScore: number,
    siteName: string,
    url: string,
  } [] = [
    {
    problemId: 30,
    problemNum: "1103",
    problemTitle: "집에 가라",
    problemLevel: "19",
    algoScore: 200,
    siteName: "baekjoon",
    url: "ssss"},
  ];

  return (
    <Card className={`'max' ${classes['solved100-container']} p-1`}>
      <CardHeader className="justify-between">
        <Chip
          size="lg"
          variant="shadow"
          radius="md"
          classNames={{
            base: `bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-bronze/50 shadow-silver-500/50 ${classes.chip}`,
            content: `drop-shadow shadow-black text-white`,
          }}>
          <p className="text-xlarge font-bold tracking-tight text-default-300">Algo Rating</p>
          <p className="text-large font-bold ">티어 + 총 점수</p>
        </Chip>
        <div className="flex gap-5">
          <div className="flex flex-col gap-1 items-start justify-center">
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>
          상위 100문제 표시
        </p>
        <span className="pt-2">
          여기에 문제 풀 때마다 표시<br />
          <UserProblem list={list}/>
        </span>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-large">{problems}개 문제 해결</p>
          <p className=" text-default-400 text-large">= 계산식</p>
        </div>
        {/* <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">1K</p>
          <p className="text-default-400 text-small">Followers</p>
        </div> */}
      </CardFooter>
    </Card>
  );
}
  
export default UserSolvedProblem