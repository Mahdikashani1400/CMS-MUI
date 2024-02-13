import "./ThingEdit.css";
import Chart from "../../components/Chart/Chart";

import NewThing from "../NewThing/NewThing";

export default function ThingEdit({ productDataSales }) {
  return (
    <>
      {" "}
      <div className="product__boxes">
        <div className="product__box">
          <h6 className="chart__title">Sale In Month</h6>
          <div className="chart__container">
            <Chart type="line" data={productDataSales} height={130} />
          </div>
        </div>
        <div className="product__box">
          <div
            className=""
            style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}
          >
            <img className="product__box-img" src="/img/profile.jpg" alt="" />
            <p>Dell LapTop</p>
          </div>
          <div className="product__box-info">
            <div className="">
              <span>ID:</span>
              <span>121</span>
            </div>
            <div className="">
              <span>Name:</span>
              <span>Dell LapTop</span>
            </div>
            <div className="">
              <span>Sales:</span>
              <span>44000</span>
            </div>
            <div className="">
              <span>Active:</span>
              <span>YES</span>
            </div>
            <div className="">
              <span>In Stock:</span>
              <span>NO</span>
            </div>
          </div>
        </div>
        <NewThing />
      </div>
    </>
  );
}
