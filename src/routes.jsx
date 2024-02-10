import Home from "./pages/Home/Home";
import UserList from "./pages/UserList/UserList";
import Newuser from "./pages/Newuser/Newuser";
import Products from "./pages/Products/Products";

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
];
export default routes;
