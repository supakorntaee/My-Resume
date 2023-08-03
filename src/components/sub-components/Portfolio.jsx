import React from 'react'
import './Portfolio.css'

function Portfolio() {
  return (
    <div className='my-projects'>
        <div className='projects-box'>
        <h4 className='first-project-header'>Sendpay </h4>
        <img className="first-project-image" src=".\src\assets\SendPay.png" alt="" />
        </div>


        <div className='projects-box'>
        <h4 className='second-project-header'>E-Commerce </h4>
        <img className="second-project-image" src=".\src\assets\e-commerce.png" alt="" />
        </div>


        <div className='projects-box'>
        <h4 className='third-project-header'>BeatsLearning </h4>
        <img className="third-project-image" src=".\src\assets\Edtech.png" alt="" />
        </div>

    </div>
  )
}

export default Portfolio