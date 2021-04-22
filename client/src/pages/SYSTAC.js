import $ from 'jquery';
import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';

const SYSTAC =() => {

    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <DatePicker
      label="Basic example"
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
      }}
      renderInput={(params) => <TextField {...params} />}
    />
  </LocalizationProvider>


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


export default Systac;
