import React from "react";



export const FeedbackOptions = ({ onIncrement }) => (

    <div className="div">
        <h2 className="title">Rate us!</h2>
        <ul className="button-list">
            <li className="list-item"><button name="good" className="button" onClick={onIncrement}>GOOD</button></li>
            <li className="list-item"><button name="neutral" className="button"  onClick={onIncrement}>NEUTRAL</button></li>
            <li className="list-item"><button name="bad" className="button"  onClick={onIncrement}>BAD</button></li>
        </ul>
    </div>

);


  

