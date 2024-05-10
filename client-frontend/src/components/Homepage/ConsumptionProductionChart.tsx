import React from 'react';
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register the chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface ChartData {
  name: string;
  Consumption: number;
  Production: number;
}

interface ConsumptionProductionChartProps {
  data: ChartData[];
}

const ConsumptionProductionChart: React.FC<ConsumptionProductionChartProps> = ({ data }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Consumption and Production Chart',
      },
    },
  };

  const chartData = {
    labels: data.map(d => d.name),
    datasets: [
      {
        label: 'Production',
        data: data.map(d => d.Production),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Consumption',
        data: data.map(d => d.Consumption),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return <Bar options={options} data={chartData} />;
};

export default ConsumptionProductionChart;
