import React from 'react'

const App = () => {
  return (
    <div>
      <img />
      <div className='form-conteiner'>
        <input className='number'/>
        <input className='message' type='textAre'/>
        <input className='location'/>
        <button className='get-location'>
          <svg className='location-map'>

          </svg>
        </button>
        <button className='send'>

        </button>
      </div>
    </div>
  )
}

export default App