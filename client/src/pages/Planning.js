import React from 'react';
import PhaseOne from '../components/Planning/PhaseOne';

// POst dem day deployment, unblock implementation. 
// Path starts here, then goes to Systac to unblock the functionality
//

function Planning(){

  
    return (
        <>
        
        <h2 className="display-4 text-center m-3 border-bottom border-warning">Let's Plan This</h2>
        <p className="m-3 text-md-center text-sm-left"> There are phases of the acquisition process that require
        multi-step plans. That could be a pre-RFP phase or even the implementation (product delivery) phase.
        Using this tool you will be able to capture the Phase Name and the Deadline for completion.
        </p>
        <br></br>
        <br></br>
        <div className="container">
        <div className='row'>
        <div className=" col-6 mx-auto">
          <h2 className="text-center">Phase Name</h2>
          </div>
          <div className=" col-6 mx-auto">
              <h2 className="text-center">Deadline</h2>
              </div>
              </div>
              </div>
        
<br></br>
        <section className='vh-100'>
     {/*   <PhaseOne></PhaseOne> */}
      </section>
      </>
    );
  
}

export default Planning;