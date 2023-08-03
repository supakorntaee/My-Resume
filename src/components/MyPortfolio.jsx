import React from 'react'
import Portfolio from './sub-components/Portfolio'


function MyPortfolio() {
  return (
    <div className='my-portfolio'>
        <h3 className='my-portfolio-header'>My <span>Portfolio</span></h3>

    <Portfolio />
    </div>
  )
}

export default MyPortfolio