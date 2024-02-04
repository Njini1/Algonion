import { useState } from 'react';

import classes from './CodeLogMemo.module.scss'

function CodeLogMemo() {
  const [content, setContent] = useState("");
  const [isEditable, setIsEditable] = useState(false);

  const textarea = document.querySelector('textarea')!;

  const handleEditClick = () => {
    setIsEditable(true);
  };

  const handleSaveClick = () => {
    setIsEditable(false);
  };

  return (    
    <div>
      <textarea
        className={classes.memo}
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
          textarea.style.height = 'auto';
          textarea.style.height = textarea.scrollHeight + 'px';
        }}
        readOnly={!isEditable}
      />
      <button onClick={handleEditClick} style={{ display: isEditable ? 'none' : 'block' }} className={classes.editButton}>수 정</button>
      <button onClick={handleSaveClick} style={{ display: isEditable ? 'block' : 'none' }} className={classes.saveButton}>확 인</button>
    </div>
    )
}
  
export default CodeLogMemo