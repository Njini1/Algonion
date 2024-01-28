import classes from './TodayBox.module.scss';
export function TodayBox() {
  return (
    <div className={classes.box}>
      <p className={classes.title}>오늘</p>
      <div className={classes.solved}>
        <strong className={classes.count1}>15</strong>
        <span className={classes.count2}>문제</span>
      </div>
    </div>
  );
}
export default TodayBox;
