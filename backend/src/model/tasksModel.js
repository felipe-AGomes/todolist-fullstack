const connection = require('./connect');

async function getTasks() {
  const [tasks] = await connection.execute('SELECT * FROM tasks');
  return tasks;
}

async function setTasks(task) {
  const { title } = task;

  const utcDate = new Date(Date.now()).toUTCString();

  const [setedTasks] = await connection.execute(
    'INSERT INTO tasks(title, status, create_date) values(? ,? ,?)',
    [title, 'pendente', utcDate]
  );
  return { insertId: setedTasks.insertId };
}

async function deleteTasks(id) {
  const [deletedTasks] = await connection.execute('DELETE FROM tasks WHERE id = ?', [id]);
  return deletedTasks;
}

async function updateTasks(id, task) {
  const { title, status } = task;

  const [updatedTasks] = await connection.execute(
    'UPDATE tasks SET title = ?, status = ? WHERE id = ?',
    [title, status, id]
  );
  return updatedTasks;
}

module.exports = {
  getTasks,
  setTasks,
  deleteTasks,
  updateTasks,
};
