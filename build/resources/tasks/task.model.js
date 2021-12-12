const { v4: uuidv4 } = require('uuid');

class Task {
  constructor({
    id = uuidv4(),
    title = 'TASK TITLE',
    order = 1,
    description = 'TASK DESCRIPTION',
    userId = null,
    boardId = null,
    columnId = null,
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.boardId = boardId;
    this.columnId = columnId;
    this.userId = userId;
  }
}

module.exports = Task;
