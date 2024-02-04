// import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Button} from "@nextui-org/react";
// import classes from "./UserSolvedProblem.module.scss"

function UserSolvedProblem() {
  return (
    <Card className="max">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <div className="flex flex-col gap-1 items-start justify-center">
            <h5 className="text-xlarge font-semibold tracking-tight text-default-400">Algo Rating</h5>
            <h1 className="text-large font-semibold leading-none text-default-600">티어 + rating</h1>
          </div>
        </div>
        <Button
          color="default"
          radius="full"
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
          1. 10개씩 div로 묶고<br />
          2. 높은 티어 순으로 정렬해야하고<br />
          3. 푼 문제가 새로 생길 때 마다 10개의 그룹으로 넣어야하고<br />
          4. 문제별로 problemNum에 따라서 링크 넣어줘야하고<br />
          5. 문제 아이콘에 마우스를 올리면 마커 띄워줘야하고<br />
          6. 문제 정보 가져와서 마커에 티어 이미지, 문제 num, 문제 title 표시<br />  
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