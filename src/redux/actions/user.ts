import { UserActionTypes } from './../../types/User';

export const loginUser = () => ({
  type: UserActionTypes.LOGIN_USER,
});
export const logoutUser = () => ({
  type: UserActionTypes.LOGOUT_USER,
});