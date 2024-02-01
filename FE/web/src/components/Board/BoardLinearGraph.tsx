// https://apexcharts.com/docs/react-charts/
import { Component } from "react";
import Chart from "react-apexcharts";

class BoardLinearGraph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        stroke: {
          curve: 'stepline',
          width: 2,
        },
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        },
        colors: ['#9f22ff']
      },
      series: [
        {
          name: "points",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        },
      ],
    };
  }

  render() {
    return (
       <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default BoardLinearGraph;