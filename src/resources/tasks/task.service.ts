const taskRepo = require('./task.memory.repository');

const getAllTasks = (boardId) => taskRepo.getAllTasks(boardId);
const getTaskById = (boardId, taskId) => taskRepo.getTaskById(boardId, taskId);
const createTask = (boardId, task) => taskRepo.createTask(boardId, task);
const updateTask = (boardId, taskId, task) =>
  taskRepo.updateTask(boardId, taskId, task);
const deleteTask = (taskId) => taskRepo.deleteTask(taskId);

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
