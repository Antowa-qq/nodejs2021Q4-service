const { tasks } = require('../../db');
const Task = require('./task.model');

const getAllTasks = async (boardId) =>
  tasks.filter((t) => t.boardId === boardId);

const getTaskById = async (boardId, taskId) => {
  const task = tasks.find((t) => t.id === taskId && t.boardId === boardId);
  return task;
};

const createTask = async (boardId, task) => {
  const newTask = new Task({ ...task, boardId });
  tasks.push(newTask);
  return newTask;
};

const updateTask = async (boardId, taskId, updatedTask) => {
  const task = await getTaskById(boardId, taskId);
  task.title = updatedTask.title;
  task.order = updatedTask.order;
  task.description = updatedTask.description;
  task.boardId = updatedTask.boardId;
  task.columnId = updatedTask.columnId;
  task.userId = updatedTask.userId;
  return task;
};

const deleteTask = async (taskId) => {
  const task = tasks.findIndex((b) => b.id === taskId);
  tasks.splice(task, 1);
  return task;
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
