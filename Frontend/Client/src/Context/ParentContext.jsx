import React, { useState } from 'react'
import { createContext } from 'react'
export const AppContext =createContext() 
const ParentContext = ({children}) => {
  const [newdata,setNewData]=useState([]);
  return <AppContext.Provider value={{setNewData,newdata}} >
   {children}
    </AppContext.Provider>
}

export default ParentContext
