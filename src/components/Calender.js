import React, { Component } from 'react';
import 'react-daypicker/lib/DayPicker.css';
import DayPicker from 'react-daypicker';
import moment from 'moment';
import Calendar from 'react-calendar';


export class Calender extends Component {
    state = {
        date: new Date(),
    }

    onChange = date => this.setState({ date })

    render() {
        return (
            <div className="todayDate">
                <Calendar className="calendarBox"
                    width={710}
                    height={400}
                    onChange={this.onChange}
                    value={this.state.date}
                />
            </div>
        )
    }
}

export default Calender
