import { v4 as uuidv4 } from 'uuid';
/** Class representing a user. */
class User {
  public id: string;

  public name: string;

  public login: string;

  public password: string;
  /**
 * Creates an instance of user.
 * @param object -
 * id: string;
  name: string;
  login: string;
  password: string;
 */

  constructor({
    id = uuidv4(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd',
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }
}

export { User };
