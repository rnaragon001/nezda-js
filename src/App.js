import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Main from './containers/Main';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        numberOfStudies: '',
        studyGrowth: '',
        monthsToForecast: '',
        data: []
    }
  }

  render () {
    const { numberOfStudies, studyGrowth, monthsToForecast, data } = this.state; 

    const onNumberOfStudiesChange = (event) => {
        this.setState({numberOfStudies: event.target.value});
    }
    
    const onStudyGrowthChange = (event) => {
        this.setState({studyGrowth: event.target.value});
    }
    
    const onMonthsToForecastChange = (event) => {
        this.setState({monthsToForecast: event.target.value});
    }

    const onDataChange = (value) => {
      this.setState({data: value});
      console.log(this.state.data);
  }    
        
    return (
      <div className="App">
        <NavBar />
        <Banner />
        <Main
          numberOfStudies = {numberOfStudies}
          onNumberOfStudiesChange = {onNumberOfStudiesChange}
          studyGrowth = {studyGrowth}
          onStudyGrowthChange = {onStudyGrowthChange}
          monthsToForecast = {monthsToForecast}
          onMonthsToForecastChange = {onMonthsToForecastChange}
          data = {data}
          onDataChange = {onDataChange}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
