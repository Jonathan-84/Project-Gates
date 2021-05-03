import $ from 'jquery';
import moment from 'moment';
//import Form from 'react-bootstrap/Form';
//import Moment from 'react-moment';
import React, {useState, useContext} from 'react';
import { AppContext } from '../utils/AppContext';


const Implementation = ()=> {
    const startDate = useContext(AppContext)
    console.log(startDate);

    const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = e => {
        setSelectedOption(e);
      

    let minusImplementation = moment(this.startDate).subtract(selectedOption, 'days').format('MM/DD/YYYY');
console.log(startDate)

  console.log(minusImplementation)
  $("#impl-deadline").text(' Your Deadline for starting the Implementation: ' +  minusImplementation);
  }
    


        return (
            <>
            <p className="text-center">How long is the Implementation?</p>
            <form className='row justify-content-around d-flex flex-column flex-lg-row align-content-center' onChange= {handleChange}>
              <label>
                <select value={selectedOption} onChange={handleChange}>
                <option value="0"></option>
                  <option value="30">1 Month</option>
                  <option value="60">2 Months</option>
                  <option value="90">3 Months</option>
                  <option value="180">6 Months</option>
                  <option value="270">9 Months</option>
                </select>
              </label>
            </form>
            <div className="col">
            <p className="text-center" id='impl-deadline'></p>
              </div>
              </>
          );

};


export default Implementation