export enum UserActionTypes {
    LOGIN_USER="LOGIN_USER",
    LOGOUT_USER="LOGOUT_USER",
}

export interface LoginUserAction {
    type: UserActionTypes.LOGIN_USER;
}

export interface LogoutUserAction {
    type: UserActionTypes.LOGOUT_USER;
}

export type UserAction = LoginUserAction | LogoutUserAction;

export type UserType = {
    id: number,
    avatar?: string,
    profileCover?: string,
    login: string,
    name: string,
    description: string,
    country?: string,
    link?: string,
    birthDate?: string,
    createdAt?: string,
}

export interface UserState {
    isAuth: boolean;
    user: UserType | null;
    foreignUser?: UserType | null;
}