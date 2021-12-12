import { Board } from './board.model';

const boardsRepo = require('./board.memory.repository');

const getAllBoards = () => boardsRepo.getAllBoards();
const getBoardById = (id: string) => boardsRepo.getBoardById(id);
const createBoard = (board: Board) => boardsRepo.createBoard(board);
const updateBoard = (boardId: string, board: Board) =>
  boardsRepo.updateBoard(boardId, board);
const deleteBoard = (id: string) => boardsRepo.deleteBoard(id);

export { getAllBoards, getBoardById, createBoard, updateBoard, deleteBoard };
