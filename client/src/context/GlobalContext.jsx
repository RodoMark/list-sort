import React, { createContext, useState } from 'react'

export const GlobalContext = createContext()

const GlobalContextProvider = (props) => {
  
  const [list, setList] = useState([70, 54, 21, 60, 7, 12, 82, 37, 45, 63, 80, 14])
  
  const [speed, setSpeed] = useState(700)
  const [method, setMethod] = useState('BUBBLE')

  const data = {
    stateList: [list, setList],
    stateSpeed: [speed, setSpeed],
    stateMethod: [method, setMethod]
  }

  return (
    <GlobalContext.Provider value={data}>
      {props.children}
    </GlobalContext.Provider>
  );
}

export default GlobalContextProvider;