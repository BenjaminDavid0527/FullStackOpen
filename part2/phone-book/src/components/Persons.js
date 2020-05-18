import React from 'react'

const Person = ({name}) => <p>{name}</p>

const Persons = ({persons}) => (
    persons.map(person => <Person name = {person.name} key = {person.name}/>)
)

export default Persons