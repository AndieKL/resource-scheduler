import React, { Component } from 'react';
import DateSelector from './components/date-selector';
import ResourceList from './components/resource-list';
import experiments from './components/resources';
//import moment from 'moment';
//re-import moment once ready to freeze state for current beam schedule using date-picker

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      //once ready to freeze the state delete below and uncomment these 
      //startScreen: true,
      //startDate: moment(),
      //endDate: moment(),

      startScreen: false,
      startDate: new Date(2018,8,1),
      endDate: new Date(2018,9,30),

      resourceList: {},
      locationList: {}
    };

    this.setStartDate = this.setStartDate.bind(this);
    this.setEndDate = this.setEndDate.bind(this);
    this.setStartScreen = this.setStartScreen.bind(this);

  }

  loadResources = () => {
    this.setState({resourceList: experiments});
  }

  setStartScreen() {
    this.setState({startScreen: !this.state.startScreen});
  }

  setStartDate(date) {
    this.setState({startDate: date});
  }

  setEndDate(date) {
    this.setState({endDate: date});
  }

  render() {
    if (this.state.startScreen) {
      return (
        <div className="App">
          <header className="app-header">
            <h1>Beam Schedule</h1>
          </header>
          <DateSelector 
            startDate={this.state.startDate}
            setStartDate={this.setStartDate}
            endDate={this.state.endDate}
            setEndDate={this.setEndDate}
            setStartScreen={this.setStartScreen}
          />
        </div>
      );
    }
    else {
      //note change line <h2>{this.state.startDate._d.toDateString()} - {this.state.endDate._d.toDateString()}</h2>
      return (
        <div className="App">
          <header className="app-header">
            <h1>Beam Schedule</h1>
            <h2>{this.state.startDate.toDateString()} - {this.state.endDate.toDateString()}</h2>
          </header>
          <ResourceList 
            resources={this.state.resourceList}
            loadResources={this.loadResources}
          />
        </div>
      );
    }
  }
}

export default App;
