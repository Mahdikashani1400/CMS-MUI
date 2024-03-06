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
import AppContextProvider from "../Contexts/AppContext";

function App() {
  let router = useRoutes(routes);
  const [openMenu, setOpenMenu] = useState(true);
  let contextValue = {
    openMenu,
    setOpenMenu,
  };

  return (
    <>
      <AppContextProvider value={contextValue}>
        <div className="container">
          {openMenu && <Sidebar />}
          <div className={`page__content ${openMenu ? "open__menu" : ""}`}>
            <Topbar />
            <div className="router__container">{router}</div>
          </div>
        </div>
        {/* <div className="app__container">
        <Icons></Icons>
        <Muiex></Muiex>
      </div> */}
      </AppContextProvider>
    </>
  );
}

export default App;
