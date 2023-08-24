import { useEffect, useState } from 'react'
import { coBrowsing } from 'sariska-cobrowsing'
import './App.css'
import logo from './logo.svg'

function App() {
  const [sessionName, setSessionName] = useState('')

  useEffect(() => {
    return () => {
      coBrowsing.stopCoBrowsing()
    }
  }, [])

  const startSession = () => {
    if (sessionName.trim().length === 0) alert('Please enter a room name')

    coBrowsing.startCoBrowsing(`User${Math.round(Math.random(100) * 100)}`, sessionName)
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <hr />
        <label htmlFor='room-name'>Enter room name</label>
        <input
          name='room-name'
          id='room-name'
          type='text'
          value={sessionName}
          onChange={e => {
            const { value } = e.target

            setSessionName(value)
          }}
        />
        <button
          onClick={() => {
            startSession()
          }}
        >
          Start Co Browsing
        </button>
      </header>
    </div>
  )
}

export default App
