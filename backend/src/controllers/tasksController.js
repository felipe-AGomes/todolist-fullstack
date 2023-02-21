const tasksModel = require('../model/tasksModel');

async function getTasks(_req, res) {
  const dataTasks = await tasksModel.getTasks();
  res.status(200).send(dataTasks);
}

async function setTasks(req, res) {
  const setedTasks = await tasksModel.setTasks(req.body);
  res.status(201).json(setedTasks);
}

async function deleteTasks(req, res) {
  const { id } = req.params;
  await tasksModel.deleteTasks(id);
  res.status(204).send(id);
}

async function updateTasks(req, res) {
  const { id } = req.params;

  await tasksModel.updateTasks(id, req.body);
  res.status(204).json();
}

module.exports = {
  getTasks,
  setTasks,
  deleteTasks,
  updateTasks,
};
