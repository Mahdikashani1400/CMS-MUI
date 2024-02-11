import { chartData } from "../../datas";
import "./Chart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

export default function Chart() {
  const demoUrl =
    "https://codesandbox.io/s/line-chart-width-xaxis-padding-sujqi";

  return (
    <div className="chart">
      <h3 className="chart__title">month sale</h3>
      <ResponsiveContainer width="100%" height={500}>
        <AreaChart
          width={500}
          height={200}
          data={chartData}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="5 5" stroke="#37393b" />
          <XAxis dataKey="month" stroke="#888" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="sale"
            stroke="#8884d8"
            fill="rgb(136 150 216 / 50%)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
