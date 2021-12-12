import { FastifyRequest, FastifyReply } from 'fastify';

const boardService = require('./board.service');

interface boardsParams {
  boardId: string;
}
const getAllBoards = async (req: FastifyRequest, reply: FastifyReply) => {
  const boards = await boardService.getAllBoards();
  reply.send(boards);
};

const getBoardById = async (req: FastifyRequest, reply: FastifyReply) => {
  const { boardId } = <boardsParams>req.params;
  const board = await boardService.getBoardById(boardId);
  if (!board) {
    reply
      .code(404)
      .send({ message: `Oops, board with id = ${boardId} not found` });
  }
  reply.code(200).send({ board});
};

const createBoard = async (req: FastifyRequest, reply: FastifyReply) => {
  const board = req.body;
  const newBoard = await boardService.createBoard(board);
  reply.code(201).send({ ...newBoard, id: 'undefined' });
};

const deleteBoard = async (req: FastifyRequest, reply: FastifyReply) => {
  const { boardId } = <boardsParams>req.params;
  await boardService.deleteBoard(boardId);
  reply.send({
    message: `Board with id = ${boardId} was deleted successfully `,
  });
};

const updateBoard = async (req: FastifyRequest, reply: FastifyReply) => {
  const { boardId } = <boardsParams>req.params;
  const board = await boardService.getBoardById(boardId);
  const data = req.body;
  if (!board) {
    reply
      .code(404)
      .send({ message: `Oops, board with id = ${boardId} not found ` });
  }

  const updatedBoard = await boardService.updateBoard(boardId, data);
  reply.send(updatedBoard);
};

export { getAllBoards, getBoardById, createBoard, deleteBoard, updateBoard };
