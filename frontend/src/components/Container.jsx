import React, { useEffect, useState } from 'react';

import InsertTaskBar from './InsertTaskBar';

import '../styles/Container.css';
import TasksContainer from './TasksContainer';

function Container() {
  const [arrayTasks, setArrayTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  async function fetchData() {
    const response = await fetch('http://localhost:3000/tasks');
    const data = await response.json();
    setArrayTasks(data);
  }

  function handleInputChange({ value }) {
    setInputValue(value);
  }

  async function setTasks(event) {
    event.preventDefault();
    const { value: title } = event.target[0];
    const titleJson = JSON.stringify({ title });

    await fetch(
      'http://localhost:3000/tasks',
      {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: titleJson,
      },
    );
    await fetchData();
    setInputValue('');
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="container">
      <InsertTaskBar
        setTasks={(event) => setTasks(event)}
        handleInputChange={({ target }) => { handleInputChange(target); }}
        inputValue={inputValue}
      />
      <TasksContainer arrayTasks={arrayTasks} fetchTasks={() => fetchData()} />
    </main>
  );
}

export default Container;
