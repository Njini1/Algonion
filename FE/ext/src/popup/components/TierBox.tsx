import { Variants, motion } from 'framer-motion';
import getAsset from '../utils/getAsset';
import classes from './TierBox.module.scss';

export function TierBox(props: { item: Variants | undefined, nickname?: string }) {
  return (
    <motion.div className={classes.box} variants={props.item}>
      {/* <img src={getAsset('tier/star_master.svg')} alt="tier-master" /> */}
      <motion.img
        src={getAsset('tier/star_master.svg')}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ rotate: 0, scale: 1 }}
        whileHover={{ scale: 1.2, rotate: 90 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
        }}
      />
      <div className={classes.text}>
        <p className={classes.title}>티어</p>
        <div className={classes.content}>
          <p className={classes.username}>{props?.nickname}</p>
          <p className={classes.tier}>UNRANKED</p>
        </div>
      </div>
    </motion.div>
  );
}
