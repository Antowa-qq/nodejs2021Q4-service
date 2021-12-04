const {
  createBoard,
  deleteBoard,
  getAllBoards,
  getBoardById,
  updateBoard,
} = require('./board.controller');

const Board = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    title: { type: 'string' },
    columns: { type: 'array' },
  },
};

const Column = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    title: { type: 'string' },
    order: { type: 'integer' },
  },
};

const getBoardsOpts = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: Board,
      },
    },
  },
  handler: getAllBoards,
};

const getBoardByIdOpts = {
  schema: {
    response: {
      200: Board,
    },
  },
  handler: getBoardById,
};

const postUserOpts = {
  schema: {
    body: {
      type: 'object',
      required: ['title', 'columns'],
      properties: {
        title: { type: 'string' },
        columns: { type: 'array' },
      },
    },
    response: {
      201: Board,
    },
  },
  handler: createBoard,
};

const updateBoardOpts = {
  schema: {
    body: {
      type: 'object',
      required: ['title', 'columns'],
      properties: {
        title: { type: 'string' },
        columns: { type: 'array', items: Column },
      },
    },
    response: {
      200: Board,
    },
  },
  handler: updateBoard,
};

const deleteBoardOpts = {
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
  handler: deleteBoard,
};

const boardRoutes = (fastify, options, done) => {
  fastify.get('/boards', getBoardsOpts);
  fastify.get('/boards/:boardId', getBoardByIdOpts);
  fastify.post('/boards', postUserOpts);
  fastify.put('/boards/:boardId', updateBoardOpts);
  fastify.delete('/boards/:boardId', deleteBoardOpts);
  done();
};

module.exports = boardRoutes;
