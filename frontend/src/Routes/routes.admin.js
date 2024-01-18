import { AdminLayout } from "../layouts";
import { HomeAdmin, UserAdmin, CategoriesAdmin, ProductAdmin } from "../pages/Admin";

const routesAdmin = [
    {
        path: "/admin",
        layout: AdminLayout,
        component: HomeAdmin,
        exact: true
        
    },
    {
        path: "/admin/users",
        layout: AdminLayout,
        component: UserAdmin,
        exact: true
    },
    {
        path: "/admin/categories",
        layout: AdminLayout,
        component: CategoriesAdmin,
        exact: true
    },
    {
        path: "/admin/products",
        layout: AdminLayout,
        component: ProductAdmin,
        exact: true
    }

];

export default routesAdmin;