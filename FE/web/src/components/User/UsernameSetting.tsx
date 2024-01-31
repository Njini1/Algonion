import classes from "./UsernameSetting.module.scss"

// import React, { useState } from 'react';

// const UsernameForm = () => {
//   const [username, setUsername] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // 닉네임 설정
//   };

function UserPage() {
	return (
    <div className={classes.page}>
      <div className={classes.textbox}>
        <p><b>알고니온</b>을 이용하기 위해,</p>
        <p>닉네임 설정이 필요합니다.</p>
      </div>
      {/* <form onSubmit={handleSubmit}> */}
      <div className={classes.formbox}>
        <form>
          <input
            type="text"
            placeholder="한글 6글자, 영문 12글자 이내"
            // onChange={(e) => setNickname(e.target.value)}
          />
        <div className={classes.buttonbox}>
          <button type="submit">확인</button>
        </div>
        </form>
      </div>
    </div>
    // 중복 확인 코드 필요
  )
}
  
export default UserPage