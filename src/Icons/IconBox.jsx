import SingleIcon from "./SingleIcon";
import "./IconBox.css";
export default function IconBox(props) {
  console.log(props);
  //   if (props.count > 500) {
  const { color = "", name, title, count } = props;
  return (
    // props.count > 500 &&
    <div>
      <div className="icon__box">
        <div className="content">
          <a href="#" style={{ backgroundColor: color }}>
            <SingleIcon name={name}></SingleIcon>
          </a>
          <div className="icon__box--text">
            <p>{title}</p>
            <p>{count}</p>
          </div>
        </div>
      </div>
    </div>
  );
  //   }
}
