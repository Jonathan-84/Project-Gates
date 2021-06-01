import React from "react";

function PhaseOne() {
  const [state, setState] = React.useState({
    phaseName: "",
    phaseLength: ""
  });

  console.log (state)
    

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value

    });
  }

 
  return (
<>
    <div className="container">
    <form className='row'>
      <label className=" col-6 mx-auto">
        <input
          type="text"
          placeholder="Phase Name"
          value={state.phaseName}
          onChange={handleChange}
        />
      </label>
      <label className=" col-6 mx-auto">
        <input
          type="text"
          placeholder="Phase Length (days)"
          value={state.phaseLength}
          onChange={handleChange}
      />
      </label>
    </form>
    </div>
    </>
  );
}

export default PhaseOne;