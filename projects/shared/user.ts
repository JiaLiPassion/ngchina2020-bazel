export interface User {
  account: string;
}

export function validateUser(user: User) {
  return user && user.account.length > 3;
}