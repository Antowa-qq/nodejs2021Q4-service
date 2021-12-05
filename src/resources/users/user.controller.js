const userService = require('./user.service');

const getAllUsers = async (req, reply) => {
  const users = await userService.getAllUsers();
  reply.send(users);
};

const getUserById = async (req, reply) => {
  const { userId } = req.params;
  const user = await userService.getUserById(userId);
  if (!user) {
    reply
      .code(404)
      .send({ message: `Oops, user with id = ${userId} not found ` });
  }
  reply.send(user);
};

const createUser = async (req, reply) => {
  const user = req.body;
  const newUser = await userService.createUser(user);
  reply.code(201).send(newUser);
};

const deleteUser = async (req, reply) => {
  const { userId } = req.params;
  await userService.deleteUser(userId);
  reply.send({ message: `User with id = ${userId} was deleted successfully ` });
};

const updateUser = async (req, reply) => {
  const { userId } = req.params;
  const user = await userService.getUserById(userId);
  if (!user) {
    reply
      .code(404)
      .send({ message: `Oops, user with id = ${userId} not found ` });
  }

  const updatedUser = await userService.updateUser(userId, {
    ...req.body,
  });
  reply.send(updatedUser);
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
};
