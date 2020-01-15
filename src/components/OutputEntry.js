import React from 'react';

const OutputEntry = ({ monthYear, numberOfStudies, costForecast}) => {
    return (
        <div className='outputEntryGroup'>
            <p className='outputEntry'>{monthYear}</p>
            <p className='outputEntry'>{numberOfStudies}</p>
            <p className='outputEntry'>{costForecast}</p>
        </div>
    )
}

export default OutputEntry;