// https://apexcharts.com/docs/react-charts/
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

function BoardLinearGraph(props: any) {
  console.log(props);
  const [series, setSeries] = useState<number[]>([]); 

  useEffect(() => {
    // console.log(props)
    if (props) {
      setSeries(props.series);
      console.log(series)
    }
  }, [props]); 
  
  const [state] = useState({
    options: {
      stroke: {
        curve: 'stepline' as 'stepline',
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
  })

  return (<div className="app">
    <div className="row">
      <div className="mixed-chart">
        <Chart
          options={state.options}
          series={state.series}
          type="line"
          width="500"
        />
      </div>
    </div>
  </div>)
}

export default BoardLinearGraph;