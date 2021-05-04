import React from 'react';

import Systac from '../components/Systac';
//import Implementation from '../components/Implementation';
import Impl2 from '../components/Impl2.js';
import {AppProvider} from '../utils/AppContext.js';


function Future(){

    return (
        <>
       
       <AppProvider>
        <section className='vh-100'>
       
        <Systac></Systac>
        <Impl2></Impl2>
        
      {/*<Implementation></Implementation>*/}
      </section>
      </AppProvider>
      
      </>
    );
  
}

export default Future;