export interface IUser {
  email: string;
  password: string;
  isActivated?: boolean;
}

export interface IResponseUser {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}

export interface IResponseLogout {
  acknowledged: boolean;
  deletedCount: number;
}
