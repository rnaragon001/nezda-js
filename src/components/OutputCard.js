import React, { Component } from 'react';
import OutputEntry from '../components/OutputEntry';

// const dataArray = [
//     {
//         monthYear: "Jan 2020",
//         numberOfStudies: "10,000,000",
//         costForecast: "$1,347.66"
//     },
//     {
//         monthYear: "Feb 2020",
//         numberOfStudies: "20,000,000",
//         costForecast: "$2,739.45"
//     }
// ]

class OutputCard extends Component {
    // componentDidMount () {
    //     this.props.onDataChange(dataArray);
    // }

    render () {
        const { data } = this.props;
        return (
            <div className='outputCard'>
                <legend className='txtOutputCardTitle'>Forecast Output</legend>
                <div className='boxOutput'>
                    <div className='boxHeaderGroup'>
                        <header className='txtColHeader'>Month / Year</header>
                        <header className='txtColHeader'>Number of Studies</header>
                        <header className='txtColHeader'>Cost Forecast</header>
                    </div>
                    {
                        data.map((entry, i) => {
                                    return ( 
                                        <OutputEntry 
                                            key = {i}
                                            monthYear = {data[i].monthYear} 
                                            numberOfStudies = {data[i].numberOfStudies} 
                                            costForecast = {data[i].costForecast} 
                                        />
                                    );
                                })
                        }
                </div>
            </div>
        )
    }    
}

export default OutputCard;