import { AdminAction, AdminActionTypes, AdminState } from "../../types/Admin";

const initialState: AdminState = {
    isAuth: true,
}

const adminReducer = (state = initialState, action: AdminAction): AdminState => {
    switch (action.type) {
        case AdminActionTypes.LOGIN_ADMIN:
            return {...state, isAuth: true};
        case AdminActionTypes.LOGOUT_ADMIN:
            return {...state, isAuth: false};
        default:
        return state;
    }
}

export default adminReducer;