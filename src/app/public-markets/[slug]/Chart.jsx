// App.js
import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const InteractiveLineChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const generatedData = generateData();
    setData(generatedData);
  }, []);

  const generateData = () => {
    const weeklyReturnSP500 = 1 + 0.1556 / 52;
    const weeks = 52 * 10;
    const startDate = new Date("2012-01-01");
    const data = [];

    const randomNormal = (mean, stdDev) => {
      let u1 = 0,
        u2 = 0;
      while (u1 === 0) u1 = Math.random(); // Converting [0,1) to (0,1)
      while (u2 === 0) u2 = Math.random();
      let z = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
      return z * stdDev + mean;
    };

    let sp500 = 100;

    for (let i = 0; i < weeks; i++) {
      let date = new Date(startDate.getTime());
      date.setDate(startDate.getDate() + i * 7);

      sp500 *= randomNormal(weeklyReturnSP500, 0.1664 / Math.sqrt(52));
      let invescoSP500HighQuality = sp500 * 1.1;
      let qualityStrategy = invescoSP500HighQuality * 1.3;

      data.push({
        date: date.toISOString().split("T")[0],
        QualityStrategy: qualityStrategy,
        InvescoSP500HighQuality: invescoSP500HighQuality,
        SP500: sp500,
      });
    }

    return data;
  };

  const formatXAxis = (tickItem) => {
    return tickItem.split("-")[0];
  };

  return (
    <div style={{ width: "100%", height: 600 }}>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{ top: 50, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="date" tickFormatter={formatXAxis} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="QualityStrategy"
            stroke="#8884d8"
            dot={false}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="InvescoSP500HighQuality"
            stroke="#82ca9d"
            dot={false}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="SP500"
            stroke="#ffc658"
            dot={false}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default InteractiveLineChart;
