// https://apexcharts.com/docs/react-charts/

import { useState, useEffect } from "react";
import Chart from "react-apexcharts";

function BoardRadarGraph() {
  const [width, setWidth] = useState(window.innerWidth);



  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  
  const [state] = useState({
    series: [{
      name: 'Series 1',
      data: [20,30,40,50,60,2,4,2],
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
        text: ''
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
        categories: ['수학', '구현', '그리디 알고리즘', '문자열', '자료 구조', '그래프 이론', '다이나믹 프로그래밍', '기하학']
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
            width={width}
          />
        </div>
      </div>
    </div>
  );
}

export default BoardRadarGraph;