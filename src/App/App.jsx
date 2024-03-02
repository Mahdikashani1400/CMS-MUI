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
import { memo, useCallback, useState } from "react";

function App() {
  let router = useRoutes(routes);
  const [openMenu, setOpenMenu] = useState(true);
  let openMenuHandler = useCallback(() => {
    console.log("x");
    setOpenMenu((prev) => !prev);
  }, [openMenu]);

  return (
    <>
      <div className="container">
        {openMenu && <Sidebar />}
        <div className={`page__content ${openMenu ? "open__menu" : ""}`}>
          {/* <Topbar openMenuHandler={openMenuHandler} /> */}
          <TopbarMemo openMenuHandler={openMenuHandler} />
          <div className="router__container">{router}</div>
        </div>
      </div>
      {/* <div className="app__container">
        <Icons></Icons>
        <Muiex></Muiex>
      </div> */}
    </>
  );
}
const TopbarMemo = memo(({ openMenuHandler }) => (
  <>
    <Topbar openMenuHandler={openMenuHandler} />
  </>
));
export default App;
