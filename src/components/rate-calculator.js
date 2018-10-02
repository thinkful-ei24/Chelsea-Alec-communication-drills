import React from 'react';

import NumberInput from './number-input';
import Output from './output';

export default class RateCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dayRate: 50,
      hours: 10
    };
  }

  updateDay(dayRate) {
    this.setState({
      dayRate
    });
  }

  updateHours(hours) {
    this.setState({
      hours
    });
  }

  render() {
    const rate = this.state.dayRate / this.state.hours;
    return (
      <form>
        <NumberInput
          id="day-rate"
          label="Day rate"
          min={0}
          max={5000}
          value={this.state.dayRate}
          onChange={e => this.updateDay(e)}
        />
        <NumberInput
          id="hours"
          label="Hours"
          min={1}
          max={12}
          value={this.state.hours}
          onChange={e => this.updateHours(e)}
        />
        <Output id="hourly-rate" label="Hourly rate" value={rate.toFixed(2)} />
      </form>
    );
  }
}
