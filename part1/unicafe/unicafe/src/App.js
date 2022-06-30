import { useState } from 'react'

const App = () => {
  const [allClicks, setAll] = useState([])
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const Statistics = (props) => {
    return (
      <div>{props.text}{props.counter}</div>
    )
  }

  const handleGoodClick = () => {
    console.log('good')
    setAll(allClicks + 1)
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    console.log('neutral')
    setAll(allClicks + 1)
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    console.log('bad')
    setAll(allClicks + 1)
    setBad(bad + 1)
  }

  const History = (props) => {
    if (props.allClicks.length === 0) {
      return (
        <div>
          No feedback given
        </div>
      )
    }
    return (
      <div>
        <Statistics counter={good} text={"good "} />
        <Statistics counter={neutral} text={"neutral "} />
        <Statistics counter={bad} text={"bad "} />
        <Statistics counter={bad + good + neutral} text={"all "} />
        <Statistics counter={((good - bad) / (bad + good + neutral))} text={"average "} />
        <Statistics counter={((good) / (bad + good + neutral))} text={"positive "} />
      </div>
    )
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={() => handleGoodClick()}>good</button>
      <button onClick={() => handleNeutralClick()}>neutral</button>
      <button onClick={() => handleBadClick()}>bad</button>
      <h1>statistics</h1>
      <History allClicks={allClicks} />

    </div>
  )
}
export default App