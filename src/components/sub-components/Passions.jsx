import React from 'react'
import './Passions.css'

function Passions() {
  return (
    <div className='my-passions'>
        <div className='passion-box'>
            <img className="passion-image" src=".\src\assets\FrontEndpic.svg" alt="" />
            <p className='passion-header'><span className='front-end'>Front-End</span> Developer</p>
            <p className='passion-description'>(React, Tailwind)</p>
        </div>

        <div className='passion-box'>
        <img className="passion-image" src=".\src\assets\BackEndPic.svg" alt="" />
            <p className='passion-header'><span className='back-end'>Back-End</span> Developer</p>
            <p className='passion-description'>(NodeJS, Lavarel)</p>
        </div>

        <div className='passion-box'>
        <img className="passion-image" src=".\src\assets\UIUX.svg" alt="" />
            <p className='passion-header'><span className='ui-ux'>UI/UX</span> Designer</p>
            <p className='passion-description'>(Figma)</p>
        </div>
    </div>
  )
}

export default Passions