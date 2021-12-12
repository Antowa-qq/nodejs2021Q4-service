const { users, tasks } = require('../../db');
const User = require('./user.model');

const getAllUsers = async () => users;

const getUserById = async (id) => {
  const user = users.find((u) => u.id === id);
  return user;
};

const createUser = async (user) => {
  const newUser = new User({ ...user });
  users.push(newUser);
  return newUser;
};

const updateUser = async (id, updatedUser) => {
  const user = await getUserById(id);
  user.name = updatedUser.name || user.name;
  user.login = updatedUser.login || user.login;
  user.password = updatedUser.password || user.password;
  return user;
};

const deleteUser = async (id) => {
  const user = users.findIndex((u) => u.id === id);
  tasks.forEach((t, index) => {
    if (t.userId === id) {
      tasks[index].userId = null;
    }
  });
  users.splice(user, 1);
  return user;
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
