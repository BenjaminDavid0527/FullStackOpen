import React from 'react'
import Person from './Person'

const Persons = (props) => {
    let persons = props.persons
    if (props.filter !== '') {
        let block = props.filter.toLowerCase()
        persons =  persons.filter((person) => 
                person.name.toLowerCase().includes(block)
                )
    }
    return (
    persons.map(person => 
    <Person name = {person.name} 
            number = {person.number} 
            key = {person.name}
            id = {person.id}
            deletePerson = {() => props.deletePerson(person.id)}
            />
    ))
}

export default Persons