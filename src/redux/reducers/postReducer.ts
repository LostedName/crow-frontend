
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

import { PostAction, PostActionTypes, PostState } from "../../types/Post";

 
const initialState: PostState = {
  isPostsLoading: true,
  userPosts: [],
};

const userReducer = (state = initialState, action: PostAction): PostState => {
    switch (action.type) {
        case PostActionTypes.ADD_NEW_POST:
            return {
              ...state,
              userPosts: [action.payload, ...state.userPosts],
            };
        case PostActionTypes.SET_USER_POSTS:
            return {
                ...state,
                userPosts: [...action.payload],
            }
        default:
            return state;
    }
};

export default userReducer;