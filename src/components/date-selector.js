import React, { Component } from 'react';
import DatePicker from 'react-datepicker';


class DateSelector extends Component {
	render() {
		return (
			<div className="date-selector">
				<h1>Create your schedule by selecting the start and end dates.</h1>
				<p>Select start date:</p>
				<DatePicker
          			selected={this.props.startDate}
          			onChange={this.props.setStartDate}
        		/>
        		<p>Select end date:</p>
        		<DatePicker
          			selected={this.props.endDate}
          			onChange={this.props.setEndDate}
        		/>
        		<button onClick={this.props.setStartScreen}>Create!</button>
			</div>
		); 
	}
}

export default DateSelector;