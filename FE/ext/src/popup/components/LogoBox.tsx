import getAsset from '../utils/getAsset';
import classes from './LogoBox.module.scss';
export function logoBox() {
  return (
    <div className={classes.box}>
      <img src={getAsset('logo/logo_dark.svg')} alt="logo" />
    </div>
  );
}
export default logoBox;
