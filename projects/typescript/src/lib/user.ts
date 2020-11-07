// user.ts
import { formatDate } from './date';

/** Data object representing a User. */
export class User {
  constructor(readonly name: string, readonly birthday: Date) {
    // console.log('new user', this.toString());
  }

  toString() {
    return `${this.name}, born on ${formatDate(this.birthday)}`;
  }
}
