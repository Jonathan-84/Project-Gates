import React from 'react';
import fromNow from '../images/fromNow.jpg';
import Deadlines from '../images/Deadlines.jpg';



const Home = () => {



    return (
      <>
      <h1 className="display-4 text-center border-bottom border-warning">Purpose</h1>
      <p className="text-md-center text-sm-left m-3"> The most common friction points with the customer acquistion process
      are: Time and Budget. While Exley cannot help you with Budget, Exley can help you eliminate the friction caused by
      Time. Exley is a light tool to help both organizations transparently establish deadlines
      to agree on.
        </p>
<br></br>
<div className='container'>
        <div class="row">
    <div class="col-sm">
        <img className="img-fluid rounded border border-info " src={fromNow} alt="fromNow feature" />
        </div>
        <div class="col-sm d-flex align-items-center">
          <p> Using the From Today feature, you could project the earliest day that the solution would be implemented,
            if an agreement was signed today.
          </p>
        </div>
        </div>
        <br></br>
        <br></br>
        <div class="row">
    <div class="col-sm">
        <img className="img-fluid rounded border border-info" src={Deadlines} alt="Deadlines Feature" />
        </div>
        <div class="col-sm d-flex align-items-center">
        <p> Using the Deadlines feature, identify your client's ideal start date then reverse the acqusition 
          steps frome there. In particular, let's determine deadlines for the Implementation to begin and the 
          Legal Review to end.
          </p>
        </div>
        </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
      
      </>
    );
  }; 
  export default Home;

