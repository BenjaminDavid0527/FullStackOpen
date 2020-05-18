import React, { useState } from 'react'
import Persons from './Persons'
import Filter from './Filter'
import PersonForm from './PersonForm'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-1234567' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ filter, setFilter] = useState('')
  
  const addPerson = (event) => {
    event.preventDefault()
    if (persons.some((person) => person.name === newName)) 
        window.alert(`${newName} is already added to the phonebook`)
    else {
        const newPerson = {
            name: newName,
            number: newNumber
        }    
        setPersons(persons.concat(newPerson))
        setNewName('')
        setNewNumber('')
    }
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    if (event.target.value === '') setNewNumber('')
    else if (event.target.value.match(/[A-Za-z]/)) return
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
      let newFilter = event.target.value
      setFilter(newFilter)
  }

  return (
    <div>
      <h2>Phonebook</h2>
        
      <Filter filter = {filter} onChange = {handleFilter} />

      <h3>add a new</h3>
      
      <PersonForm addPerson = {addPerson}
                  handlePersonChange = {handlePersonChange}
                  handleNumberChange = {handleNumberChange}
                  newName = {newName}
                  newNumber = {newNumber}
        />

      <h2>Numbers</h2>

      <Persons persons = {persons} filter = {filter} />
    </div>
  )
}

export default App
