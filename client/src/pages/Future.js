import React from 'react';
//import Systac from '../components/Systac';
//import Implementation from '../components/Implementation';
import TargetDate from '../components/TargetDate';

// POst dem day deployment, unblock implementation. 
// Path starts here, then goes to Systac to unblock the functionality
//

function Future(){

  
    return (
        <>
        
        <h2 className="display-4 text-center m-3 border-bottom border-warning">Do We Have Time</h2>
        <p className="m-3 text-md-center text-sm-left"> Using this calculator,we can determine if there is enough 
          time to meet your target date. We will chart tentative deadlines and determine
          if we have time. You must start by selecting the potential launch date, then the average time 
        that it takes to implement the solution. Lastly, engage with your prospect 
        and gauge the average time needed for legal review. Watch those Deadlines!
        </p>
        <br></br>
        <br></br>

        <div className="col m-3">
          <h2 className="text-center">What's your client's target date?
          </h2>

        <div className="App mx-auto">
<br></br>
        <section className='vh-100'>
        {/*<Systac></Systac>*/}
        <TargetDate></TargetDate>
      </section>
    </div>
    </div>
      </>
    );
  
}

export default Future;