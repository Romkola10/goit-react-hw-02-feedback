import React from "react";
import PropTypes from 'prop-types';



export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return(
        <div>
            <h2 className="title">Statistics</h2>
            <ul className="feedback-list">
                <li className="list-item">Good: {good}</li>
                <li className="list-item">Neutral: {neutral}</li>
                <li className="list-item">Bad: {bad}</li>
                <li className="list-item">Total: {total}</li>
                <li className="list-item">Positive feedback:{positivePercentage} %</li>
            </ul>
        </div>
    )
};

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
}

export default Statistics;