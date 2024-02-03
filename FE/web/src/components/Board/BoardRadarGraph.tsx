// https://apexcharts.com/docs/react-charts/

import { useState } from "react";
import Chart from "react-apexcharts";

function BoardRadarGraph() {
  const [state] = useState({
    series: [{
      name: 'Series 1',
      data: [20, 100, 40, 30, 50, 80, 33, 22],
    }],

    options: {

      dataLabels: {
        enabled: true
      },
      
      plotOptions: {
        radar: {
          size: 120,
          polygons: {
            strokeColors: '#e9e9e9',
            fill: {
              colors: ['#f8f8f8', '#fff']
            }
          }
        }
      },
      
      title: {
        text: '태그 분포'
      },

      colors: ['#8F00FF'],
        markers: {
          colors: ['#8F00FF'],
          strokeColor: '#8F00FF',
          strokeWidth: 2,
        },

      tooltip: {
        y: {
          formatter: function(val: number) {
            return val.toString();
          }
        }
      },

      xaxis: {
        categories: ['수학', '구현', 'DP', '자료 구조', '그래프', '그리디', '문자열', '미분류']
      }
    },
    
    yaxis: {
      max: 600,
      tickAmount: 3,
      labels: {
        formatter: function(val: number) {
          return val.toString();
        }
      }
    },
  });

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={state.options}
            series={state.series}
            type="radar"
            width="500"
          />
        </div>
      </div>
    </div>
  );
}

export default BoardRadarGraph;