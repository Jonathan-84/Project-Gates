import React, {useState, createContext} from 'react';
import Systac from '../components/Systac.js';


export const AppContext = createContext();

export const AppProvider = props => {
    const [selectedDate, setSelectedDate] = useState(Systac);

    return(
        <AppContext.Provider value={{
            startDate:[selectedDate, setSelectedDate],
        }}>
        {props.children}
      </AppContext.Provider>
      );
    };
  