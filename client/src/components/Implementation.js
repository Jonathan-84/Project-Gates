import $ from 'jquery';
import moment from 'moment';
//import Form from 'react-bootstrap/Form';
//import Moment from 'react-moment';
import React from 'react';
import convertedDate from './Systac';


class Implementation extends React.Component {

    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
  var implLength = this.state.value;
  let minusImplementation = moment({convertedDate}).subtract(implLength, 'days').format('MM/DD/YYYY');

  console.log(minusImplementation)
  $("#impl-deadline").text(' Your Deadline for starting the Implementation: ' +  minusImplementation);
  
      event.preventDefault();
    }
  

  
    render() {
      return (
        <>
        <p className="text-center">How long is the Implementation?</p>
        <form className='row justify-content-around d-flex flex-column flex-lg-row align-content-center' onSubmit={this.handleSubmit}>
          <label>
            <select value={this.state.value} onChange={this.handleChange}>
            <option value="0"></option>
              <option value="30">1 Month</option>
              <option value="60">2 Months</option>
              <option value="90">3 Months</option>
              <option value="180">6 Months</option>
              <option value="270">9 Months</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div className="col-6">
        <p className="text-center" id='impl-deadline'></p>
          </div>

          </>
      );
    }
  };
      
export default Implementation;