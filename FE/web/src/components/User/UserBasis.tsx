import React, { useEffect, useState } from 'react';
import { Progress } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import classes from './UserBasis.module.scss';
import { getNickname } from '../../api/nicknameAPI';

import bImage from './background_image.png';
import pImage from './profile_image.png';
import { getIsFriend, toggleIsFriend } from '../../api/friendListAPI';
import { getUserProfile } from '../../api/getUserDataAPI';
import getAsset from '../../utils/getAsset';

interface ProfileData {
    tier: number;
    userId: number;
    score: number;
    problemCount: number;
    friendship: number;
}

export default function UserBasis() {
  // nickname 과 username(현재 로그인 되어 있는 유저) 불러 오기
  const nickname = decodeURIComponent(window.location.href.split('/')[4]);

  // 유저 정보 가져오기 
  const [profile, setProfile] = useState<ProfileData>();

  useEffect(() => {
    async function getAxios() {
      const res = await getUserProfile(nickname);
      setProfile(res);
    }
    getAxios();
  }, [])

  // + 팔로우 기능
  const [isFriend, setIsFriend] = useState(0);
  const [isMe, setIsMe] = useState(false);

  useEffect(() => {
    async function getAxios() {
      const username = await getNickname();
      const res = await getIsFriend(nickname)
      setIsFriend(res)
      if (username == nickname) {
        setIsMe(true);
      }
    }
    getAxios();
  }, []);


  // 기본 제공 이미지
  const defaultBackgroundImage = bImage;
  const defaultProfileImage = pImage;

  const [backgroundImage, setBackgroundImage] = useState<string | null>(defaultBackgroundImage);
  const [profileImage, setProfileImage] = useState<string | null>(defaultProfileImage);

  // background 이미지 기능
  const BackgroundImageClick = () => {
    if (isEdited) {
      document.getElementById('backgroundImageInput')?.click();
    }
  };

  const BackgroundImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      profileImageData.append('backgroundImage', file);

      setBackgroundImage(URL.createObjectURL(file));
    }
  };

  // profile 이미지 기능
  const ProfileImageClick = () => {
    if (isEdited) {
      document.getElementById('profileImageInput')?.click();
    }
  };

  const ProfileImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      backgroundImageData.append('profileImage', file);

      setProfileImage(URL.createObjectURL(file));
    }
  };

  // 파일 서버에 업로드
  const profileImageData = new FormData();
  const backgroundImageData = new FormData();

  // const handleSubmit = async () => {
  //   // API 요청
  //   const profileImageResponse = await axios.post(
  //     '/api/v1/profile/profile-img',
  //     profileImageData,
  //     {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     }
  //   );

  //   const backgroundImageResponse = await axios.post(
  //     '/api/v1/profile/background-img',
  //     backgroundImageData,
  //     {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     }
  //   );

  //   // API 요청 결과 처리
  //   if (profileImageResponse.status === 200 && backgroundImageResponse.status === 200) {
  //     // 성공 처리
  //   } else {
  //     // 실패 처리
  //   }
  // };


  const [isEdited, setIsEdited] = React.useState(false);

  // friend list
  const friend = () => {
    async function getAxios() {
      const res = await toggleIsFriend(nickname);
      setIsFriend(res)
    }
    getAxios();
  }
  
  // // 티어 이미지 불러오기
  const [tierImg, setTierImg] = useState('');

  useEffect(() => {
    const updateTierImg = () => {
      if (profile?.tier) {
        setTierImg(String(profile?.tier));
      }
    };
    // profile.tier 변화 감지
     updateTierImg;
  }, [profile?.tier]);
  
  return (
    <div>
      <div
        className={`${classes.profileBackground} ${isEdited ? classes.hover : ''}`}
        style={{ backgroundImage: `url(${backgroundImage})` }}
        onClick={BackgroundImageClick}>
      </div>

      <div className={classes.userPageContainer}>

        <div className={`${classes.profileContainer} ${isEdited ? classes.hover : ''}`} >
          <div
            className={classes.profileImage}
            style={{ backgroundImage: `url(${profileImage})` }}
            onClick={ProfileImageClick}>
          </div>

          <div className={classes.Buttons}>
            {/* 팔로우 기능 */}
            {isMe &&
              <Button
                className={
                  `${isEdited ? "bg-transparent text-foreground border-default-200" : ""} ${classes.followButton}`
                }
                color="secondary"
                radius="full"
                size="lg"
                variant={isEdited ? "bordered" : "solid"}
                onPress={() => setIsEdited(!isEdited)}
              >
                {isEdited ? "수정 완료" : "정보 수정"}
              </Button>
            }
            {!isMe &&
              <Button
                className={
                  `${isFriend == 1 ? "bg-transparent text-foreground border-default-200" : ""} ${classes.followButton}`
                }
                color="secondary"
                radius="full"
                size="lg"
                variant={isFriend == 1 ? "bordered" : "solid"}
                onPress={friend}
              >
                {isFriend == 1 ? "친구 해제" : "친구 추가"}
              </Button>
            }
          </div>
        </div>

        {/* 닉네임 */}
        <div className={classes.nickname}>
          <img src={getAsset(`tier/level_${tierImg}.png`)} alt={tierImg}/>
          {nickname}
        </div>

        <div className={classes.progress}>
          {/* 경험치 바 */}
          <Progress
            aria-label="Loading..."
            size='lg'
            color="secondary"
            label={`${'경험치'} ${profile?.tier}`}
            value={profile?.score}
            showValueLabel={true}
            classNames={{
              track: "drop-shadow-md border border-default",
              indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
              label: "tracking-wider font-medium text-default-600",
              value: "text-foreground/60",
            }}
          />
        </div>
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