//import $ from 'jquery';
//import React, {useState} from 'react';
//import TextField from '@material-ui/core/TextField';
//import moment from 'moment';

//For purpose of deployed site, needed to block all of this, unblock all and remove coming soon line.
/*
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';

var now = moment(new Date());
  console.log(now);*/

const Systac =() => {
/*
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
   var convertedDate = moment (date).format ('MM/DD/YYYY');
   $("#selected-date").text("Target Date: " + convertedDate);

   console.log(convertedDate);

   var convertedChoice = moment (convertedDate, 'MM/DD/YYYY')
   console.log(convertedChoice)

  var  timeUntil = moment (date).diff(now, 'days');
  console.log(timeUntil);
  if (timeUntil < 0) {
    alert("You must always look forward, not into the past! Please select a new date.")
  }
  else {
$("#time-until").text(timeUntil + " Days Until Implementation");
}


  };

  */

  
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
      <h1 className="text-center" >Coming Soon!</h1>
      
{/*
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
<p id="time-until" className= "text-center"></p> */}
          
          <br></br>
        </>
    );
};




export default Systac;
