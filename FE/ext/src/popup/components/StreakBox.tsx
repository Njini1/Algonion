import { Variants, motion } from 'framer-motion';
import classes from './StreakBox.module.scss';
export function StreakBox(props: { item: Variants | undefined }) {
  return (
    <motion.div className={classes.box} variants={props.item}>
      <p className={classes.title}>연속</p>
      <p className={classes.continuous}>
        <strong>5일 째🔥</strong>
      </p>
      <div className={classes.wrapper}>
        <ul className={classes.container}>
          <li className={classes.streak}></li>
          <li className={classes.streak}></li>
          <li className={`${classes.streak} ${classes.active}`}></li>
          <li className={`${classes.streak} ${classes.active}`}></li>
          <li className={`${classes.streak} ${classes.active}`}></li>
          <li className={`${classes.streak} ${classes.active}`}></li>
          <li className={`${classes.streak} ${classes.active} ${classes.today}`}></li>
        </ul>
        <a className={classes.more} href="#">
          더보기
        </a>
      </div>
    </motion.div>
  );
}
export default StreakBox;
