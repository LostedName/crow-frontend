import { UserAction, UserActionTypes, UserState } from "../../types/User";



const initialState: UserState = {
    // isAuth: true,
    // user: {
    //     id: 1,
    //     avatar: "/assets/myPhotoSquare.jpg",
    //     profileCover: "/assets/profileCover.jpg",
    //     login: "Dio_karpo",
    //     name: "Dmitry Karpenkin",
    //     description: "В рот всё ебал очень хорошо",
    //     country: "Belarus",
    //     link: "https://vk.com/dikarp118",
    //     birthDate: "28.04.2002",
    //     createdAt: "22.03.2014",
    // },
    foreignUser: {
        id: 2,
        avatar: "/assets/myPhotoSquare.jpg",
        profileCover: "/assets/profileCover.jpg",
        login: "Dio_karpo",
        name: "Dmitry Karpenkin",
        description: "В рот всё ебал очень хорошо",
        country: "Belarus",
        link: "https://vk.com/dikarp118",
        birthDate: "28.04.2002",
        createdAt: "22.03.2014",
    },

    isAuth: false,
    user: null,
};

const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.LOGIN_USER:
            return {
                isAuth: true,
                user: {
                    id: 1,
                    avatar: "/assets/myPhotoSquare.jpg",
                    profileCover: "",
                    login: "Dio_karpo",
                    name: "Dmitry Karpenkin",
                    description: "В рот всё ебал очень хорошо",
                    country: "Belarus",
                    link: "https://vk.com/dikarp118",
                    birthDate: "28.04.2002",
                    createdAt: "22.03.2014",
                },
            };
        case UserActionTypes.LOGOUT_USER:
            return { ...initialState };
        default:
            return state;
    }
};

export default userReducer;