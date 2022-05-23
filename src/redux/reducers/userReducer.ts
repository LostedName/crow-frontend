import { deleteAccessToken, deleteRefreshToken } from "../../services/jwt";
import { UserAction, UserActionTypes, UserState } from "../../types/User";

// foreignUser {
//     id: 2,
//     avatar: "/assets/myPhotoSquare.jpg",
//     profileCover: "/ass ets/profileCover.jpg",
//     login: "Dio_karpo",
//     name: "Dmitry Karpenkin",
//     description: "В рот всё ебал очень хорошо",
//     country: "Belarus",
//     link: "https://vk.com/dikarp118",
//     birthDate: "28.04.2002",
//     createdAt: "22.03.2014",
// }
 
const initialState: UserState = {
    isAppLoading: true,
    isAuth: false,
    user: null,
    foreignUser: null,
};

const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.SET_USER_DATA:
            return {
                ...state,
                isAuth: true,
                user: { ...action.payload },
            };
        case UserActionTypes.LOGOUT_USER:
            deleteAccessToken();
            deleteRefreshToken();
            return { ...state, isAuth: false, user: null };
        case UserActionTypes.SET_APP_LOADING:
            return {...state, isAppLoading: action.payload};
        default:
            return state;
    }
};

export default userReducer;