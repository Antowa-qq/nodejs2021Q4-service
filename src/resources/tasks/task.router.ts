import { FastifyInstance } from 'fastify';

const {
  getAllTasks,
  getTaskById,
  createTask,
  deleteTask,
  updateTask,
} = require('./task.controller');

const Task = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    title: { type: 'string' },
    order: { type: 'integer' },
    description: { type: 'string' },
    userId: { type: ['string', 'null'] },
    boardId: { type: ['string', 'null'] },
    columnId: { type: ['string', 'null'] },
  },
};

const getTasksOpts = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: Task,
      },
    },
  },
  handler: getAllTasks,
};

const getTaskByIdOpts = {
  schema: {
    response: {
      200: Task,
    },
  },
  handler: getTaskById,
};

const postTaskOpts = {
  schema: {
    body: {
      type: 'object',
      required: ['title', 'order', 'description', 'userId'],
      properties: {
        title: { type: 'string' },
        order: { type: 'integer' },
        description: { type: 'string' },
        userId: { type: ['string', 'null'] },
        columnId: { type: ['string', 'null'] },
      },
    },
    response: {
      201: Task,
    },
  },
  handler: createTask,
};

const updateBoardOpts = {
  schema: {
    body: {
      type: 'object',
      properties: {
        title: { type: 'string' },
        order: { type: 'integer' },
        description: { type: 'string' },
        userId: { type: ['string', 'null'] },
        columnId: { type: ['string', 'null'] },
      },
    },
    response: {
      200: Task,
    },
  },
  handler: updateTask,
};

const deleteTaskOpts = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          message: { type: 'string' },
        },
      },
    },
  },
  handler: deleteTask,
};

const taskRoutes = (
  fastify: FastifyInstance,
  options: string,
  done: Function
) => {
  fastify.get('/boards/:boardId/tasks', getTasksOpts);
  fastify.get('/boards/:boardId/tasks/:taskId', getTaskByIdOpts);
  fastify.post('/boards/:boardId/tasks', postTaskOpts);
  fastify.put('/boards/:boardId/tasks/:taskId', updateBoardOpts);
  fastify.delete('/boards/:boardId/tasks/:taskId', deleteTaskOpts);
  done();
};

export default taskRoutes;
