import React from "react";
import {
  RangeDatePicker,
  SingleDatePicker,
} from "react-google-flight-datepicker";
import "react-google-flight-datepicker/dist/main.css";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <SingleDatePicker startDate={new Date(2020, 0, 15)} />

      <h2>RangeDatePicker with minDate and maxDate</h2>
      <RangeDatePicker
        startDate={new Date(2020, 0, 15)}
        endDate={new Date(2020, 1, 8)}
        minDate={new Date(2020, 0, 1)}
        maxDate={new Date(2020, 1, 5)}
      />
      <br />
      <h2>RangeDatePicker with custom date format</h2>
      <RangeDatePicker
        startDate={new Date(2020, 0, 15)}
        endDate={new Date(2020, 1, 1)}
        dateFormat="D"
      />
      <h2>RangeDatePicker with custom month format</h2>
      <RangeDatePicker
        startDate={new Date(2020, 0, 15)}
        endDate={new Date(2020, 1, 1)}
        monthFormat="MMMM"
      />
      <br />

      <h2>Disabled RangeDatePicker</h2>
      <RangeDatePicker
        startDate={new Date(2020, 0, 15)}
        endDate={new Date(2020, 1, 1)}
        disabled
      />
      <br />

      <h2>Custom placeholder</h2>
      <RangeDatePicker
        startDate={new Date(2020, 0, 15)}
        endDate={new Date(2020, 1, 1)}
        startDatePlaceholder="From"
        endDatePlaceholder="To"
      />
      <br />

      <h2>Highlight today</h2>
      <RangeDatePicker
        startDate={new Date(2020, 0, 15)}
        endDate={new Date(2020, 1, 1)}
        startDatePlaceholder="From"
        endDatePlaceholder="To"
        highlightToday
      />
      <br />
    </div>
  );
}
