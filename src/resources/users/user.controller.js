const userService = require('./user.service');

const getAllUsers = async (req, reply) => {
  const users = await userService.getAllUsers();
  reply.send(users);
};

const getUserById = async (req, reply) => {
  const { id } = req.params;
  const user = await userService.getUserById(id);
  if (!user) {
    reply.code(404).send({ message: `Oops, user with id = ${id} not found ` });
  }
  reply.send(user);
};

const createUser = async (req, reply) => {
  const user = req.body;
  const newUser = await userService.createUser(user);
  reply.code(201).send(newUser);
};

const deleteUser = async (req, reply) => {
  const { id } = req.params;
  await userService.deleteUser(id);
  reply.send({ message: `User with id = ${id} was deleted successfully ` });
};

const updateUser = async (req, reply) => {
  const { id } = req.params;
  const user = await userService.getUserById(id);
  if (!user) {
    reply.code(404).send({ message: `Oops, user with id = ${id} not found ` });
  }

  const updatedUser = await userService.updateUser(id, {
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
