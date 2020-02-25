import React, { Component } from 'react';
import Header from './Header';
import Cards from './Cards';
import CourseRevenue from './CourseRevenue';
import Calender from './Calender';
import Sidebar from './Sidebar';

export class Dashboard extends Component {
    render() {
        return (
            <div className="rowDashboard container">
                <div><Sidebar/></div>
                {/* <div><Header/></div> */}
                {/* <div><Cards/></div>
                <div className="columnDash">
                <div><CourseRevenue/></div>
                <div><Calender/></div>
                </div> */}
            </div>
        )
    }
}

export default Dashboard



