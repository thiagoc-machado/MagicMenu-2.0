import { AdminLayout } from "../layouts";
import { HomeAdmin } from "../pages/Admin/LoginAdmin";

const routesAdmin = [
    {
        path: "/admin",
        layout: AdminLayout,
        component: HomeAdmin,
        exact: true
        
    }
];

export default routesAdmin;