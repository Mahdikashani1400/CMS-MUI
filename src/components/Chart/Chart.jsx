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
  const data = [
    { month: "January", sale: 2000 },
    { month: "February", sale: 5000 },
    { month: "March", sale: 8000 },
    { month: "April", sale: 1000 },
    { month: "May", sale: 2070 },
    { month: "June", sale: 9700 },
    { month: "July", sale: 12200 },
    { month: "August", sale: 6070 },
    { month: "September", sale: 4300 },
    { month: "October", sale: 2550 },
    { month: "November", sale: 1100 },
    { month: "December", sale: 13000 },
  ];
  return (
    <div className="chart">
      <h3 className="chart__title">month sale</h3>
      <ResponsiveContainer width="100%" height={500}>
        <AreaChart
          width={500}
          height={200}
          data={data}
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
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
