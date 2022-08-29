import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

// Component
import Container from "../UI/Container";
import Card from "../UI/Card";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const SystemMatrics = () => {
  const data = {
    labels: [
      "Aug 1",
      "Aug 2",
      "Aug 3",
      "Aug 4",
      "Aug 5",
      "Aug 6",
      "Aug 7",
      "Aug 8",
      "Aug 9",
      "Aug 10",
      "Aug 11",
      "Aug 12",
      "Aug 13",
      "Aug 14",
      "Aug 15",
      "Aug 16",
      "Aug 17",
      "Aug 18",
      "Aug 19",
      "Aug 20",
      "Aug 21",
      "Aug 22",
      "Aug 23",
      "Aug 24",
      "Aug 25",
      "Aug 26",
      "Aug 27",
      "Aug 28",
    ],
    datasets: [
      {
        data: [
          1700, 800, 1600, 400, 2000, 1300, 1100, 1500, 1900, 1000, 1800, 1400,
          1500, 1350, 1100, 1300, 2050, 2100, 1100, 1100, 1300, 1700, 1700,
          1000, 2200, 950, 1800, 700,
        ],
        backgroundColor: "transparent",
        borderColor: "#14AE5C",
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: 2500,
        ticks: {
          stepSize: 500,
        },
      },
    },
  };

  return (
    <Container>
      <div className="pt-14 pb-7">
        <div className="flex justify-between items-center mb-5">
          <p className="font-bold tablet:text-3xl phone:text-base">System Matrics</p>
          <ul className="flex items-center font-bold tablet:text-xl phone:text-xs">
            <li className="border-r text-light-black tablet:px-10 phone:px-4"><a href="#home">Daily</a></li>
            <li className="border-r text-light-black tablet:px-10 phone:px-4"><a href="#home">Weekly</a></li>
            <li className="tablet:pl-10 phone:pl-4 underline"><a href="#home">Monthly</a></li>
          </ul>
        </div>
        <Card className="border-solid border rounded-lg border-faint-black p-10">
          <div className="flex justify-between items-center mb-8">
            <p className="font-semibold tablet:text-2xl phone:text-base">API Response Time</p>
            <p className="font-bold tablet:text-3xl phone:text-xl">
              912<span className="font-bold tablet:text-xl phone:text-base">MS</span>
            </p>
          </div>
          <Line data={data} options={options}></Line>
        </Card>
      </div>
    </Container>
  );
};

export default SystemMatrics;
