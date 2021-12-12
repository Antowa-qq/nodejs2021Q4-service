import { Task } from './task.model';

const taskRepo = require('./task.memory.repository');

const getAllTasks = (boardId: string) => taskRepo.getAllTasks(boardId);

const getTaskById = (boardId: string, taskId: string) =>
  taskRepo.getTaskById(boardId, taskId);

const createTask = (boardId: string, task: string) =>
  taskRepo.createTask(boardId, task);

const updateTask = (boardId: string, taskId: string, task: Task) =>
  taskRepo.updateTask(boardId, taskId, task);

const deleteTask = (taskId: string) => taskRepo.deleteTask(taskId);

export { getAllTasks, getTaskById, createTask, updateTask, deleteTask };
