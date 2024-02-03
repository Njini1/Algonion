import {Card, CardBody} from "@nextui-org/react";

import classes from './CodeLogProblem.module.scss'

export default function CodeLogProblem() {
  function goToProblem(problemId: number) {
    window.location.href=`https://www.acmicpc.net/problem/${problemId}`
  }

  return (
    <div>
      <Card>
      <CardBody className={classes.card} onClick={() => goToProblem(1000)}>
        <div className={classes.number}>
          <p>Baekjoon</p>
          <p>1000</p>
        </div>
        <div className={classes.name}>A+B</div>
      </CardBody>
      </Card>
    </div>
  );
}
