//import $ from 'jquery';
import moment from 'moment';
import Form from 'react-bootstrap/Form';
import Moment from 'react-moment';



const fromNow =() => {

    // Moment.js to capture and post the current date
var currentDate = moment()

var currentDate1 = moment().format('MM/DD/YYYY');
  console.log(currentDate1);

 // Capture the user input for the forward looking date (now + implementation time) 

 // let install= document.getElementById("implementation-time");
  //let options = install.value;
  //console.log(options);

  

    
        return (
<>
<h2 className="display-4 text-center border-bottom border-warning">Let's Look Ahead</h2> 
      <p className="m-3 text-md-center text-sm-left"> Projects take planning, solutions require tailoring, and 
        resources need to be aligned. Let's just look at the average time between a signed agreement
        and an implemented solution.
        By selecting the average time until implementation, we can project the earliest possible 
        go-live date.
      </p>
      <div className="row m-3">
        <div className="m-3 d-inline-flex d-flex w-50 mx-auto">
            <div className="container col text-center border align-content-center">
              <Moment className="custom-text text-center fs-2 fw-bold" format='MM/DD/YYYY'>{currentDate}</Moment>
              <br/>
            If you signed today, when is the earliest date that our solution would be implemented?
            <br/>
            <div className='row justify-content-around d-flex flex-column flex-lg-row align-content-center'>
            <Form>
  <Form.Group className="col form-group" controlId="exampleForm.SelectCustomSizeLg">
    <Form.Label className='custom-text text-center d-inline col-sm'></Form.Label>
    <Form.Control  ID="implementTime" as="select" size="lg" custom>
      <option></option>
      <option value="30">1 month</option>
      <option value= "60">2 months</option>
      <option value="90">3 months</option>
      <option value="180">6 months</option>
      <option value="270">9 months</option>
    </Form.Control>
  </Form.Group>
</Form>
              <div className="col-6">
              <p id='future-date'></p>
                </div>
              </div>
            </div>
            </div>
          </div>

  </>
        
    
        );
     
    
};
export default fromNow;
    