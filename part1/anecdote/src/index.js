import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// component factory for buttons
const Button = ({text, handleClick}) => (
  <button onClick = {handleClick}>
    {text}
  </button>
)

// component factory for displaying anecdotes
const Anecdote = ({text}) => (
  <p>{text}</p>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, addPoint] = useState(
    new Array(anecdotes.length + 1).join('0').split('').map(parseFloat)
  )
  
  // action votes current state's randomly displayed anecdote
  const vote = () => {
    const copy = [...points]
    copy[selected] += 1
    addPoint(copy)
  }

  //picks a random anecdote based on array length
  const randAnecdote = () => {
    let index = anecdotes.length
    index = Math.floor(Math.random() * index)
    return index
  }

  // action picks randAnecdotes() index (could be combined w/ above tbh)
  const pickAnecdote = (index) => {
    setSelected(index)
  }

  // helper method finds first anecdote with most votes
  //earlier in array is picked for ties
  const mostVotes = () => {
    let max = 0
    for (var index in anecdotes) {
      if (points[index] > points[max]) max = index
    }
    return max
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote text = {anecdotes[selected]}/>
      <Button text = {'vote'} handleClick = {() => vote()}/>
      <Button text = {'next anecdote'} handleClick = {() => pickAnecdote(randAnecdote())} />
      <h1>Anecdote with the most votes</h1>
      <Anecdote text = {anecdotes[mostVotes()]}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)