export enum AdminActionTypes {
  LOGIN_ADMIN="LOGIN_ADMIN",
  LOGOUT_ADMIN="LOGOUT_ADMIN",
}

export interface LoginAdminAction {
    type: AdminActionTypes.LOGIN_ADMIN;
}

export interface LogoutAdminAction {
    type: AdminActionTypes.LOGOUT_ADMIN;
}

export type AdminAction = LoginAdminAction | LogoutAdminAction;

export type AdminType = {
    id: number,
    login: string,
    name: string,
}

export interface AdminState {
    isAuth: boolean;
}
