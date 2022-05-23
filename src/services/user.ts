import api, {getAuthHeaders, getRefreshHeaders} from "./api";
class UserService {

  async loginUser(email: string, password: string) {
    return await api.post("/api/user/login", {
      email,
      password,
    });
  }
  async registerUser(email: string, name: string, password: string) {
    return await api.post("/api/user/register", {
      email,
      name,
      password,
    });
  }
  async getUserData() {
    return await api.get("/api/user/", getAuthHeaders());
  }
  async refreshToken() {
    return await api.get("/api/user/refresh-token", getRefreshHeaders());
  }
}
const userService = new UserService();
export {userService};