import Auth from "../features/Auth";
import Home from "../features/Home";


const publicRoutes = [{ path: "/", component: Auth }];
const privateRoutes = [{ path: "/home/*", component: Home }];
export { publicRoutes, privateRoutes };
