import authApi from "../api/authApi";
import { useQuery } from "react-query";

class AuthQuery {
  login = (params) => {
    console.log({ params });
    const rs = useQuery(["loginquery"], () => fetchApiLogin(params));
    console.log(rs.isLoading);
    return rs;
  };
}
const fetchApiLogin = async (data) => {
  try {
    const res = await authApi.login(data);
    return res;
  } catch (error) {
    console.log("Failed to fetch ", error);
  }
};
const authQuery = new AuthQuery();
export default authQuery;
