import $ from 'jquery';
import moment from 'moment';


const fromNow =() => {

    // Moment.js to capture and post the current date
var currentDate = moment().format('MM/DD/YYYY');
$("#todays-date").text(' Today: ' +  currentDate);
  console.log(currentDate);


    
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
              <p id='todays-date' class="custom-text text-center fs-2 fw-bold"></p>
           <h4>If you signed today, when is the earliest date that our solution would be implemented? </h4> 
            <div className='row justify-content-around d-flex flex-column flex-lg-row align-content-center'>
                <div className="col-6 form-group">
                  
            </div>
            <div>
              <div className="col-6">
              <p id='future-date'></p>
                </div>
              </div>
            </div>
            </div>
          </div>
          </div>
            </>
        
    
        );
     
    
};
export default fromNow;
    