export enum UserActionTypes {
    SET_USER_DATA="SET_USER_DATA",
    LOGOUT_USER="LOGOUT_USER",
    SET_APP_LOADING="SET_APP_LOADING",
}

export interface SetUserDataAction {
    type: UserActionTypes.SET_USER_DATA;
    payload: UserType;
}

export interface LogoutUserAction {
    type: UserActionTypes.LOGOUT_USER;
}

export interface AppLoadingAction {
    type: UserActionTypes.SET_APP_LOADING,
    payload: boolean,
}

export type UserAction = SetUserDataAction | LogoutUserAction | AppLoadingAction;

export type UserType = {
    id: number,
    avatar?: string,
    profileCover?: string,
    email: string,
    name: string,
    description: string,
    country?: string,
    link?: string,
    birthDate?: string,
    createdAt?: string,
}

export interface UserState {
    isAppLoading: boolean;
    isAuth: boolean;
    user: UserType | null;
    foreignUser?: UserType | null;
}