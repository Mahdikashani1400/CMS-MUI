import Chart from "../../components/Chart/Chart";
import Features from "../../components/Features/Features";
import "./Home.css";
export default function Home() {
  return (
    <div className="home__page">
      <Features />
      <Chart />
    </div>
  );
}
