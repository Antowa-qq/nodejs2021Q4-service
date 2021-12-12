import { v4 as uuidv4 } from 'uuid';
import { Column } from './column.model';

/** Class representing a board. */
export class Board {
  public id: string;

  public title: string;

  public columns: Column[];

  /**
 * Creates an instance of board.
 * @param object -
 * id: string;
  title: string;
  columns: Column[];
 */
  constructor({ id = uuidv4(), title = 'BOARD TITLE', columns = [] } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns.map((c) => new Column(c));
  }
}
