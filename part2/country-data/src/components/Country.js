import React, { useState } from  'react'
import Details from './Details'

const Country = ({country}) => {
  const [display, setDisplay] = useState(false)
  const whenPressed = () => {
      setDisplay(!display)
  }
  
  return (
    <div>
      {country.name} <button onClick = {whenPressed}>
          {!display ? 'show' : 'hide'}
      </button>
      <div>
          {!display ? <></> : <Details country = {country} />}
      </div>
    </div>
  )
}

export default Country