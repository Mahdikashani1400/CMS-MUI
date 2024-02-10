import reactLogo from "../assets/react.svg";

import Icons from "../Icons/Icons";
import "./reset.css";
// import Footer from "../Footer/Footer"
import "./reset.css";
import "./App.css";
import Muiex from "../Muiex/Muiex";
import { useRoutes } from "react-router-dom";
import routes from "../routes";
import Home from "../pages/Home/Home";
import Topbar from "../components/Topbar/Topbar";
import Sidebar from "../components/Sidebar/Sidebar";

function App() {
  let router = useRoutes(routes);

  return (
    <>
      <div className="container">
        <div className="">
          <Sidebar />
        </div>
        <div className="page__content">
          <Topbar />
          {router}
        </div>
      </div>
      {/* <div className="app__container">
        <Icons></Icons>
        <Muiex></Muiex>
      </div> */}
    </>
  );
}

export default App;
