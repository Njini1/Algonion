import {Card, CardHeader, CardBody, Button} from "@nextui-org/react";
import classes from "./UserRecommendationItem.module.scss"

export default function UserRecommendationItem() {;
  
  function goToSolve() {
    window.location.href="https://www.acmicpc.net/problem/9663"
  }

  return (
      <Card className={classes.item}>
        <CardHeader className="justify-between">
          <div className="flex gap-5 ms-2 ">
            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="text-xs font-semibold leading-none text-default-600">9663</h4>
              <h5 className="text-m tracking-tight  text-default-400">N-Queen</h5>
            </div>
          </div>
          <div className="flex gap-5 me-2">
            <div className="flex flex-col gap-1 items-start justify-center">
              <h6 className="text-xs text-yellow-400 font-semibold leading-none text-default-600">골드 IV</h6>
            </div>
          </div>
        </CardHeader>
        <CardBody className="px-3 py-0 text-small text-default-400">
          <Button
              className="mt-2 mb-2"
              size="lg"
              variant="bordered"
              fullWidth={true}
              onPress={() => goToSolve()}
            >
              문제 풀러 가기!
            </Button>
        </CardBody>
      </Card>
  );
}