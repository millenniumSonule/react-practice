import React, { useContext } from 'react'
import { nameContext, companyContext } from './App';

const C = () => {
    const name = useContext(nameContext);
    const company = useContext(companyContext);
  return (
    <div>
        <p>Name: {name}</p> {/* Displaying the name */}
        <p>Company: {company}</p> {/* Displaying the company */}
    </div>
  )
}

export default C;