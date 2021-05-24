import React from 'react';
import './styles/insights.css';
import OnTrackToken from './components/on-track-token';
import OffTrackToken from './components/off-track-token';
import MedImpactPill from './components/med-impact-pill';
import HighImpactPill from './components/high-impact-pill';
import language from './language';
import data from './mock-report.json';

const Insights = () => {
    // console.log('JSON data', data);
    const accounts = Object.values(data.accounts).map((accountCategoryKey) => {
        return accountCategoryKey;
    });

    const creditUtilisationPill = Object.values(accounts).map((account) => {
        if (account.accountCategory === 'credit_cards') {
            const balance = account.overview.balance.amount;
            const limit = account.overview.limit.amount;
            if (balance > limit / 2) {
                return <OffTrackToken />;
            } else {
                return <OnTrackToken />;
            }
        }
    });

    const insights = Object.keys(language).map((insightKey) => {
        const insightSegment = language[insightKey];
        return (
            <ol key={insightKey} className="insight-card">
                <li key={insightKey}>
                    {insightSegment.Header === 'Public information' ? (
                        data.personal.publicInfo.courtAndInsolvencies ? (
                            <OffTrackToken />
                        ) : (
                            <OnTrackToken />
                        )
                    ) : null}
                    {insightSegment.Header === 'Credit utilisation' &&
                        creditUtilisationPill}
                    <h6>{insightSegment.Header}</h6>
                    <p>{insightSegment.Body}</p>
                    {insightSegment.Impact === 'High Impact' ? (
                        <HighImpactPill />
                    ) : (
                        <MedImpactPill />
                    )}
                </li>
            </ol>
        );
    });
    return (
        <div className="wrapper">
            <h1 className="heading">Insights</h1>
            <div className="cardContainer">{insights}</div>
        </div>
    );
};

export default Insights;
