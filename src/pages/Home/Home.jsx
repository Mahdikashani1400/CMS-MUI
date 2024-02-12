import Chart from "../../components/Chart/Chart";
import Features from "../../components/Features/Features";
import WidgetLg from "../../components/WidgetLg/WidgetLg";
import WidgetSm from "../../components/WidgetSm/WidgetSm";
import { chartDataSales } from "../../datas";

import "./Home.css";
export default function Home() {
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
