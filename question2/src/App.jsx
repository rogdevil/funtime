import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  return (
    <div className="App">
      <div className='form-wrapper'>
        <form action='#'>
          <label for="fullName">Your full given name:</label>
          <input name='fullName' type='text' id='fullName' />
          <div className='flex-row'>
            <div>
              <label for="dob">Date of Birth</label>
              <input name='dob' type='date' id='dob' />
            </div>
            <div>
              <label for="country">Country of residence or citizenship:</label>
              <input name='country' type='text' id='country' />
            </div>
          </div>
          <label for="school">What school do you plan to attend?</label>
          <input className='margin-bottom' name='school' type='text' id='school' />
          <label for="school">Plese take a moment to describe your intended area of study:</label>
          <textarea placeholder='Enter details here' name='school' type='text' id='school' cols={'5'} />
        </form>
      </div>
    </div>
  )
}

export default App
