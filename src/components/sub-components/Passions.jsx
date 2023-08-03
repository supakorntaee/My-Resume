import React from 'react'
import './Passions.css'

function Passions() {
  return (
    <div className='my-passions'>
        <div className='passion-box'>
            <img className="passion-image" src="" alt="" />
            <p className='first-passion-header'><span>Front-End</span> Developer</p>
            <p className='first-passion-description'>(React, Tailwind)</p>
        </div>

        <div className='passion-box'>
        <img className="passion-image" src="" alt="" />
            <p className='second-passion-header'><span>Back-End</span> Developer</p>
            <p className='second-passion-description'>(NodeJS, Lavarel)</p>
        </div>

        <div className='passion-box'>
        <img className="passion-image" src="" alt="" />
            <p className='third-passion-header'><span>UI/UX</span> Designer</p>
            <p className='third-passion-description'>(Figma)</p>
        </div>
    </div>
  )
}

export default Passions