//import $ from 'jquery';
import React, {useState} from 'react';
//import TextField from '@material-ui/core/TextField';

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';

const Systac =() => {

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    console.log(date);
    setSelectedDate(date);
  };

  
    return (
        <>

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
    label="Material Date Picker"
    variant="dialog"
    value={selectedDate}
    onChange={handleDateChange}
  />
  
</MuiPickersUtilsProvider>
</div>
</div>


        </>
    );
};




export default Systac;
