import authApi from "../api/authApi";
import { useQuery } from "react-query";
const fetchApiLogin = async (params) => {
  try {
    const res = await authApi.login(params);
  } catch (error) {
    console.log("Failed to fetch ", error);
  }
};
class AuthQuery {
  login = (params) => {
    return useQuery("login", () => fetchApiLogin(params));
  };
}

const authQuery = new AuthQuery();
export default authQuery;
