import { Board } from './board.model';

const { boards } = require('../../db');
const taskService = require('../tasks/task.memory.repository');

/**
 * Get all boards.
 * @returns all boards
 */
const getAllBoards = (): Board[] => boards;

/**
 * Get board by id.
 * @param  id - board id
 * @returns  board by id or undefined
 */
const getBoardById = async (id: string) => {
  const board = boards.find((b: { id: string }) => b.id === id) || false;
  return board;
};

/**
 * Create board.
 * @param  board - board
 * @returns  object board by id or undefined
 */
const createBoard = (board: Board): Board => {
  // const newBoard = new Board(board);
  boards.push(board);
  return board;
};

/**
 * Updates board by id.
 * @param id - uuid board
 * @param board - object board
 * @returns object board or false
 */
const updateBoard = async (id: string, updatedBoard: Board) => {
  const board = await getBoardById(id);
  if (board) {
    board.title = updatedBoard.title || board.title;
    board.columns = updatedBoard.columns || board.columns;
    return board;
  }
  return false;
};

/**
 * Removes board by id
 * @param id - uuid of board
 * @returns true if board was found or false if not
 */
const deleteBoard = (id: string) => {
  const board = boards.findIndex((b: Board) => b.id === id);
  const tasks = taskService.getAllTasks(id);
  tasks.forEach(
    (t: { boardId: string; id: string }) =>
      t.boardId === id && taskService.deleteTask(t.id)
  );
  boards.splice(board, 1);
  return board;
};

export { getAllBoards, getBoardById, createBoard, updateBoard, deleteBoard };
