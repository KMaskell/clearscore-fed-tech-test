import React from 'react';
import './insights.css';
import OnTrackToken from './components/on-track-token';
import OffTrackToken from './components/off-track-token';
import MedImpactPill from './components/med-impact-pill';
import HighImpactPill from './components/high-impact-pill';

const Insights = () => {
    return (
        <div className="wrapper">
            <OnTrackToken />
            <OffTrackToken />
            <MedImpactPill />
            <HighImpactPill />
        </div>
    );
};

export default Insights;
