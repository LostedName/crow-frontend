import { NavigateFunction } from 'react-router-dom';
import errorCoverage from '../../error';
import { internalErrorAction, loginBadRequestAction, loginEmptyFieldsAction, loginNotFoundAction, refreshBadTokenAction, userAlreadyExistAction } from '../../error/actions/user';
import { getAccessToken, getRefreshToken, setAccessToken, setRefreshToken } from '../../services/jwt';
import { Notify } from '../../services/toast';
import { userService } from '../../services/user';
import { AppThunk } from '../store';
import { UserActionTypes, UserType } from './../../types/User';

export const setUserData = (payload: UserType) => ({
  type: UserActionTypes.SET_USER_DATA,
  payload, 
});
export const logoutUser = () => ({
  type: UserActionTypes.LOGOUT_USER,
});
export const setAppLoading = (payload: boolean) => ({
  type: UserActionTypes.SET_APP_LOADING,
  payload,
});

export const loginUserAsync = (email: string, password: string, navigate: NavigateFunction): AppThunk<void> => async dispatch => {
  try {
    const {data, status} = await userService.loginUser(email, password);
    if (status.toString()[0] === "2") {
        const {user, accessToken, refreshToken} = data;
        setAccessToken(accessToken);
        setRefreshToken(refreshToken);
        Notify.success("Вы успешно авторизованы!");
        dispatch(setUserData(user));
      navigate('/');
    }
  } catch(err) {
    errorCoverage(err, [loginNotFoundAction, loginBadRequestAction, loginEmptyFieldsAction, internalErrorAction]);
  }
}
export const registerUserAsync = (email: string, name: string, password: string, navigate: NavigateFunction): AppThunk<void> => async dispatch => {
  try {
    const {data, status} = await userService.registerUser(email, name, password);
    if (status.toString()[0] === "2") {
        const {user, accessToken, refreshToken} = data;
        setAccessToken(accessToken);
        setRefreshToken(refreshToken);
        Notify.success("Вы успешно зарегистрированы!");
        dispatch(setUserData(user));
        navigate('/');
      }
  } catch(err) {
    errorCoverage(err, [userAlreadyExistAction, loginEmptyFieldsAction, internalErrorAction]);
  }
}
export const getUserDataAsync = (): AppThunk<void> => async dispatch => {
  const {data} = await userService.getUserData();
  dispatch(setUserData(data));
}
export const loadUserAsync = (): AppThunk<void> => async dispatch => {
  try {
    const accessToken = getAccessToken();
    const refreshToken = getRefreshToken();
    if (accessToken) {
      await dispatch(getUserDataAsync());
      return dispatch(setAppLoading(false));
    }
    if (refreshToken) {
      await dispatch(refreshTokenAsync());
      await dispatch(getUserDataAsync());
      return dispatch(setAppLoading(false)); 
    }
    return dispatch(setAppLoading(false));
  } catch(err) {
    const refreshToken = getRefreshToken();
    if (refreshToken) {
      await dispatch(refreshTokenAsync());
      await dispatch(getUserDataAsync());
      return dispatch(setAppLoading(false));
    }
    return dispatch(setAppLoading(false));
  }
}
export const refreshTokenAsync = (): AppThunk<void> => async () => {
  try {
    const {data, status} = await userService.refreshToken();
    if (status.toString()[0] === "2") {
      const {accessToken, refreshToken} = data;
      setAccessToken(accessToken);
      setRefreshToken(refreshToken);
    }
  } catch (err) {
    errorCoverage(err, [refreshBadTokenAction, internalErrorAction]);
  }
}