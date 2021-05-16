import $ from 'jquery';
import moment from 'moment';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import React, {useState} from 'react';
//import selectedDate from "../components/Datepicker";



const Legal = (props)=> {
  
const implDeadline = props.implDeadline
console.log (implDeadline)

///now properly pulls the selected Date--- need to get it to work with the moment math



    const [selectedLegal, setSelectedLegal] = useState('');

    const handleLegal =(e)=> {
        setSelectedLegal(e);
      console.log(selectedLegal)

      //this capability now works- using Momentjs it subtracts the dropdown select from the date picker selection.
    let minusLegalReview = moment(implDeadline).subtract(selectedLegal, 'days').format('MM/DD/YYYY');
    $("#legal-deadline").text(' Your Deadline for completing Legal Review: ' +  minusLegalReview);

  const convertedLReview= moment(minusLegalReview, 'MM/DD/YYYY')

   const LRBuffer = convertedLReview.diff(moment(), 'days');
    console.log(LRBuffer);
      if (LRBuffer < 0) {
        alert("We can't do it Captain! We need more time!");
      }
      else {
    //$("#time-until2").text(timeUntil + " Days");
    console.log(LRBuffer);
    return LRBuffer;
      }
    }
    


        return (
            <>
            <p className="text-center">How long is the Legal Review?</p>
            <form className='row justify-content-around d-flex flex-column flex-lg-row align-content-center'>
         
            <DropdownButton
      alignRight
      title="Legal Review Length"
      id="dropdown-menu-align-right"
      onSelect={handleLegal}
    
        >
              <Dropdown.Item eventKey="14">2 Weeks</Dropdown.Item>
              <Dropdown.Item eventKey="30">1 Month</Dropdown.Item>
              <Dropdown.Item eventKey="60">2 Months</Dropdown.Item>
              <Dropdown.Item eventKey="90">3 Months</Dropdown.Item>
              <Dropdown.Item eventKey="180">6 Months</Dropdown.Item>

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
            <p className="text-center font-weight-bold" id='legal-deadline'></p>
              </div>
              <br></br>
              </>
          );

};


export default Legal