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

export default function Chart({ data, type, height }) {
  const demoUrl =
    "https://codesandbox.io/s/line-chart-width-xaxis-padding-sujqi";

  return (
    <div className="chart">
      <h3 className="chart__title">month sale</h3>
      <ResponsiveContainer width="100%" height={height}>
        {type === "area" ? (
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
              fill="#153550"
            />
          </AreaChart>
        ) : type === "line" ? (
          <LineChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            // margin={{
            //   top: 10,
            //   right: 30,
            //   left: 0,
            //   bottom: 0,
            // }}
          >
            <CartesianGrid stroke="transparent" />
            <XAxis dataKey="month" stroke="#888" />
            {/* <YAxis /> */}
            <Tooltip />
            <Line
              type="monotone"
              dataKey="sale"
              stroke="#8884d8"
              fill="#153550"
            />
          </LineChart>
        ) : (
          "WTF!"
        )}
      </ResponsiveContainer>
    </div>
  );
}
