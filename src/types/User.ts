export enum UserActionTypes {
    LOGIN_USER="LOGIN_USER",
}

export interface LoginUserAction {
    type: UserActionTypes.LOGIN_USER;
}

export type UserAction = LoginUserAction;

export interface UserState {
    isAuth: boolean;
}