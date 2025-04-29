import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarChartProps {
  data: number[];
  labels: string[];
  title: string;
}

const BarChart = ({ data, labels, title }: BarChartProps) => {
  const chartData = {
    labels,
    datasets: [{
      label: title,
      data,
      backgroundColor: '#94A3B8',
      borderRadius: 8,
      borderColor: 'transparent',
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#334155',
        padding: 12,
        titleFont: { size: 14 },
        bodyFont: { size: 13 },
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: '#475569',
        borderWidth: 1,
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: true,
          color: '#E2E8F0',
          drawBorder: false,
        },
        ticks: {
          color: '#64748B',
          font: { size: 12 }
        }
      },
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: '#64748B',
          font: { size: 12 }
        }
      }
    }
  };

  return <Bar data={chartData} options={options} />;
};

export default BarChart; 