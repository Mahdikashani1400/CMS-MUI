import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import "./Features.css";

export default function Features() {
  return (
    <div className="features__container">
      <div className="single__feature">
        <div className="feature__info">
          <p style={{ display: "flex", alignItems: "center" }}>
            <span className="feature__price">$12.34</span>
            <span style={{ color: "lime" }}>+3.5%</span>
          </p>
          <p className="feature__title">Potential growth</p>
        </div>
        <span
          style={{
            alignSelf: "start",
            padding: ".5rem",
            background: "rgba(0, 210, 91, 0.11)",
            borderRadius: "8px",
          }}
        >
          <ArrowUpwardIcon
            color="success"
            style={{ transform: "rotate(45deg)" }}
          />
        </span>
      </div>
      <div className="single__feature">
        <div className="feature__info">
          <p style={{ display: "flex", alignItems: "center" }}>
            <span className="feature__price">$12.34</span>
            <span style={{ color: "red" }}>-2.5%</span>
          </p>
          <p className="feature__title">Potential growth</p>
        </div>
        <span
          style={{
            alignSelf: "start",
            padding: ".5rem",
            background: "rgba(252, 66, 74, 0.11)",
            borderRadius: "8px",
          }}
        >
          <ArrowUpwardIcon
            color="error"
            style={{ transform: "rotate(-135deg)" }}
          />
        </span>
      </div>
      <div className="single__feature">
        <div className="feature__info">
          <p style={{ display: "flex", alignItems: "center" }}>
            <span className="feature__price">$12.34</span>
            <span style={{ color: "lime" }}>+3.5%</span>
          </p>
          <p className="feature__title">Potential growth</p>
        </div>
        <span
          style={{
            alignSelf: "start",
            padding: ".5rem",
            background: "rgba(0, 210, 91, 0.11)",
            borderRadius: "8px",
          }}
        >
          <ArrowUpwardIcon
            color="success"
            style={{ transform: "rotate(45deg)" }}
          />
        </span>
      </div>
      <div className="single__feature">
        <div className="feature__info">
          <p style={{ display: "flex", alignItems: "center" }}>
            <span className="feature__price">$12.34</span>
            <span style={{ color: "lime" }}>+3.5%</span>
          </p>
          <p className="feature__title">Potential growth</p>
        </div>
        <span
          style={{
            alignSelf: "start",
            padding: ".5rem",
            background: "rgba(0, 210, 91, 0.11)",
            borderRadius: "8px",
          }}
        >
          <ArrowUpwardIcon
            color="success"
            style={{ transform: "rotate(45deg)" }}
          />
        </span>
      </div>
    </div>
  );
}
