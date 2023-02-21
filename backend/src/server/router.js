const express = require('express');
const tasksController = require('../controllers/tasksController');
const { validateStatus, validateTitle } = require('../middleWares/tasksMiddlewares');

const router = express.Router();

router.get('/tasks', tasksController.getTasks);

router.post('/tasks', validateTitle, tasksController.setTasks);

router.delete('/tasks/:id', tasksController.deleteTasks);

router.put('/tasks/:id', validateTitle, validateStatus, tasksController.updateTasks);

module.exports = router;
