import { FastifyRequest, FastifyReply } from 'fastify';

const taskService = require('./task.service');

interface boardsParams {
  boardId: string;
  taskId: string;
}

const getAllTasks = async (req: FastifyRequest, reply: FastifyReply) => {
  const { boardId } = <boardsParams>req.params;
  const tasks = await taskService.getAllTasks(boardId);
  reply.send(tasks);
};

const getTaskById = async (req: FastifyRequest, reply: FastifyReply) => {
  const { boardId, taskId } = <boardsParams>req.params;
  const task = await taskService.getTaskById(boardId, taskId);
  if (!task) {
    reply
      .code(404)
      .send({ message: `Oops, task with id = ${taskId} not found` });
  }
  reply.send(task);
};

const createTask = async (req: FastifyRequest, reply: FastifyReply) => {
  const { boardId } = <boardsParams>req.params;
  const task = req.body;
  const newTask = await taskService.createTask(boardId, task);
  reply.code(201).send(newTask);
};

const deleteTask = async (req: FastifyRequest, reply: FastifyReply) => {
  const { taskId } = <boardsParams>req.params;
  await taskService.deleteTask(taskId);
  reply.send({
    message: `Task with id = ${taskId} was deleted successfully `,
  });
};

const updateTask = async (req: FastifyRequest, reply: FastifyReply) => {
  const { boardId, taskId } = <boardsParams>req.params;
  const task = await taskService.getTaskById(boardId, taskId);
  const data = req.body;
  if (!task) {
    reply
      .code(404)
      .send({ message: `Oops, task with id = ${taskId} not found ` });
  }

  const updatedTask = await taskService.updateTask(boardId, taskId, data);
  reply.send(updatedTask);
};

export { getAllTasks, getTaskById, createTask, deleteTask, updateTask };
