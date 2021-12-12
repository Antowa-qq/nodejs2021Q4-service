import { User } from './user.model';

const usersRepo = require('./user.memory.repository');

const getAllUsers = () => usersRepo.getAllUsers();

const getUserById = (id: string) => usersRepo.getUserById(id);

const createUser = (user: User) => usersRepo.createUser(user);

const updateUser = (userId: string, user: User) =>
  usersRepo.updateUser(userId, user);

const deleteUser = (id: string) => usersRepo.deleteUser(id);

export { getAllUsers, getUserById, createUser, updateUser, deleteUser };
