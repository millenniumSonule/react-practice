import React from 'react'
import Plp from './plp';
import data from './data.json'
const App = () => {
  return (
      <div className="container">
          
        <Plp data={data}/>   
      
      </div>
  )
}

export default App;