// import React from 'react'
import Navigation from './Home/Hero/Navigation'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <main>
      <Navigation />
      <Outlet />
    </main>
  )
}

export default Root