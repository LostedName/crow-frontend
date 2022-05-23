export enum PostActionTypes {
    ADD_NEW_POST="ADD_NEW_POST",
    SET_USER_POSTS="SET_USER_POSTS",
}

export interface AddNewPostAction {
    type: PostActionTypes.ADD_NEW_POST;
    payload: PostResponse;
}

export interface SetUserPostsAction {
    type: PostActionTypes.SET_USER_POSTS;
    payload: PostResponse[];
}

export type PostAction = AddNewPostAction | SetUserPostsAction;

export enum MenuType {
    none,
    own,
    stranger,
}
export interface PostProps {
    id: number,
    userId: number,
    userName: string,
    avatar: string,
    text: string,
    likeCount: number,
    createdAt: string,
    menuType: MenuType,
}

export interface PostResponse {
    id: number,
    userId: number,
    text: string,
    deletedAt: null | string,
}

export interface PostState {
    isPostsLoading: boolean;
    userPosts: PostResponse[];
}