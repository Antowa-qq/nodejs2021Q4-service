// const Task = require('./task.model');

import { Task } from './task.model';

const { tasks } = require('../../db');

const getAllTasks = async (boardId: string) =>
  tasks.filter((t: Task) => t.boardId === boardId);

const getTaskById = async (boardId: string, taskId: string) => {
  const task = tasks.find(
    (t: Task) => t.id === taskId && t.boardId === boardId
  );
  return task;
};

const createTask = async (boardId: string, task: Task) => {
  const newTask = new Task({ ...task, boardId });
  tasks.push(newTask);
  return newTask;
};

const updateTask = async (
  boardId: string,
  taskId: string,
  updatedTask: Task
) => {
  const task = await getTaskById(boardId, taskId);
  task.title = updatedTask.title;
  task.order = updatedTask.order;
  task.description = updatedTask.description;
  task.boardId = updatedTask.boardId;
  task.columnId = updatedTask.columnId;
  task.userId = updatedTask.userId;
  return task;
};

const deleteTask = async (taskId: string) => {
  const task = tasks.findIndex((b: Task) => b.id === taskId);
  tasks.splice(task, 1);
  return task;
};

export { getAllTasks, getTaskById, createTask, updateTask, deleteTask };
