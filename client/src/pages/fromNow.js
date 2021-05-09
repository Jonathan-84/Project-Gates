import $ from 'jquery';
import moment from 'moment';
//import Form from 'react-bootstrap/Form';
import Moment from 'react-moment';
import React from 'react';

var currentDate = moment()

var currentDate1 = moment().format('MM/DD/YYYY');
  console.log(currentDate1);

class fromNow extends React.Component {

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
console.log(this.state.value);
let deadline = moment(new Date()).add(this.state.value, 'days').format('MM/DD/YYYY');
console.log(deadline)
$("#future-date").text(' Earliest Implementation Date: ' +  deadline);


    event.preventDefault();
  }

/*   fromNow =() => {
    var currentDate = moment()

var currentDate1 = moment().format('MM/DD/YYYY');
  console.log(currentDate1);
  }
  */


  render() {
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
            <br />
              <Moment className="custom-text text-center fs-2 fw-bold" format='MM/DD/YYYY'>{currentDate}</Moment>
              <br />
         <p> If you signed today, when is the earliest date that our solution would be implemented? </p>
         <br />
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
      <br/>
      <div className="col mx=auto justify-content-center">
              <p id='future-date'></p>
                </div>
      </div>
      </div>
      </div>
      <br></br>
      <br></br>

            
      </>
    );
  }
}

export default fromNow;
    