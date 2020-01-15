import React, { Component } from 'react';

class InputCard extends Component {
    onSubmit = async () => {
        const apiAddressString = 'http://localhost:8000/server.php'
        await fetch(apiAddressString, {
            method: 'post',
            body: JSON.stringify({
                numberOfStudies: this.props.numberOfStudies,
                studyGrowth: this.props.studyGrowth,
                monthsToForecast: this.props.monthsToForecast
            })
        })
            .then (async response => await response.json())
            .then (async response => {
                if(await response){
                    console.log(response);
                    await this.props.onDataChange(response)
                }

            })
            .catch(console.log)
    }
    
    render() {
        const { 
            // numberOfStudies,
            onNumberOfStudiesChange, 
            // studyGrowth,
            onStudyGrowthChange,
            // monthsToForecast,
            onMonthsToForecastChange,
        } = this.props; 
    
        return (
            <div className='inputCard'>
                <form action='directory/' method='post' className='inputCardGroup' id='inputCard'>
                    <legend className='txtInputCardTitle'>Input Parameters</legend>
                    <div className='grpInput'>
                        <label>Current Number of Studies per Day</label>
                        <input type='text' onChange={onNumberOfStudiesChange}></input>
                    </div>
                    <div className='grpInput'>
                        <label>Number of Study Growth per month in %</label>
                        <input type='text' onChange={onStudyGrowthChange}></input>
                    </div>
                    <div className='grpInput'>
                        <label>Number of months to forecast</label>
                        <input type='text' onChange={onMonthsToForecastChange}></input>
                    </div>
                    <p className='btnSubmit' type='submit' value='Submit' onClick={this.onSubmit}>Submit</p>                                
                </form>
            </div>
        )
    }
}

export default InputCard;