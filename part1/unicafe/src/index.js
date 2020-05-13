import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick = {props.handleClick}>
    {props.text}
  </button>
)

const Header = (props) => (
  <h1> 
    {props.text}
  </h1>
)

const Report = (props) => (
  <p>{props.text} {props.value}</p>
)

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const values = [good, neutral, bad]

  const all = () => {
    let total = 0
    for (const x in values) {
      total += values[x]
    }
    return total
  }

  const avg = () => {
    let total = all()
    if (total === 0) return 0
    let goodAvg = good * 1
    let badAvg = bad * -1
    return (goodAvg + badAvg) / total
  }

  const voteGood = (newValue) => (
    setGood(newValue)
  )
  const voteNeut = (newValue) => (
    setNeutral(newValue)
  )
  const voteBad = (newValue) => (
    setBad(newValue)
  )

  return (
    <div>
      <Header text = 'give feedback' />
      <Button handleClick = {() => voteGood(good + 1)} text = 'good'/>
      <Button handleClick = {() => voteNeut(neutral + 1)} text = 'neutral'/>
      <Button handleClick = {() => voteBad(bad + 1)} text = 'bad' />
      <Header text = 'statistics'/>
      <Report text = 'good' value = {good}/>
      <Report text = 'neutral' value = {neutral}/>
      <Report text = 'bad' value = {bad}/>
      <Report text = 'all' value = {all()}/>
      <Report text = 'average' value  = {avg()}/>
      <Report text = 'positive' value = {0}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)