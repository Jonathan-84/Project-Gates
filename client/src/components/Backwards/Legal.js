import $ from 'jquery';
import moment from 'moment';
//import Form from 'react-bootstrap/Form';
import React, {Component} from 'react';



class Legal extends Component {
 

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
const selectedLR = this.state.value;
//alert(selectedLR)

const afterImpl= this.props.newDate;
//alert(afterImpl)



      //this capability now works- using Momentjs it subtracts the dropdown select from the date picker selection.
      let minusLR = moment(afterImpl).subtract(selectedLR, 'days').format('MM/DD/YYYY');
      //alert(minusLR)
  
    const convertedImpl= moment(minusLR, 'MM/DD/YYYY')
    //setImplDeadline(convertedImpl)
  
  
     const legalBuffer = convertedImpl.diff(moment(), 'days');
  // alert(legalBuffer);
        if
        (legalBuffer < 0) {
          alert("We can't do it Captain! We need more time!");
        }
        else {
      //$("#time-until2").text(timeUntil + " Days");
      $("#LR-deadline").text(' Your Deadline for having the Legal Review completed: ' +  minusLR);
     
      //return ImplBuffer;
      event.preventDefault();

  }
  }


  render() {


    return (
      <>
            <p className="text-center">How long is the Legal Review?</p>
         
      <form className='row justify-content-around d-flex flex-column flex-lg-row align-content-center' onSubmit={this.handleSubmit}>
        <label>
          <select value={this.state.value} onChange={this.handleChange} className="border border-warning">
          <option value="0"></option>
          <option value="14">2 Weeks</option>
            <option value="30">1 Month</option>
            <option value="60">2 Months</option>
            <option value="90">3 Months</option>
            <option value="180">6 Months</option>
           
          </select>
        </label>
        <input type="submit" className="bg-warning" value="Submit" />
      </form>
      
      <div className="col mx=auto justify-content-center">
      <p className="text-center font-weight-bold" id='LR-deadline'></p>
                </div>
      <br></br>


            
      </>
    );
}
}

export default Legal;
    