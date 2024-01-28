import { Variants, motion } from 'framer-motion';
import getAsset from '../utils/getAsset';
import classes from './LogoBox.module.scss';
export function logoBox(props: { item: Variants | undefined }) {
  return (
    <motion.div className={classes.box} variants={props.item}>
      <img src={getAsset('logo/logo_dark.svg')} alt="logo" />
    </motion.div>
  );
}
export default logoBox;
