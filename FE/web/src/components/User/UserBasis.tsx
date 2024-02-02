import { useState } from 'react';
import classes from './UserBasis.module.scss';


export default function UserBasis() {
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const BackgroundImageClick = () => {
    document.getElementById('backgroundImageInput')?.click();
  };

  const BackgroundImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    
    if (file) {
      setBackgroundImage(URL.createObjectURL(file));
    }
  };

  const ProfileImageClick = () => {
    document.getElementById('profileImageInput')?.click();
  };
  
  const ProfileImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };


  return (
    <div className={classes.userPageContainer}>
    <div className={classes.profileBackground} style={{ backgroundImage: `url(${backgroundImage})` }} onClick={BackgroundImageClick}></div>
    <div className={classes.profileImage} style={{ backgroundImage: `url(${profileImage})` }} onClick={ProfileImageClick}></div>

    <div className={classes.nickname}>
      <h2>Your Nickname</h2>
    </div>

    <div className={classes.expBar}></div>

    {/* 파일 업로드를 위한 input 요소 */}
    <input
      id="backgroundImageInput"
      type="file"
      accept="image/*"
      onChange={BackgroundImageChange}
      style={{ display: 'none' }}
    />
    <input
      id="profileImageInput"
      type="file"
      accept="image/*"
      onChange={ProfileImageChange}
      style={{ display: 'none' }}
    />
  </div>
  )
}