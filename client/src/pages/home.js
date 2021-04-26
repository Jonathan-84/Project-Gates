import React from 'react';

//import { useQuery } from '@apollo/react-hooks';
//import { GET_ME } from '../utils/queries';

const Home = () => {
    // use useQuery hook to make query request
  //const { loading, data } = useQuery(GET_ME);


    return (
      <>
      <h1 className="display-4 text-center border-bottom border-warning">Purpose</h1>
      <p className="text-md-center text-sm-left m-3"> The goal of any individual in customer acquisitions is to 
        eliminate friction points. Time is often one of the greatest friction points. Why is that?
        Well, as I always say, "you don't know what you don't know".
        This tool was built to bring your discussions into reality. Do you really have as much
        time as you think? Or should we start discussing our solution now? What deadlines
        do we need to set in order to meet your target? Let's make sure we are on the same page!
        </p>
      </>
    );
  }; 
  export default Home;

