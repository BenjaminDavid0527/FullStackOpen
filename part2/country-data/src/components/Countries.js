import React from 'react'
import Country from './Country'
import Details from './Details'

const Countries = ({ countries, filter}) => {


  const result = countries.filter((country) => country.name.toLowerCase().includes(filter.toLowerCase()))


  if (result.length > 10) {
      return <p>Too many matches, specify another filter</p>
  }
  else if (result.length > 1 ) {
    return result.map((country) => <Country key = {country.numericCode} country = {country}/>)
  }
  else  if (result.length !== 0 ) return (
        <Details country = {result[0]}/>
  )

  else return <p>No country found!</p>
}


export default Countries