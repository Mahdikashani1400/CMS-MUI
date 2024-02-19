import { useEffect } from "react";
import Chart from "../../components/Chart/Chart";
import Features from "../../components/Features/Features";
import WidgetLg from "../../components/WidgetLg/WidgetLg";
import WidgetSm from "../../components/WidgetSm/WidgetSm";
import { chartDataSales } from "../../datas";

import "./Home.css";
export default function Home() {
  // useEffect(() => {
  //   fetch("https://65c5df77e5b94dfca2e0744a.mockapi.io/api/v1/users", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then(async (res) => {
  //       return await res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }, []);
  return (
    <div className="home__page">
      <Features />
      <Chart data={chartDataSales} type="area" height={500} />
      <div className="widget__container">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
