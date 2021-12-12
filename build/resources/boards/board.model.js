const { v4: uuidv4 } = require('uuid');

class Board {
  constructor({ id = uuidv4(), title = 'BOARD TITLE', columns = [] } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns.map((c) => ({ id: uuidv4(), ...c }));
  }
}

module.exports = Board;
