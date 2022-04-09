import { UserAction, UserActionTypes, UserState } from "../../types/User";



const initialState: UserState = {
    isAuth: false,
};

const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.LOGIN_USER:
            return { isAuth: true };
        default:
            return state;
    }
};

export default userReducer;