import React from 'react';
import moment from 'moment';
import { GET_ME } from '../utils/queries';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';


const Welcome = () => {


    const { username: userParam } = useParams();
  
    const { loading, data } = useQuery(GET_ME, {
      variables: { username: userParam }
    });

  
    const me = data?.me || {};

    if (loading) {
      return <div>Loading...</div>;
    }
      
    const greetingText = () => {
      const now = moment()
      const currentHour = now.local().hour()
      console.log(currentHour)
      if (currentHour >= 12 && currentHour <=17) return "Good Afternoon"
      else if (currentHour >= 18) return "Good Evening"
      else return "Good Morning"
    }

    return (
      <>
      <h1 className="display-4 text-center border-bottom border-warning">Welcome Back</h1>
      <p className="text-md-center text-sm-left m-3"> {greetingText()} {me.username}, what can Exley do to help you?

        </p>
      </>
    );
  }; 
  export default Welcome;
