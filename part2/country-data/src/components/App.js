import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Search from './Search'
import Countries from './Countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
        })
}, [])

  const handleFilter = (event) => (
    setFilter(event.target.value)
  )

  return (
    <div>
      <Search handleChange = {handleFilter}
              value = {filter} />
      <Countries countries = {countries} 
                 filter = {filter}/>
    </div>
  )

}






export default App