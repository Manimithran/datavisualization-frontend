// DataVisualization.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line } from 'recharts';
import './DataVisualization.css'; // Import the CSS file

const DataVisualization = ({ apiEndpoint, queryParam, queryValue }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api${apiEndpoint}`, {
                    params: { [queryParam]: queryValue }
                });
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [apiEndpoint, queryParam, queryValue]);

    if (!data.length) return <div>Loading...</div>;

    const chartData = data.map((entry, index) => ({
        name: `Entry ${index + 1}`,
        intensity: entry.intensity,
        relevance: entry.relevance,
        likelihood: entry.likelihood,
    }));

    return (
        <div className="chart-container">
            <div className="chart">
                <h2 className="chart-title">Bar Chart</h2>
                <BarChart width={800} height={400} data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip className="tooltip" />
                    <Legend className="legend" />
                    <Bar dataKey="intensity" fill="#8884d8" />
                    <Bar dataKey="relevance" fill="#82ca9d" />
                    <Bar dataKey="likelihood" fill="#ffc658" />
                </BarChart>
            </div>
            <div className="chart">
                <h2 className="chart-title">Line Chart</h2>
                <LineChart width={800} height={400} data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip className="tooltip" />
                    <Legend className="legend" />
                    <Line type="monotone" dataKey="intensity" stroke="#8884d8" />
                    <Line type="monotone" dataKey="relevance" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="likelihood" stroke="#ffc658" />
                </LineChart>
            </div>
        </div>
    );
};

export default DataVisualization;
