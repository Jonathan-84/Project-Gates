import $ from 'jquery';
import moment from 'moment';
//import Form from 'react-bootstrap/Form';
//import Moment from 'react-moment';
import React, {useState, useContext} from 'react';
import { AppContext } from '../utils/AppContext';


const Implementation = ()=> {
  
  const start = useContext(AppContext)
console.log(start);


    const [selectedOption, setSelectedOption] = useState(null);

    const handleSubmit = e => {
        setSelectedOption(e);
      

    let minusImplementation = moment(start.selectedDate).subtract(selectedOption, 'days').format('MM/DD/YYYY');
console.log(start.selectedDate)

  console.log(minusImplementation)
  $("#impl-deadline").text(' Your Deadline for starting the Implementation: ' +  minusImplementation);
  }
    


        return (
            <>
            <p className="text-center">How long is the Implementation?</p>
            <form className='row justify-content-around d-flex flex-column flex-lg-row align-content-center' onSubmit= {handleSubmit}>
              <label>
                <select value={selectedOption}>
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


export default Implementation