const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require('./user.controller');

const User = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
    login: { type: 'string' },
  },
};

const getUsersOpts = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: User,
      },
    },
  },
  handler: getAllUsers,
};

const getUserByIdOpts = {
  schema: {
    response: {
      200: User,
    },
  },
  handler: getUserById,
};

const postUserOpts = {
  schema: {
    body: {
      type: 'object',
      required: ['name', 'login', 'password'],
      properties: {
        name: { type: 'string' },
        login: { type: 'string' },
        password: { type: 'string' },
      },
    },
    response: {
      201: User,
    },
  },
  handler: createUser,
};

const updateUserOpts = {
  schema: {
    body: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        login: { type: 'string' },
        password: { type: 'string' },
      },
    },
    response: {
      200: User,
    },
  },
  handler: updateUser,
};

const deleteUserOpts = {
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
  handler: deleteUser,
};

const userRoutes = (fastify, options, done) => {
  fastify.get('/users', getUsersOpts);
  fastify.get('/users/:userId', getUserByIdOpts);
  fastify.post('/users', postUserOpts);
  fastify.put('/users/:userId', updateUserOpts);
  fastify.delete('/users/:userId', deleteUserOpts);
  done();
};

module.exports = userRoutes;
