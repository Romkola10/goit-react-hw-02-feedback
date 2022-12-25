import React, { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notifications/Notification";



class App extends Component {

  static defaultProps = {
    initialValue:0,
  }

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  increment = state => {
    this.setState(prevState => ({
        [state]: prevState[state] + 1,
    }))
  }
  
 countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }


  countPositiveFeedbackPercentage() {
    return (this.state.good / this.countTotalFeedback() * 100).toFixed();
  }
  

  render() {
    const options = Object.keys(this.state)
    const { good, neutral, bad } = this.state;

    return(
      <div className="div">
        <FeedbackOptions
            options={options}
            increment={this.increment}
          /> 
        {this.countTotalFeedback() > 0 ? 
          (<Statistics 
            good={good} 
            neutral={neutral} 
            bad={bad} 
            total={this.countTotalFeedback()} 
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />) : (<Notification message="There is no feedback" />)
        }
      </div>
    )
  }
}

export default App;