import React from 'react';

//import { useQuery } from '@apollo/react-hooks';
//import { GET_ME } from '../utils/queries';

const Home = () => {
    // use useQuery hook to make query request
  //const { loading, data } = useQuery(GET_ME);


    return (
      <>
      <h1 className="display-4 text-center border-bottom border-warning">Purpose</h1>
      <p className="text-md-center text-sm-left m-3"> 2 of the most common friction points in the acquistion process
      are: Time and Money. While Exley cannot help you with Money, Exley can eliminate the friction cause by
      Time. Exley is a light tool to help keep you and your prospects on schedule.
        </p>
      </>
    );
  }; 
  export default Home;

