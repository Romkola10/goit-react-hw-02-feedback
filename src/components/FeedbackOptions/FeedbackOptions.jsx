import React from "react";
import PropTypes from 'prop-types';


export const FeedbackOptions = ({options, increment }) => (

    <div className="div">
        <h2 className="title">Rate us!</h2>
        <ul className="button-list">
            <li className="list-item">{options.map(option => {
                return (
                    <button type='button' className= 'button' onClick={() => increment(option)}
                        key={option}
                    >{option}</button>
                );
            })}</li>

        </ul>
    </div>

);

FeedbackOptions.protoType = {
    options: PropTypes.arrayOf(PropTypes.string),
    onIncrement: PropTypes.func,
}

export default FeedbackOptions;
  

