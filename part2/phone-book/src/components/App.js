import React, { useState, useEffect } from 'react'
import Persons from './Persons'
import Filter from './Filter'
import PersonForm from './PersonForm'
import personService from '../services/persons'

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ filter, setFilter] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(data => setPersons(data))
  }, [])
  
  const addPerson = (event) => {
    event.preventDefault()
    let individual = persons.find(person => person.name === newName)

    if (individual && individual.number !== newNumber) {
      if (window.confirm(`${individual.name} is already added to the phonebook, replace the old number with a new one?`)) {
        const newPerson = {...individual, number: newNumber}
        personService
          .update(individual.id, newPerson)
          .then(returnedPerson => {
            setPersons(persons.map(person => 
              person.id !== individual.id ? person : returnedPerson))
          })
      }
    }
    else {
        const newId = persons.length + 1
        const newPerson = {
            name: newName,
            number: newNumber,
            id: newId
        }    
        personService
          .create(newPerson)
          .then(data => {
            setPersons(persons.concat(data))
            setNewName('')
            setNewNumber('')
          })
    }
  }

  const deletePerson = (id) => {
    const name = persons.find(person => person.id === id).name
    if (window.confirm(`Delete ${name}?`)) {
      personService
        .deleteId(id)
        .then(() => personService
                    .getAll()
                    .then(data => setPersons(data)))
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

      <Persons persons = {persons} filter = {filter} 
               deletePerson = {deletePerson} 
      />
    </div>
  )
}

export default App
