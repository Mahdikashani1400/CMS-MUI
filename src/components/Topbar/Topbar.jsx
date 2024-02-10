import "./Topbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import WidgetsIcon from "@mui/icons-material/Widgets";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Badge } from "@mui/material";
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar__wrapper">
        <div className="top__left">
          <MenuIcon style={{ color: "#6c7293", width: "20px" }} />
          <div className="top__search">
            <input type="text" placeholder="Search products" />
          </div>
        </div>
        <div className="top__right">
          <div className="top__icons">
            <div className="top__icon">
              <WidgetsIcon />
            </div>
            {/* <Badge color="secondary" variant="dot">
              <EmailIcon />
            </Badge>
            <Badge color="secondary" variant="dot">
              <NotificationsIcon />
            </Badge> */}
            <div className="top__icon">
              <EmailIcon />
              <span className="top__badge email"></span>
            </div>
            <div className="top__icon">
              <NotificationsIcon />
              <span className="top__badge notif"></span>
            </div>
          </div>
          <div className="top__profile">
            <img src="/public/img/profile.jpg" alt="" />
            <span>Henry Klein</span>
          </div>
        </div>
      </div>
    </div>
  );
}
