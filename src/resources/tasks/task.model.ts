const { v4: uuidv4 } = require('uuid');
/** Class representing a task. */
class Task {
  public id: string;

  public title: string;

  public order: number;

  public description: string;

  public userId: string;

  public boardId: string;

  public columnId: string;

  /**
 * Creates an instance of task.
 * @param object -
 * id: string;
   order: number;
   title: string;
   description: string;
   userId: string | null;
   boardId: string | null;
   columnId: string | null;
 */
  constructor({
    id = uuidv4(),
    title = 'TASK TITLE',
    order = 1,
    description = 'TASK DESCRIPTION',
    userId = '',
    boardId = '',
    columnId = '',
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

export { Task };
