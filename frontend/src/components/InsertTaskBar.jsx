/* eslint-disable react/prop-types */
import React from 'react';

import '../styles/InsertTaskBar.css';

function InsertTaskBar({ setTasks, handleInputChange, inputValue }) {
  return (
    <form
      className="InsertTaskBar"
      onSubmit={setTasks}
    >
      <input type="text" placeholder="Tarefa" onChange={handleInputChange} value={inputValue} />
      <button className="sendButton" type="submit">+</button>
    </form>
  );
}

export default InsertTaskBar;
