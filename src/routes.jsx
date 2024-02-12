import Home from "./pages/Home/Home";
import UserList from "./pages/UserList/UserList";
import Newuser from "./pages/Newuser/Newuser";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";

let routes = [
  { path: "/", element: <Home /> },
  {
    path: "/users",
    element: <UserList />,
  },
  {
    path: "/newuser",
    element: <Newuser />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/product/:productId",
    element: <Product />,
  },
];
export default routes;
