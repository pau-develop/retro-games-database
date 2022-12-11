export interface IUserInput {
  userName: string;
  password: string;
  rePassword: string;
  email: string;
}

export interface IUser {
  userName: string;
  email: string;
  verified: boolean;
  token: string;
}

interface Action {
  type: string;
}

export interface IUserAction extends Action {
  payload: IUser;
}
