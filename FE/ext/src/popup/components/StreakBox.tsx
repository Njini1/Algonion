import { Variants, motion } from 'framer-motion';
import classes from './StreakBox.module.scss';
import { useEffect, useState } from 'react';
export function StreakBox(props: { item: Variants | undefined }) {
  const [streak, setStreak] = useState(Array.from({ length: 7 }, () => false));
  const [day, setDay] = useState(0);
  useEffect(() => {
    setStreak(() => [...streak, true]);
  }, []);
  useEffect(() => {
    const trueCnt = streak.reduce((acc, currentValue) => currentValue ? acc + 1 : 0, 0);
    setDay(trueCnt);
  }, [streak]);
  return (
    <motion.div className={classes.box} variants={props.item}>
      <p className={classes.title}>연속</p>
      <p className={classes.continuous}>
        <strong>{day}일 째🔥</strong>
      </p>
      <div className={classes.wrapper}>
        <ul className={classes.container}>
          {streak.map((v, i) => <li key={i} className={`${classes.streak} ${v ? classes.active : ''}`}></li>)}
        </ul>
        <a className={classes.more} href="#">
          더보기
        </a>
      </div>
    </motion.div>
  );
}
export default StreakBox;
