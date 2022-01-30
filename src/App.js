import React, { PureComponent } from 'react';
import Section from "./components/Section/Section";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Statistics from "./components/Statistics/Statistics";
import Notification from "./components/Notification/Notification";

class App extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0
    }
  }
  
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback() || 1;
    return Math.round((good / total) * 100);
  };

  onHandleFeedback = event => {
    const key = event.target.name;
    this.setState(prevState => {
      return { [key]: prevState[key] + 1 };
    });
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions 
            options={['good', 'neutral', 'bad']}
            onClick={this.onHandleFeedback}
          />
        </Section>
        <Section title="Statistics">
        {this.countTotalFeedback() ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
          ) : (
            <Notification message="There is no feedback"/>
          )}
        </Section>
      </>
    )
  }
};

export default App;