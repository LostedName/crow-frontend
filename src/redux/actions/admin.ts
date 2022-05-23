import { AdminActionTypes } from "../../types/Admin";

export const loginAdmin = () => ({
  type: AdminActionTypes.LOGIN_ADMIN,
});
export const logoutAdmin = () => ({
  type: AdminActionTypes.LOGOUT_ADMIN,
});