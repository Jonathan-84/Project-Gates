import $ from 'jquery';
import moment from 'moment';
//import Form from 'react-bootstrap/Form';
import React, {Component} from 'react';
import Legal from './Legal.js';



class Implementation extends Component {
 

  constructor(props) {
    super(props);
    this.state = {value: '',
    newDate: ""
  };


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

 
  
  handleChange(event) {
    this.setState({value: event.target.value
    });
  
  }

  handleSubmit(event) {
const selectedImp = this.state.value;

const startDate= this.props.selectedDate;




      //this capability now works- using Momentjs it subtracts the dropdown select from the date picker selection.
      let minusImplementation = moment(startDate).subtract(selectedImp, 'days').format('MM/DD/YYYY');
      //alert(minusImplementation)
  
      this.setState({newDate:minusImplementation});
      
    const convertedImpl= moment(minusImplementation, 'MM/DD/YYYY')
    //setImplDeadline(convertedImpl)
  
  
     const ImplBuffer = convertedImpl.diff(moment(), 'days');
        if
        (ImplBuffer < 0) {
          alert("We can't do it Captain! We need more time!");
        }
        else {
      //$("#time-until2").text(timeUntil + " Days");
      $("#impl-deadline").text(' Your Deadline for starting the Implementation: ' +  minusImplementation);
     
      //return ImplBuffer;
      event.preventDefault();

  }
  }


  render() {


    return (
      <>
            <p className="text-center">How long is the Implementation?</p>
         
      <form className='row justify-content-around d-flex flex-column flex-lg-row align-content-center' onSubmit={this.handleSubmit}>
        <label>
          <select value={this.state.value} onChange={this.handleChange} className="border border-warning">
          <option value="0"></option>
            <option value="30">1 Month</option>
            <option value="60">2 Months</option>
            <option value="90">3 Months</option>
            <option value="180">6 Months</option>
            <option value="270">9 Months</option>
          </select>
        </label>
        <input type="submit" className="bg-warning" value="Submit" />
      </form>
      
      <div className="col mx=auto justify-content-center">
      <p className="text-center font-weight-bold" id='impl-deadline'></p>
                </div>
      <br></br>
      <Legal {...this.state}/>


            
      </>
    );
}
}

export default Implementation;
    