import React, { Component } from 'react'
import Chart from 'react-google-charts'
const pieData = [
  ['Task', 'Hours per Day'],
  ['Work', 1],
  ['Eat', 3],
  ['Commute', 2],
  ['Watch TV', 2],
  ['Sleep', 3.5],
]
const pieOptions = {
  pieHole: 10,
}
class PieChart extends Component {
  render() {
    return (
      <div className="container mt-5">
        <Chart
          width={'540px'}
          height={'320px'}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={pieData}
          options={pieOptions}
          rootProps={{ 'data-testid': '3' }}
        />
      </div>
    )
  }
}
export default PieChart