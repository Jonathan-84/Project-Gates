import React from 'react';
import TextField from '@material-ui/core/TextField';
import 'bootstrap/dist/css/bootstrap.min.css';
  
const App = () => {
  
  return (
    <div style={{
      margin: 'auto',
      display: 'block',
      width: 'fit-content'
    }}>
      <h3>How to create Date Picker in ReactJS?</h3>
      <TextField
        id="date"
        label="Choose your Project Start Date"
        type="date"
        defaultValue={new Date().getDate()+"-"+(new Date().getMonth()+1)+"-"+new Date().getFullYear()}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
  );
}
  
export default App;