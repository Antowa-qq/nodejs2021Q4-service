const boardsRepo = require('./board.memory.repository');

const getAllBoards = () => boardsRepo.getAllBoards();
const getBoardById = (id) => boardsRepo.getBoardById(id);
const createBoard = (board) => boardsRepo.createBoard(board);
const updateBoard = (boardId, board) => boardsRepo.updateBoard(boardId, board);
const deleteBoard = (id) => boardsRepo.deleteBoard(id);

module.exports = {
  getAllBoards,
  getBoardById,
  createBoard,
  updateBoard,
  deleteBoard,
};
