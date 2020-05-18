import React, { useState } from 'react'
import Persons from './Persons'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')
  
  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
        name: newName
    }
    if (persons.some((person) => person.name === newName)) 
        window.alert(`${newName} is already added to the phonebook`)
    else {
        setPersons(persons.concat(newPerson))
        setNewName('')
    }
  }

  const handlePersonChange = (event) => {
      setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
                    value = {newName} 
                    onChange={handlePersonChange}
                 />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons persons = {persons} />
    </div>
  )
}

export default App
