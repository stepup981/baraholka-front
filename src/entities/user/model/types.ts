export interface IClientUser {
  email: string;
  password: string;
}

export interface IUser {
  email: string | undefined;
  isActivated: boolean;
  id: string;
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
