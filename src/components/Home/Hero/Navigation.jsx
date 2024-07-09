import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <img src="../../../dist/kelvin.png" alt="Kelvin Ben logo" className='max-h-[2rem]'/>
      <ul>
        <NavLink to='/' />
      </ul>
    </div>
  )
}

export default Navigation