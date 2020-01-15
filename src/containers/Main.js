import React, { Component } from 'react';
import InputCard from '../components/InputCard';
import OutputCard from '../components/OutputCard';

class Main extends Component {
    render() {
        const { 
            numberOfStudies,
            onNumberOfStudiesChange, 
            studyGrowth,
            onStudyGrowthChange,
            monthsToForecast,
            onMonthsToForecastChange,
            data,
            onDataChange,
        } = this.props; 

        return (
            <div className='main'>
                <InputCard 
                    numberOfStudies = {numberOfStudies}
                    onNumberOfStudiesChange = {onNumberOfStudiesChange}
                    studyGrowth = {studyGrowth}
                    onStudyGrowthChange = {onStudyGrowthChange}
                    monthsToForecast = {monthsToForecast}
                    onMonthsToForecastChange = {onMonthsToForecastChange}
                    data = {data}
                    onDataChange = {onDataChange}
                />
                <OutputCard 
                    data = {data}
                    onDataChange = {onDataChange}
                />
            </div>
        )
    }
}

export default Main;