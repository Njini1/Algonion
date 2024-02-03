import React, { useState } from 'react';
import {Progress} from "@nextui-org/react";
import classes from './UserBasis.module.scss';


export default function UserBasis() {
  const defaultBackgroundImage = "https://i.ibb.co/W0fNK2m/1600w-rssv-Ab9-JL4-I.webp";
  const defaultProfileImage = "https://i.ibb.co/vZDFkkQ/1587535553105.jpg";

  const [backgroundImage, setBackgroundImage] = useState<string | null>(defaultBackgroundImage);
  const [profileImage, setProfileImage] = useState<string | null>(defaultProfileImage);

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
    <div>
      
      <div 
      className={classes.profileBackground} 
      style={{ backgroundImage: `url(${backgroundImage})` }} 
      onClick={BackgroundImageClick}>
      </div>

      <div className={classes.userPageContainer}>
        <div 
        className={classes.profileImage} 
        style={{ backgroundImage: `url(${profileImage})` }} 
        onClick={ProfileImageClick}>
        </div>


        {/* 닉네임 */}
        <div className={classes.nickname}>
          <h2>Nickname</h2>
        </div>
        {/* 경험치 바 */}
        <Progress aria-label="Loading..." value={60} className={classes.expBar}/>

    </div>
        {/* 파일 업로드 */}
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