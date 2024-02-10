import "./sidebar.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SpeedIcon from "@mui/icons-material/Speed";
import GroupIcon from "@mui/icons-material/Group";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import StorefrontIcon from "@mui/icons-material/Storefront";
import MailIcon from "@mui/icons-material/Mail";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <nav className="sidebar">
        <div className="sidebar__info">
          <h6 className="side__title">CORONA</h6>
          <div className="side__profile">
            <img src="/img/profile.jpg" alt="" />
            <div className="" style={{ marginRight: "40px" }}>
              <p>Henry Klein</p>
              <p className="side__role">Gold Member</p>
            </div>
            <MoreVertIcon />
          </div>
          <p
            style={{
              color: "#767b99",
              alignSelf: "start",
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            Navigation
          </p>
        </div>
        <ul className="sidebar__menu">
          <li>
            <NavLink to={"/"} className="side__menu-nav__link ">
              <span className="side__menu-icon">
                <SpeedIcon style={{ color: "#8F5FE8" }} />
              </span>

              <span className="">Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/users"} className="side__menu-nav__link">
              <span className="side__menu-icon">
                <GroupIcon />
              </span>

              <span className="">Users</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/newuser"} className="side__menu-nav__link">
              <span className="side__menu-icon">
                <PersonAddAltIcon style={{ color: "##caa35b" }} />
              </span>

              <span className="">New User</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/products"} className="side__menu-nav__link">
              <span className="side__menu-icon">
                <LocalMallIcon style={{ color: "rgb(92 168 226)" }} />
              </span>

              <span className="">Products</span>
            </NavLink>
          </li>
          <li>
            <a href="#!" className="side__menu-nav__link">
              <span className="side__menu-icon">
                <MailIcon style={{ color: "##f27b7b" }} />
              </span>

              <span className="">Mail</span>
            </a>
          </li>
          <li>
            <a href="#!" className="side__menu-nav__link">
              <span className="side__menu-icon">
                <StorefrontIcon style={{ color: "rgb(151 204 142)" }} />
              </span>

              <span>Manage</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
