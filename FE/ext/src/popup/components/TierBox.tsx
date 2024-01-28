import { motion } from 'framer-motion';
import getAsset from '../utils/getAsset';
import classes from './TierBox.module.scss';

export function TierBox() {
  return (
    <div className={classes.box}>
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
          <p className={classes.username}>Ssafy</p>
          <p className={classes.tier}>MASTER</p>
        </div>
      </div>
    </div>
  );
}
