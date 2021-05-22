import React from 'react';
import './styles/insights.css';
import OnTrackToken from './components/on-track-token';
import OffTrackToken from './components/off-track-token';
import MedImpactPill from './components/med-impact-pill';
import HighImpactPill from './components/high-impact-pill';

const Insights = () => {
    return (
        <div class="wrapper">
            <h1 class="heading">Insights</h1>
            <div class="cardContainer">
                <div class="insight-card">
                    <OffTrackToken />
                    <h5>Electoral Role</h5>
                    <MedImpactPill />
                </div>
                <div class="insight-card">
                    <OnTrackToken />
                    <h5>Public Information</h5>
                    <MedImpactPill />
                </div>
                <div class="insight-card">
                    <OffTrackToken />
                    <h5>Credit Utilisation</h5>
                    <HighImpactPill />
                </div>
            </div>
        </div>
    );
};

export default Insights;
