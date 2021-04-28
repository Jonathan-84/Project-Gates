import React from 'react';
import Systac from '../components/Systac';
//import Implementation from '../components/Implementation';

// POst dem day deployment, unblock implementation. 
// Path starts here, then goes to Systac to unblock the functionality
//

function Future(){
  
    return (
        <>
        <section className='vh-100'>
        <Systac></Systac>
        {/* <Implementation></Implementation>*/}
      </section>
    
      </>
    );
  
}

export default Future;