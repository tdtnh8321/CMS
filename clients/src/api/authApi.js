import axiosClient from "./axiosClient";
class AuthApi {
  login = async (data) => {
    const url = "/user/login";
    return axiosClient.post(url, {
      body: data,
      paramsSerializer: {
        indexes: false,
      },
    });
  };
  changePassword = async (data) => {
    const url = "/user/changepassword";
    return axiosClient.post(url, {
      body: data,
      paramsSerializer: {
        indexes: false,
      },
    });
  };
}
const authApi = new AuthApi();
export default authApi;
