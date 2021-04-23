import $ from 'jquery';
import React, {useState} from 'react';
//import TextField from '@material-ui/core/TextField';
import moment from 'moment';

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';


const Systac =() => {

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
   var convertedDate = moment (date).format ('MM/DD/YYYY');
   $("#selected-date").text(convertedDate);


  };

  
    return (
        <>
<h2 class="display-4 text-center m-3 border-bottom border-warning">Do We Have Time</h2>
        <p className="m-3 text-md-center text-sm-left"> Using this calculator,we can determine if there is enough 
          time to meet your target date. We will chart tentative deadlines and determine
          if we have time. You must start by selecting the potential launch date, then the average time 
        that it takes to implement the solution. Lastly, engage with your prospect 
        and gauge the average time needed for legal review. Watch those Deadlines!
        </p>

        <div className="col m-3">
          <h2 className="text-center">What's your client's target date?
          </h2>

        <div className="App mx-auto">

<MuiPickersUtilsProvider className='mx-auto' utils={DateFnsUtils}>

<KeyboardDatePicker
        clearable
        value={selectedDate}
        placeholder="10/10/2018"
        onChange={date => handleDateChange(date)}
        minDate={new Date()}
        format="MM/dd/yyyy"
      />
  
</MuiPickersUtilsProvider>
</div>
</div>

          <p id="selected-date" class="text-center"></p>
          <p id="time-until" class= "text-center"></p>
          


        </>
    );
};




export default Systac;
