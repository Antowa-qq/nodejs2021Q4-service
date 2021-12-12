import {  FastifyRequest, FastifyReply } from 'fastify';

const userService = require('./user.service');

interface userParams {
  userId: string;
}

const getAllUsers = async (req: FastifyRequest, reply: FastifyReply) => {
  const users = await userService.getAllUsers();
  reply.send(users);
};

const getUserById = async (req: FastifyRequest, reply: FastifyReply) => {
  const { userId } = <userParams>req.params;
  const user = await userService.getUserById(userId);
  if (!user) {
    reply
      .code(404)
      .send({ message: `Oops, user with id = ${userId} not found ` });
  }
  reply.send(user);
};

const createUser = async (req: FastifyRequest, reply: FastifyReply) => {
  const user = req.body;
  const newUser = await userService.createUser(user);
  reply.code(201).send(newUser);
};

const deleteUser = async (req: FastifyRequest, reply: FastifyReply) => {
  const { userId } = <userParams>req.params;
  await userService.deleteUser(userId);
  reply.send({ message: `User with id = ${userId} was deleted successfully ` });
};

const updateUser = async (req: FastifyRequest, reply: FastifyReply) => {
  const { userId } = <userParams>req.params;
  const data = req.body;
  const user = await userService.getUserById(userId);
  if (!user) {
    reply
      .code(404)
      .send({ message: `Oops, user with id = ${userId} not found ` });
  }

  const updatedUser = await userService.updateUser(userId, data);
  reply.send(updatedUser);
};

export { getAllUsers, getUserById, createUser, deleteUser, updateUser };
