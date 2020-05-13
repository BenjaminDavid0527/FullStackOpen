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

const Statistic = (props) => (
  <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
  </tr>
)

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  let average = 0
  let positive = 0
  if (total !== 0) {
    average = ((good * 1) + (bad * -1)) / total
    positive = (good / total) * 100 + ' %'
  }
  else return (
    <>
      <Header text = 'statistics'/>
      <p>No feedback given</p>
    </>
  )

  return (
    <>
      <Header text = 'statistics'/>
      <table>
        <tbody>
          <Statistic text = 'good' value = {good}/>
          <Statistic text = 'neutral' value = {neutral}/>
          <Statistic text = 'bad' value = {bad}/>
          <Statistic text = 'all' value = {total}/>
          <Statistic text = 'average' value = {average}/>
          <Statistic text = 'positive' value = {positive}/>
        </tbody>
      </table>
    </>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

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
      <Statistics good = {good} neutral = {neutral} bad = {bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)