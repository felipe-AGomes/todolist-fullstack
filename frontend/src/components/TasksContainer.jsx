/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import ActionButtom from './ActionButtom';

import '../styles/TasksContainer.css';
import Status from './Status';

function TasksContainer({ arrayTasks, fetchTasks }) {
  const [selected, setSelected] = useState(null);

  async function deleteTasks(id) {
    await fetch(`http://localhost:3000/tasks/${id}`, { method: 'delete' });
    await fetchTasks();
  }

  function convertDate(UTCDate) {
    const dateOptions = { dateStyle: 'long', timeStyle: 'short' };
    const date = new Date(UTCDate).toLocaleString('pt-br', dateOptions);
    return date;
  }

  async function updateStatus({ value }, task) {
    const { id, title } = task;
    await fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, status: value }),
    });

    await fetchTasks();
  }

  function activateEditor(id) {
    if (selected === id) {
      setSelected(null);
      return;
    }
    setSelected(id);
  }

  async function updateTasks(id, status, event) {
    event.preventDefault();
    const title = event.target[0].value;

    await fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, status }),
    });
    await fetchTasks();
    setSelected(null);
  }

  return (
    <table>
      <thead>
        <tr>
          <td>Tarefa</td>
          <td>Criado em</td>
          <td>Status</td>
          <td>Ações</td>
        </tr>
      </thead>
      <tbody>
        {
          arrayTasks.map((task) => (
            <tr
              key={task.id}
            >
              <td>
                {
                  selected === task.id
                    ? (
                      <form onSubmit={(event) => {
                        updateTasks(task.id, task.status, event);
                      }}
                      >
                        <input autoFocus />
                      </form>
                    )
                    : task.title
                }

              </td>
              <td>{convertDate(task.create_date)}</td>
              <Status
                updateStatus={({ target }) => { updateStatus(target, task); }}
                stat={task.status}
              />
              <ActionButtom
                activateEditor={() => activateEditor(task.id)}
                deleteTasks={() => deleteTasks(task.id)}
              />
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default TasksContainer;
