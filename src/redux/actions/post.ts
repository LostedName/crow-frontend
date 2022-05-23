import { PostResponse } from './../../types/Post';
import errorCoverage from "../../error";
import { postService } from "../../services/post";
import { Notify } from "../../services/toast";
import { PostActionTypes } from "../../types/Post";
import { AppThunk } from "../store";
import { internalErrorAction, postCreateBadRequestAction, postsLoadBadRequestAction } from '../../error/actions/post';

export const addNewPost = (post: PostResponse) => ({
  type: PostActionTypes.ADD_NEW_POST,
  payload: post,
});
export const setUserPosts = (posts: PostResponse) => ({
  type: PostActionTypes.SET_USER_POSTS,
  payload: posts,
});
export const loadUserPosts = (id: number, offset: number = 0): AppThunk<void> => async (dispatch) => {
  try {
    const { data } = await postService.getAllUserPosts(id, offset);
    dispatch(setUserPosts(data));
  } catch (err) {
    errorCoverage(err, [
      postsLoadBadRequestAction,
      internalErrorAction,
    ]);
  }
};

export const createNewPost =
  (text: string): AppThunk<void> =>
  async (dispatch) => {
    try {
      const { data } = await postService.createPost(text);
      Notify.success("Новый пост успешно опубликован!");
      dispatch(addNewPost(data));
    } catch (err) {
      errorCoverage(err, [
        postCreateBadRequestAction,
        internalErrorAction
      ]);
    }
  };
