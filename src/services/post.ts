import api, {getAuthHeaders} from "./api";
class PostService {
  async createPost(text: string) {
    return await api.post("/api/post/", { text }, getAuthHeaders());
  }
  async getAllUserPosts(id: number, offset: number = 0) {
    return await api.get(`/api/post/${id}/${offset}`);
  }
}
const postService = new PostService();
export {postService};