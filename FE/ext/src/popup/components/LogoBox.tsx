import getAsset from '../utils/getAsset';

export function logoBox() {
  return (
    <div className="logo-box">
      <img src={getAsset('logo/logo_dark.svg')} alt="logo" />
    </div>
  );
}
export default logoBox;
