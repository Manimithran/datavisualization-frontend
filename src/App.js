
import React, { useState } from 'react';
import DataVisualization from './DataVisualization';
import './App.css'; // Import the CSS file

const App = () => {
    const [queryParam, setQueryParam] = useState('year');
    const [queryValue, setQueryValue] = useState('2023'); // Example value
    const [apiEndpoint, setApiEndpoint] = useState('/data-by-year');

    const handleEndpointChange = (e) => {
        setApiEndpoint(e.target.value);
    };

    const handleQueryParamChange = (e) => {
        setQueryParam(e.target.value);
    };

    const handleQueryValueChange = (e) => {
        setQueryValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className="container"> {/* Apply container class */}
            <h1>Data Visualization</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>API Endpoint:</label>
                    <select value={apiEndpoint} onChange={handleEndpointChange}>
                        <option value="/data-by-year">Data by End Year</option>
                        <option value="/data-by-topic">Data by Topic</option>
                        <option value="/data-by-sector">Data by Sector</option>
                        <option value="/data-by-region">Data by Region</option>
                        <option value="/data-by-pest">Data by PEST</option>
                        <option value="/data-by-source">Data by Source</option>
                        <option value="/data-by-swot">Data by SWOT</option>
                        <option value="/data-by-country">Data by Country</option>
                        <option value="/data-by-city">Data by City</option>
                    </select>
                </div>
                <div>
                    <label>Query Parameter:</label>
                    <input type="text" value={queryParam} onChange={handleQueryParamChange} />
                </div>
                <div>
                    <label>Query Value:</label>
                    <input type="text" value={queryValue} onChange={handleQueryValueChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
            <DataVisualization apiEndpoint={apiEndpoint} queryParam={queryParam} queryValue={queryValue} />
        </div>
    );
};

export default App;
