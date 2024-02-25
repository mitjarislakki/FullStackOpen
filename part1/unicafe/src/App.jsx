import { useState } from 'react'

const Header = ({text}) => <h1>{text}</h1>

const Button = ({ onPress, text }) => <button onClick={onPress}>{text}</button>

const Statement = ({text, value}) => <div>{text} {value}</div>

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad

  return (
    <div>
    <Header text='statistics'/>
    <Statement text='good' value={good}/>
    <Statement text='neutral' value={neutral}/>
    <Statement text='bad' value={bad}/>
    <Statement text='all' value={total}/>
    <Statement text='average' value={(good-bad)/(total)}/>
    <div>positive {100 * (good)/(total)}%</div>
    </div>
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
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App