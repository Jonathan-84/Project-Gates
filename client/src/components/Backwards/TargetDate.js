import React, {useState} from 'react';
import $ from 'jquery';
import moment from 'moment';


import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
/// Unblock Implementation- seeing if the click works better using the value testImpl sample
//import Implementation from './Implementation';
import Implementation from './Implementation.js';




var now = moment(new Date());
  console.log(now);


const TargetDate =(props) => {

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);

    var convertedDate = moment (date).format ('MM/DD/YYYY');
    $("#selected-date").text("Target Date: " + convertedDate);
 
    var convertedChoice = moment (convertedDate, 'MM/DD/YYYY')
    console.log(convertedChoice)
 
  
 
   var  timeUntil = moment (date).diff(now, 'days');
   console.log(timeUntil);
   if (timeUntil < 0) {
     alert("You must always look forward, not into the past! Please select a new date.")
   }
   else {
 $("#time-until").text("Targeted Start Date is " + timeUntil + " Day(s) Away");
 }
 
 
 
   };
  
    return (
  <>
 <div className='col-6 mx-auto'>
 
<MuiPickersUtilsProvider className='mx-auto' utils={DateFnsUtils}>

<KeyboardDatePicker
clearable
        placeholder="2018/10/10"
        value={selectedDate}
        onChange={date => handleDateChange(date)}
        format="MM/dd/yyyy"
      />
  
</MuiPickersUtilsProvider>


</div>
<br></br>
<br></br>

<p id="selected-date" className="text-center font-weight-bold"></p>
<p id="time-until" className= "text-center"></p> 

          
          <br></br>
          <Implementation selectedDate={selectedDate}/>
{/*<Implementation selectedDate={selectedDate}/>*/}


          </>
    )
}




export default TargetDate;