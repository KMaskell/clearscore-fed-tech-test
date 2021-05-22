import React from 'react';
import './insights.css';
import OnTrackToken from './components/on-track-token';
import OffTrackToken from './components/off-track-token';

const Insights = () => {
    return (
        <div className="wrapper">
            <OnTrackToken />
            <OffTrackToken />
        </div>
    );
};

export default Insights;
