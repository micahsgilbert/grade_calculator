import { useState, useEffect } from 'react'
import { getColor, getLetter, getAverage } from './helpers.js'
import './App.css'

function App() {
  const [formative, setFormative] = useState("")
  const [summative, setSummative] = useState("")
  const [letter, setLetter] = useState("")
  const [grade, setGrade] = useState("")
  const [color, setColor] = useState("#EEEEEE")

  const calculateGrade = () => {
    const formativeGrade = getAverage(formative)
    const summativeGrade = getAverage(summative)

    if (formativeGrade == -1 && summativeGrade == -1) {
      setGrade("")
    } else if (formativeGrade == -1) {
      setGrade(summativeGrade.toFixed(2))
    } else if (summativeGrade == -1) {
      setGrade(formativeGrade.toFixed(2))
    } else {
      setGrade((formativeGrade*0.35 + summativeGrade*0.65).toFixed(2))
    }
  }

  const calculateLetter = () => {
    setLetter(getLetter(grade))
  }

  const calculateColor = () => {
    setColor(getColor(grade))
  }

  useEffect(calculateGrade, [formative, summative])
  useEffect(calculateLetter, [grade])
  useEffect(calculateColor, [grade])

  return (
    <div id="app">
      <div className="input-container">
        <h2>Formative</h2>
        <textarea className="grades-textarea" onChange={e => {setFormative(e.target.value)}} rows={20} cols={8}/>
      </div>
      <div className="input-container">
        <h2>Summative</h2>
        <textarea className="grades-textarea" onChange={e => {setSummative(e.target.value)}} rows={20} cols={8}/>
      </div>
      <div id="grade-container-grid-item">
        <div id="grade-container" style={{borderColor: color}}>
          <p>{grade} - {letter}</p>
        </div>
      </div>
    </div>
  )
}

export default App
