import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';

const data = {
  labels: ['Users', 'Inactive-Users', 'Manager', 'Vendor'],
  datasets: [
    {
      label: 'Number of Users',
      backgroundColor: '#ea80fc',
      // borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 0, 5, 0]
    }
  ]
};


export class CourseRevenue extends Component {

  render() {
    return (
      <div className="barChart">
        <Bar
        className="barData"
          data={data}
          width={710}
          height={370}
        />
      </div>
    )
  }
}

export default CourseRevenue
