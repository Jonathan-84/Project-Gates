// Need to update and see if this is form and be an extension from them.

import React from 'react'

class Imp2 extends React.Component{
    startDate = this.props.selectedDate

    constructor(){
        super();
        
        this.state = {
            length:null,
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {

        this.setState({
            length: event.target.value
        });
    }

    submit(){
        console.log(this.state)
    
    }

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                       
                        <h3>Bootstrap Select Box #prereact</h3><br />
                        
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label></label>
                                    <select className="form-control" name="length" onChange={this.handleInputChange}>
                                    <option value="0"></option>
                  <option value="30">1 Month</option>
                  <option value="60">2 Months</option>
                  <option value="90">3 Months</option>
                  <option value="180">6 Months</option>
                  <option value="270">9 Months</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="col-md-12 text-center">
                                    <button type="submit" className="btn btn-primary" onClick={()=>this.submit()}>Submit</button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>

        )  
    }
}

export default Imp2;