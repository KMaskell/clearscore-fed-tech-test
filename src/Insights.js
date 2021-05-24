import React from 'react';
import './styles/insights.css';
import OnTrackToken from './components/on-track-token';
import OffTrackToken from './components/off-track-token';
import MedImpactPill from './components/med-impact-pill';
import HighImpactPill from './components/high-impact-pill';
import language from './language';
import data from './mock-report.json';

const Insights = () => {
    const accounts = Object.values(data.accounts).map((accountCategoryKey) => {
        return accountCategoryKey;
    });

    const insightSegment = Object.keys(language).map((insightKey) => {
        return language[insightKey];
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

    const electoralRollPill = Object.values(data.personal.electoralRoll).map(
        (personalValue) => {
            if (personalValue.current === true) {
                return <OnTrackToken />;
            } else {
                return <OffTrackToken />;
            }
        }
    );
    return (
        <div className="wrapper">
            <h1 className="heading">Insights</h1>
            {insightSegment.map((insight) => {
                return (
                    <ol key={insight.Header} className="insight-card">
                        <li key={insight.Header}>
                            {insight.Header === 'Public information' ? (
                                data.personal.publicInfo
                                    .courtAndInsolvencies ? (
                                    <OffTrackToken />
                                ) : (
                                    <OnTrackToken />
                                )
                            ) : null}
                            {insight.Header === 'Credit utilisation' &&
                                creditUtilisationPill}
                            {insight.Header === 'Electoral roll' &&
                                electoralRollPill}
                            <h4 className="insight-heading">
                                {insight.Header}
                            </h4>
                            <p>{insight.Body}</p>
                            {insight.Impact === 'High Impact' ? (
                                <HighImpactPill />
                            ) : (
                                <MedImpactPill />
                            )}
                        </li>
                    </ol>
                );
            })}
        </div>
    );
};

export default Insights;
