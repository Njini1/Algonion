import { useState } from "react";
import Chart from "react-apexcharts";


function UserStreak() {

  const [state] = useState({
    options: {
      chart: {
        id: "streak"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    },
    series: [
      {
        name: "sat",
        data: [{
          x: 'W1',
          y: 10
        }, {
          x: 'W2',
          y: 32
        }, {
          x: 'W3',
          y: 50
        }, {
          x: 'W4',
          y: 30
        }]
      },
      {
        name: "fri",
        data: [{
          x: 'W1',
          y: 23
        }, {
          x: 'W2',
          y: 43
        }, {
          x: 'W3',
          y: 43
        }, {
          x: 'W4',
          y: 40
        }]
      },
      {
        name: "thu",
        data: [{
          x: 'W1',
          y: 10
        }, {
          x: 'W2',
          y: 32
        }, {
          x: 'W3',
          y: 50
        }, {
          x: 'W4',
          y: 30
        }]
      },
      {
        name: "wed",
        data: [{
          x: 'W1',
          y: 10
        }, {
          x: 'W2',
          y: 32
        }, {
          x: 'W3',
          y: 50
        }, {
          x: 'W4',
          y: 30
        }]
      },
    ]
  });

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={state.options}
            series={state.series}
            type="heatmap"
            width="500"
          />
        </div>
      </div>
    </div>
  );
}

export default UserStreak;