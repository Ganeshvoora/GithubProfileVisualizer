import React from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";



const COLORS = [
    "#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8",
    "#82ca9d", "#ffc658", "#ff7300", "#8889DD", "#9597E4"
  ];


const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function Piechart({data}) {
    const chartData = Object.entries(data || {}).map(([name, value]) => ({
        name,
        value
    }));
    
    // Sort data by value in descending order and take top 10
    const sortedData = chartData
        .sort((a, b) => b.value - a.value)
        .slice(0, 10);

    return (
        <PieChart width={400} height={400}>
            <Pie
                data={sortedData}  // Changed from data to sortedData
                cx={200}
                cy={200}
                labelLine={false}
                // label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
            >
                {sortedData.map((entry, index) => (  // Changed from data to sortedData
                    <Cell 
                        key={`cell-${entry.name}`} 
                        fill={COLORS[index % COLORS.length]} 
                    />
                ))}
            </Pie>
            <Legend />
        </PieChart>
    );
}
