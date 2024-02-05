import dayjs from 'dayjs';
import classes from "./UserStreak.module.scss";
function UserStreak() {

  const table = (from?: dayjs.Dayjs | undefined, to: dayjs.Dayjs = dayjs()) => {
    if (!from) {
      from = to.subtract(12, "month").subtract(to.subtract(12, "month").day(), "day");
    }
    const dayOfWeekList = ['일', '월', '화', '수', '목', '금', '토'];
    let arr: JSX.Element[][] = Array.from({ length: 7 }, (_, i) => [<td>{dayOfWeekList[i]}</td>]);
    let diff = to.diff(from, 'day');
    let date = from;
    for (let i = 0; i <= diff; i++) {
      arr[date.day()].push(<td key={date.format("YYYY-MM-DD")} className={classes.streak} title={date.format("YYYY-MM-DD")}></td>);
      date = date.add(1, 'day');
    }
    console.log(from);
    return arr.map(e => <tr>{e}</tr>);
  }
  return (
    <div className="app">
      <table className={classes.streakTable}>
        <tbody>
          {table()}
        </tbody>
      </table>
    </div>
  );
}

export default UserStreak;