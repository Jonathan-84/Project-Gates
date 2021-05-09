import React, {useState} from 'react';
import $ from 'jquery';
import moment from 'moment';


import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import Implementation from './Implementation';


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
 
<MuiPickersUtilsProvider className=' justify-content-center mx-auto' utils={DateFnsUtils}>

<KeyboardDatePicker
        placeholder="2018/10/10"
        value={selectedDate}
        onChange={date => handleDateChange(date)}
        format="MM/dd/yyyy"
      />
  
</MuiPickersUtilsProvider>


<p id="selected-date" className="text-center"></p>
<p id="time-until" className= "text-center"></p> 
          
          <br></br>
<Implementation selectedDate={selectedDate}/>

          </>
    )
}




export default TargetDate;