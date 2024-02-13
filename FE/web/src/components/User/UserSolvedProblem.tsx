// import React from "react";
import {CardHeader, CardBody, CardFooter, Button, Card} from "@nextui-org/react";
// import classes from "./UserSolvedProblem.module.scss"
import UserProblem from './UserProblem'
import { getSolved100 } from "../../api/mainInfoAPI";

import classes from './UserSolvedProblem.module.scss'
import { useEffect, useState } from "react";

function UserSolvedProblem() {
  const [problems, setProblems] = useState();
  
  useEffect(() => {
    async function getAxios(){
      let res =await getSolved100();
      setProblems(res);
    }
    getAxios()
  }, []);


  return (
    <Card className={`'max' ${classes['solved100-container']}`}>
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <div className="flex flex-col gap-1 items-start justify-center">
            <h5 className="text-xlarge font-semibold tracking-tight text-default-400">Algo Rating</h5>
            <h1 className="text-large font-semibold leading-none text-default-600">티어 + rating</h1>
          </div>
        </div>
        <Button
          color="secondary"
          radius="lg"
          size="lg"
          className="flex flex-col gap-0"
          // onClick={link}
          >
          <p className="text-medium font-bold"># 랭킹</p>
          <p className="text-small"># 전체 OO %</p>
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>
          상위 100문제 표시
        </p>
        <span className="pt-2">
          여기에 문제 풀 때마다 표시<br />
          <UserProblem items={problems}/>
        </span>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-large">OO개 문제 해결</p>
          <p className=" text-default-400 text-large">= 계산식(?)</p>
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