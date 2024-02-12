import dayjs from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear";
import classes from "./UserStreak.module.scss";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
function UserStreak() {
  dayjs.extend(weekOfYear);

  const table = (
    from?: dayjs.Dayjs | undefined,
    to: dayjs.Dayjs = dayjs()
  ): JSX.Element[] => {
    if (!from) {
      // 주차가 같은 1년전을 from으로 설정한다.
      // ex) to가 2024-02-11일 때 2월 3주차이므로 from은 2023년 2월 3주차 첫번째 일요일인 2023-02-12이다.
      const oneYearAgo = to.subtract(1, "year"); //1년 전 날짜를 구한다
      const weekOfMonth = to.week() - to.startOf("month").week(); //to가 해당 월의 몇주차인지 구한다
      const sameWeek = oneYearAgo.startOf("month").add(weekOfMonth, "week"); // 1년전의 같은월 같은 주차를 구한다.
      from = sameWeek.subtract(sameWeek.day(), "day"); // 첫번째 일요일을 구한다
    }
    const dayOfWeekList = ["일", "월", "화", "수", "목", "금", "토"];
    const td: JSX.Element[][] = Array.from({ length: 7 }, (_, i) => [
      <td>{dayOfWeekList[i]}</td>,
    ]);
    const diff = to.diff(from, "day");
    let date = from;
    for (let i = 0; i <= diff; i++) {
      td[date.day()].push(
        <Tippy content={date.format("YYYY-MM-DD")}>
          <td
            key={date.format("YYYY-MM-DD")}
            className={classes.streak}
          ></td>
        </Tippy>
      );
      date = date.add(1, "day");
    }
    const tr = td.map((v, i) => <tr key={dayOfWeekList[i]}>{v}</tr>);
    return tr;
  };
  return (
    <table className={classes.streakTable}>
      <tbody>{table()}</tbody>
    </table>
  );
}

export default UserStreak;
