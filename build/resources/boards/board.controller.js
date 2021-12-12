const boardService = require('./board.service');

const getAllBoards = async (req, reply) => {
  const boards = await boardService.getAllBoards();
  reply.send(boards);
};

const getBoardById = async (req, reply) => {
  const { boardId } = req.params;
  const board = await boardService.getBoardById(boardId);
  if (!board) {
    reply
      .code(404)
      .send({ message: `Oops, board with id = ${boardId} not found` });
  }
  reply.send(board);
};

const createBoard = async (req, reply) => {
  const board = req.body;
  const newBoard = await boardService.createBoard(board);
  reply.code(201).send(newBoard);
};

const deleteBoard = async (req, reply) => {
  const { boardId } = req.params;
  await boardService.deleteBoard(boardId);
  reply.send({
    message: `Board with id = ${boardId} was deleted successfully `,
  });
};

const updateBoard = async (req, reply) => {
  const { boardId } = req.params;
  const board = await boardService.getBoardById(boardId);
  if (!board) {
    reply
      .code(404)
      .send({ message: `Oops, board with id = ${boardId} not found ` });
  }

  const updatedBoard = await boardService.updateBoard(boardId, {
    ...req.body,
  });
  reply.send(updatedBoard);
};

module.exports = {
  getAllBoards,
  getBoardById,
  createBoard,
  deleteBoard,
  updateBoard,
};
