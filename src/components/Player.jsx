import { useState } from "react";

export default function Player({ initialName, active, setNewName, symbol }) {
  const [name, setName] = useState(initialName);
  const [isEdit, setIsEditing] = useState(false);

  const nameHandler = () => {
    setIsEditing((prev) => !prev);
    setNewName(name, symbol);
  }

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  }

  return (
    <span className={active ? 'active info-p' : 'info-p'}>
      {isEdit ? <input value={name} className="inp" onChange={nameChangeHandler} type="text"/> : name} 
      <button className="btn" onClick={nameHandler}>
        { isEdit ? 'Save' : 'Edit' }
      </button>
    </span>
  );
}
