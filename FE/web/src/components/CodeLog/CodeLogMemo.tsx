import React, { useState } from 'react';

import classes from './CodeLogMemo.module.scss'

function CodeLogMemo() {
  const [text, setText] = useState(''); // 텍스트 값을 저장하는 state
  const [isEditing, setIsEditing] = useState(false); // 편집 모드 여부를 저장하는 state

  let initialValue = '';
  const handleEditClick = () => {
    setIsEditing(true); // 버튼 클릭 시 편집 모드로 전환
  };

  const handleTextChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setText(e.target.value); // 텍스트 입력 시 state 값 업데이트
  };

  const handleSaveClick = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    // 텍스트 저장 기능 구현
    // 예시: API 호출 또는 로컬 스토리지에 저장
    console.log(e);
    setText(e.target.value);
    setIsEditing(false); // 편집 모드 종료
  };

  const handleCancelClick = () => {
    // 취소 기능 구현
    setText(initialValue); // 편집 전 텍스트 값으로 되돌림
    setIsEditing(false); // 편집 모드 종료
  };
  
  return (
      <div>
        <div className={classes.memo}>
        {isEditing ? (
          <textarea
            className={classes.textarea}
            value={text}
            onChange={handleTextChange}
            name="text"
          />
        ) : (
          <pre>{text}</pre>
        )}
        {isEditing && (
          <div className={classes.buttons}>
            <button onClick={handleSaveClick}>확인</button>
            <button onClick={handleCancelClick}>취소</button>
          </div>
        )}
      </div>
      <button onClick={handleEditClick}>수정</button>
    </div>
    )
}
  
export default CodeLogMemo