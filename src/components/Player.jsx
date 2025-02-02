import { useState } from "react";

export default function Player({ initialName, active }) {
  const [name, setName] = useState(initialName);
  const [isEdit, setIsEditing] = useState(false);

  const nameChangeHandler = () => {
    setIsEditing((prev) => !prev);
  }

  const nameChange = (e) => {
    setName(e.target.value);
  }

  return (
    <span className={active ? 'active info-p' : 'info-p'}>
      {isEdit ? <input value={name} className="inp" onChange={nameChange} type="text"/> : name} 
      <button className="btn" onClick={nameChangeHandler}>
        Edit
      </button>
    </span>
  );
}
