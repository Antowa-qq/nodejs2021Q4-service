import { User } from './user.model';

const { users, tasks } = require('../../db');

const getAllUsers = async () => users;

const getUserById = async (id: string) => {
  const user = users.find((u: User) => u.id === id);
  return user;
};

const createUser = async (user: User) => {
  const newUser = new User({ ...user });
  users.push(newUser);
  return newUser;
};

const updateUser = async (id: string, updatedUser: User) => {
  const user = await getUserById(id);
  user.name = updatedUser.name || user.name;
  user.login = updatedUser.login || user.login;
  user.password = updatedUser.password || user.password;
  return user;
};

const deleteUser = async (id: string) => {
  const user = users.findIndex((u: User) => u.id === id);
  tasks.forEach((t: { userId: string }, index: string) => {
    if (t.userId === id) {
      tasks[index].userId = null;
    }
  });
  users.splice(user, 1);
  return user;
};

export { getAllUsers, getUserById, createUser, updateUser, deleteUser };
