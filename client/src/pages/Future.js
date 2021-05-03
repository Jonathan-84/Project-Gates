import $ from 'jquery';
import React, {useState} from 'react';
import moment from 'moment';


import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';



function Future(){

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
   var convertedDate = moment (date).format ('MM/DD/YYYY');
   $("#selected-date").text("Target Date: " + convertedDate);

   console.log(convertedDate);

   var convertedChoice = moment (convertedDate, 'MM/DD/YYYY')
   console.log(convertedChoice)

  var  timeUntil = moment (date).diff(moment(), 'days');
  console.log(timeUntil);
  if (timeUntil < 0) {
    alert("You must always look forward, not into the past! Please select a new date.")
  }
  else {
$("#time-until").text(timeUntil + " Days Until Implementation");
}

};
    return (
        <>
        <h2 className="display-4 text-center m-3 border-bottom border-warning">Do We Have Time</h2>
        <p className="m-3 text-md-center text-sm-left"> Using this calculator,we can determine if there is enough 
          time to meet your target date. We will chart tentative deadlines and determine
          if we have time. You must start by selecting the potential launch date, then the average time 
        that it takes to implement the solution. Lastly, engage with your prospect 
        and gauge the average time needed for legal review. Watch those Deadlines!
        </p>
        <br></br>
        <br></br>
    
        <div className="col m-3">
          <h2 className="text-center">What's your client's target date?
          </h2>

        <div className="App mx-auto">
<br></br>
<MuiPickersUtilsProvider className=' justify-content-center mx-auto' utils={DateFnsUtils}>

<KeyboardDatePicker
        placeholder="2018/10/10"
        value={selectedDate}
        onChange={date => handleDateChange(date)}
        format="MM/dd/yyyy"
      />
  
</MuiPickersUtilsProvider>
</div>
</div>

          <p id="selected-date" className="text-center"></p>
<p id="time-until" className= "text-center"></p> 
          
          <br></br>
          <p className="text-center">How long is the Implementation?</p>
        <form className='row justify-content-around d-flex flex-column flex-lg-row align-content-center' onSubmit={this.handleSubmit}>
          <label>
            <select value={this.state.value} onChange={this.handleChange}>
            <option value="0"></option>
              <option value="30">1 Month</option>
              <option value="60">2 Months</option>
              <option value="90">3 Months</option>
              <option value="180">6 Months</option>
              <option value="270">9 Months</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div className="col">
        <p className="text-center" id='impl-deadline'></p>
          </div>
        </>
    );
};
        

export default Future;