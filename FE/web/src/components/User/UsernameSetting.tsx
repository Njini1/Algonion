import getAsset from '../../utils/getAsset';
import classes from "./UsernameSetting.module.scss"

function UserPage() {
	return (
    <div className={classes.page}>
      <img src={getAsset('logo/logo_light.svg')} alt="logo" /> 를 이용하기 위해
      <p>닉네임을 설정해주세요.</p>
    </div>
  )
}
  
export default UserPage