import { useState } from 'react'

const Header = ({text}) => <h1>{text}</h1>

const Button = ({ onPress, text }) => <button onClick={onPress}>{text}</button>

const StatisticLine = ({text, value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>)

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  if(total === 0) {
    return <div>No feedback given</div>
  }
  return (
    <table>
      <tbody>
        <StatisticLine text='good' value={good}/>
        <StatisticLine text='neutral' value={neutral}/>
        <StatisticLine text='bad' value={bad}/>
        <StatisticLine text='all' value={total}/>
        <StatisticLine text='average' value={(good-bad)/(total)}/>
        <StatisticLine text='good' value={100*(good)/(total)+'%'}/>
      </tbody>
    </table>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodPress = () => setGood(good + 1)
  const neutralPress = () => setNeutral(neutral + 1)
  const badPress = () => setBad(bad + 1)

  return (
    <div>
      <Header text='give feedback' />
      <Button onPress={goodPress} text='good'/>
      <Button onPress={neutralPress} text='neutral'/>
      <Button onPress={badPress} text='bad'/>
      <Header text='statistics'/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App