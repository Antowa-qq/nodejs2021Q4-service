const taskService = require('./task.service');

const getAllTasks = async (req, reply) => {
  const { boardId } = req.params;
  const tasks = await taskService.getAllTasks(boardId);
  reply.send(tasks);
};

const getTaskById = async (req, reply) => {
  const { boardId, taskId } = req.params;
  const task = await taskService.getTaskById(boardId, taskId);
  if (!task) {
    reply
      .code(404)
      .send({ message: `Oops, task with id = ${taskId} not found` });
  }
  reply.send(task);
};

const createTask = async (req, reply) => {
  const { boardId } = req.params;
  const task = req.body;
  const newTask = await taskService.createTask(boardId, task);
  reply.code(201).send(newTask);
};

const deleteTask = async (req, reply) => {
  const { taskId } = req.params;
  await taskService.deleteTask(taskId);
  reply.send({
    message: `Task with id = ${taskId} was deleted successfully `,
  });
};

const updateTask = async (req, reply) => {
  const { boardId, taskId } = req.params;
  const task = await taskService.getTaskById(boardId, taskId);
  if (!task) {
    reply
      .code(404)
      .send({ message: `Oops, task with id = ${taskId} not found ` });
  }

  const updatedTask = await taskService.updateTask(boardId, taskId, {
    ...req.body,
  });
  reply.send(updatedTask);
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  deleteTask,
  updateTask,
};
