import React from 'react'

const Button = ({ deletePerson }) => 
    <button type = 'button' onClick = {deletePerson}>delete</button>

const Person = (props) => 
    <p>{props.name} {props.number} 
      <Button id = {props.id} 
              handler = {props.handler}
              deletePerson = {props.deletePerson}
      />
    </p>

export default Person