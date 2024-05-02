import React, { createContext } from 'react'
import ComponentA from './a'

const DetailContext = createContext();

const App = () => {
  
  const name = "Anshuman";
  const company = "TCS"

  return (
    <div>
      <ComponentA />
    </div>
  )
}

export default App;