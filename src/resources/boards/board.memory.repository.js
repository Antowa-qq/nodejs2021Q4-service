const { boards } = require('../../db');
const taskService = require('../tasks/task.memory.repository');
const Board = require('./board.model');

const getAllBoards = async () => boards;

const getBoardById = async (id) => {
  const board = boards.find((b) => b.id === id);
  return board;
};

const createBoard = async (board) => {
  const newBoard = new Board({ ...board });
  boards.push(newBoard);
  return newBoard;
};

const updateBoard = async (id, updatedBoard) => {
  const board = await getBoardById(id);
  board.title = updatedBoard.title || board.title;
  board.columns = updatedBoard.columns || board.columns;
  return board;
};

const deleteBoard = async (id) => {
  const board = boards.findIndex((b) => b.id === id);
  const tasks = await taskService.getAllTasks(id);
  tasks.forEach((t) => t.boardId === id && taskService.deleteTask(t.id));
  boards.splice(board, 1);
  return board;
};

module.exports = {
  getAllBoards,
  getBoardById,
  createBoard,
  updateBoard,
  deleteBoard,
};
