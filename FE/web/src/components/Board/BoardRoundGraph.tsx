// https://apexcharts.com/docs/react-charts/
import React, { Component } from "react";
import Chart from "react-apexcharts";

class BoardRoundGraph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        colors: ['#AD5600', '#435F7A', '#EC9A00', '#26E3A4', '#00B4FC', '#9F22FF'],
        labels: ['Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond', 'Master'],
        dataLabels: {
          enabled: true,
        },
        plotOptions: {
          pie: {
            expandOnClick: false,
            donut: {
              size: '30%',
            },
          }
        },
      },
      series: [44, 55, 41, 17, 15, 22],
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
              type="donut"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default BoardRoundGraph;