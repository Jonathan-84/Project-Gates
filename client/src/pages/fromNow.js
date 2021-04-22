import $ from 'jquery';
import React from 'react';
import moment from 'moment';
import Moment from 'react-moment';

class fromNow extends Component {

    // Moment.js to capture and post the current date
    var currentDate = moment().format('MM/DD/YYYY');
    $("#todays-date").text(' Today: ' +  currentDate);
      console.log(currentDate);
      
     // Capture the user input for the forward looking date (now + implementation time) 
    function implementTime() {
    let install= document.getElementById("implementation-time");
    let options = install.value;
    console.log(options);
    
    // Use moment.js to do the basic math of adding implementation time to the current date.
    let deadline = moment(new Date()).add(options, 'days').format('MM/DD/YYYY');
    $("#future-date").text(' Earliest Implementation Date: ' +  deadline);
    console.log(deadline);
    }
    // Use Moment.js to create the picker
    $( function() {
        $( "#datepicker" ).datepicker({
          showOtherMonths: true,
          selectOtherMonths: true,
          showButtonPanel: true
        });
      } );
    
    //The logic behin the date select and the functions it triggers
    //The selected date from this dropdown
      function selectDate() {
        let chosenDate = $("#datepicker").val();
        console.log(chosenDate);
        $("#selected-date").text(chosenDate)
      // created the   date for MOment.js
        convertedChoice = moment (chosenDate, 'MM/DD/YYYY')
        console.log(convertedChoice)
        
        
        ///Using the converted date format I could use the moment.js capbility 
        // Comparing the number of days between the targted install date and now
        // Logic built in to avoid scheduling in the past
        timeUntil = convertedChoice.diff(moment(), 'days');
        console.log(timeUntil);
          if (timeUntil < 0) {
            alert("You must always look forward, not into the past! Please select a new date.")
          }
          else {
        $("#time-until").text(timeUntil + " Days");
        }
      }
    // This function takes the avg. implementation length
    //starting with capturing the inputs and values
      function backTrack() {
        let backImplementation= document.getElementById('reverse-impl');
        let implLength= backImplementation.value;
        console.log(implLength);
    
        // Using the date I subtracted the number of implementation days from the 
        //targeted install date
    
        let implDeadline= moment(convertedChoice).subtract(implLength, 'days').format('MM/DD/YYYY');
        $("#impl-deadline").text( "Stage Deadline: " + implDeadline)
        console.log (implDeadline);
    
    // Used thhis approach to convert the regular date format to a Moment.js compatible object
        convertedImpl = moment (implDeadline, 'MM/DD/YYYY')
        console.log(convertedImpl);
    // Similar to above, I took the Moment.js compatible format and subtracted days from now
    // At the moment, I will consider whether this number gets shown or not. 
    //The safeguards are in place to avoid implementation time that will exceed the amount of
    //days before implementation
        timeUntil2 = convertedImpl.diff(moment(), 'days');
        console.log(timeUntil2);
          if (timeUntil2 < 0) {
            alert("We can't do it Captain! We need more time!");
          }
          else {
        //$("#time-until2").text(timeUntil + " Days");
        console.log(timeUntil2);
        return timeUntil2;
        
      }
    }
    // Block until Mostly Built
    // replicating the formats above and lessons learned, I will subtract an input for
    //legal review... should I choose to add more phases to this, I'd likely model this format new function for legal
    
    function legalProcess() {
    let legalReview= document.getElementById('legal-review');
    let reviewLength= legalReview.value;
    console.log(reviewLength);
    
    
    // Using the date I subtracted the number of implementation days from the 
    //targeted install date
    
    let legalDeadline= moment(convertedImpl).subtract(reviewLength, 'days').format('MM/DD/YYYY');
    $("#legal-deadline").text("Stage Deadline: " + legalDeadline)
    console.log (legalDeadline);
    
    
    // Used thhis approach to convert the regular date format to a Moment.js compatible object
    convertedLgl = moment (legalDeadline, 'MM/DD/YYYY')
    console.log(convertedLgl);
    // Similar to above, I took the Moment.js compatible format and subtracted days from now
    // At the moment, I will consider whether this number gets shown or not. 
    //The safeguards are in place to avoid implementation time that will exceed the amount of
    //days before implementation
    timeLeft = convertedLgl.diff(moment(), 'days');
    console.log(timeLeft);
      if (timeLeft < 0) {
        alert("Oh my fur and whiskers! We're late, We're late, We're late! We're off schedule by " + timeLeft + " day(s)!");
      }
      else {
    $("#time-left").text("Only " + timeLeft + " Days to spare!");
    console.log(timeLeft);
    }
    };
    
    render() {
        return (
            <>
            <div className="input-group">
                <input type="search" 
                    className="form-control rounded searchbar" 
                    onChange={this.searchChangeHandler.bind(this)} placeholder="Search for movies..." 
                    aria-label="Search"
                    aria-describedby="search-addon" />
            <button type="button" className="btn btn-outline orange-button">Search</button>
            </div>
            <div className="Test">
                {this.state.rows}
            </div>
            </>
        );
    };
    

    
};
    export default fromNow;
    