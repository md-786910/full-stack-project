import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Pie } from "react-chartjs-2";

function Chart() {
  const [api, setApi] = useState([]);

  ChartJS.register(ArcElement, Tooltip, Legend, Title);

  const data = {
    labels: ["Blue"],

    datasets: [
      {
        label: "# no of Api",
        data: [api],
        backgroundColor: ["rgba(255, 255, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "left",
      },
      title: {
        display: true,
        text: "Total Api " + api,
      },
    },
  };

  const fetchAPi = async () => {
    try {
      const resp = await fetch("/api");

      const data = await resp.json();

      setApi(data.message.length);

      if (resp.status !== 200) {
        alert(data.message);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchAPi();
  }, []);

  return (
    <>
      <div className="container p-5 shadow ">
        <Pie data={data} options={options} />
      </div>
    </>
  );
}
export default Chart;
