import React from 'react';
import Nezda_php from '../api/Nezda_php';

const PostInputs = () => {
    const postApi = async searchTerm => {
        console.log('Nazda_php API called!');
        try {
            const response = await Nezda_php.post('/', {
                params: {
                    numberOfStudies: 1000,
                    studyGrowth: 3,
                    monthsToForecast: 36,
                }
            });
            setResults(response.data);
        } catch (err) {
            // console.log(err);
            setErrorMessage('Something went wrong: ', err);
        }
    }

    return [searchApi, results, errorMessage];
}

export default PostInputs;