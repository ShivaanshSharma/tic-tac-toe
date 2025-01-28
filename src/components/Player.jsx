import { useState } from "react";

export default function Player({ initialName }) {
  const [name, setName] = useState(initialName);
  const [isEdit, setIsEditing] = useState(false);

  const nameChangeHandler = () => {
    setIsEditing((prev) => !prev);
  }

  const nameChange = (e) => {
    setName(e.target.value);
  }

  return (
    <span>
      {isEdit ? <input value={name} className="inp" onChange={nameChange} type="text"/> : name} 
      <button className="btn" onClick={nameChangeHandler}>
        Edit
      </button>
    </span>
  );
}
