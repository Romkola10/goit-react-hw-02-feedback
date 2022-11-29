import React from "react";



export const Statistics = ({ good, neutral, bad }) => {
    return(
        <div>
            <h2 className="title">Statistics</h2>
            <ul className="feedback-list">
                <li className="list-item">Good: {good}</li>
                <li className="list-item">Neutral: {neutral}</li>
                <li className="list-item">Bad: {bad}</li>
                <li className="list-item">Total: {good + neutral + bad}</li>
                <li className="list-item">Positive feedback:{(good / (good + neutral + bad) * 100).toFixed()} %</li>
            </ul>
        </div>
    )
};
