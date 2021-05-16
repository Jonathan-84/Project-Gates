import $ from 'jquery';
import moment from 'moment';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import React, {useState} from 'react';
//import selectedDate from "../components/Datepicker";
import Legal from './Legal';



const Implementation = (props)=> {
  
const startDate = props.selectedDate  
console.log (startDate)

///now properly pulls the selected Date--- need to get it to work with the moment math


    const [selectedOption, setSelectedOption] = useState('');
    const [implDeadline, setImplDeadline] = useState('');
   
    const handleSelect =(e)=> {
      setSelectedOption(e);
    console.log(selectedOption)
    
   // gives the Implength and not the date
    console.log(implDeadline)

  

      //this capability now works- using Momentjs it subtracts the dropdown select from the date picker selection.
    let minusImplementation = moment(startDate).subtract(selectedOption, 'days').format('MM/DD/YYYY');
    //$("#impl-deadline").text(' Your Deadline for starting the Implementation: ' +  minusImplementation);

  const convertedImpl= moment(minusImplementation, 'MM/DD/YYYY')
  setImplDeadline(convertedImpl)


   const ImplBuffer = convertedImpl.diff(moment(), 'days');
    console.log(ImplBuffer);
      if
      (ImplBuffer < 0) {
        alert("We can't do it Captain! We need more time!");
      }
      else {
    //$("#time-until2").text(timeUntil + " Days");
    $("#impl-deadline").text(' Your Deadline for starting the Implementation: ' +  minusImplementation);
   return <Legal></Legal>
    //return ImplBuffer;
      }
    }
    


        return (
            <>
            <p className="text-center">How long is the Implementation?</p>
            <form className='row justify-content-around d-flex flex-column flex-lg-row align-content-center'>
         
            <DropdownButton
      alignRight
      title="Implementation Length"
      id="dropdown-menu-align-right"
      value={selectedOption} 
      onSelect={handleSelect}
    
        >
              <Dropdown.Item eventKey="30">1 Month</Dropdown.Item>
              <Dropdown.Item eventKey="60">2 Months</Dropdown.Item>
              <Dropdown.Item eventKey="90">3 Months</Dropdown.Item>
              <Dropdown.Item eventKey="180">6 Months</Dropdown.Item>
              <Dropdown.Item eventKey="270">9 Months</Dropdown.Item>

      </DropdownButton>
  
     {/* <h4> You Selected {selectedOption}</h4>
         
                <select value={selectedOption} defaultValue={selectedOption} onChange= {(event) => handleSubmit(event.target.value)}>
                <option value="0"></option>
                  <option value="30">1 Month</option>
                  <option value="60">2 Months</option>
                  <option value="90">3 Months</option>
                  <option value="180">6 Months</option>
                  <option value="270">9 Months</option>
                </select>
          
         <input type="submit" value="Submit" />*/}
            </form>

          <div className="col">
            <p className="text-center" id='impl-deadline'></p>
              </div>

              <Legal implDeadline={implDeadline} />
              </>
          );

};


export default Implementation