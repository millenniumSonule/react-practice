import React from 'react'
import Plp from './plp';
import data from './data.json'
const App = () => {
  return (
      <div className="container">
          
          <Plp data={data} />  {/* No need for double curly braces */}
      
      </div>
  )
}

export default App;