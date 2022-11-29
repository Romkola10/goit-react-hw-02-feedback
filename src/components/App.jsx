import React, { Component } from "react";
import { FeedbackOptions } from "./Feedback/Buttons";
import { Statistics } from "./Feedback/Statistics";
import { Notification } from "./Feedback/Notification";



class App extends Component {

  static defaultProps = {
    initialValue:0,
  }

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    visible: false,
  };

  increment = (event) => {
    this.setState(prevState => ({
        visible: true,
        [event.target.name]: prevState[event.target.name] + 1,
    }))
  }

  render() {
    return(
      <div className="div">
        <FeedbackOptions onIncrement={this.increment} />  
        {this.state.visible && <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} />}
        {this.state.visible || <Notification />}
      </div>
    )
  }
}

export default App;