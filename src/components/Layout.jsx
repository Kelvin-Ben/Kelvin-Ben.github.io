
import { Outlet, useLocation } from 'react-router-dom'

import Hero from '../feature/Hero/Hero'
import Footer from './Footer'

const introData = {
  '/': {title: 'KELVIN BENJAMIN', subtitle: 'FRONT-END DEVELOPER'},
  '/projects': {title: 'MY PROJECTS', subtitle: 'MADE WITH LOVE'},
  '/about': {title: 'ABOUT ME', subtitle: "IT'S ME, KELVIN !"},
  '/contact': {title: 'CONTACT ME', subtitle: 'SAY HELLO TO ME'},
}

export const Layout = () => {
  const location = useLocation();
  const intro = introData[location.pathname]
  return (
    <div className='main'>
      <Hero intro={intro} />
      <div className='content'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
