import axiosClient from "./axiosClient";
class AuthApi {
  login = async (data) => {
    const url = "/user/login";
    return axiosClient.post(url, data, {
      paramsSerializer: {
        indexes: false, // empty brackets like `arrayOfUserIds[]`
      },
    });
  };
}
const authApi = new AuthApi();
export default authApi;
