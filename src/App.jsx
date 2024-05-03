import React, { createContext } from 'react'
import ComponentA from './a'

const nameContext = createContext();
const companyContext = createContext();

const App = () => {

  const name = "Anshuman";
  const company = "TCS"

  return (
    <div>
      <nameContext.Provider value={name}>
        <companyContext.Provider value={company}>
          <ComponentA />
        </companyContext.Provider>
      </nameContext.Provider> 
    </div>
  )
}

export default App;
export { nameContext, companyContext };