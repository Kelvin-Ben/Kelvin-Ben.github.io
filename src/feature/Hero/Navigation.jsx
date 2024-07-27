import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navigation.module.css';
import hamburger from '../../assets/icon-hamburger.svg'
import close from '../../assets/icon-close.svg';
import logo from '../../assets/kelvin-logo.png'

const Navigation = () => {
  return (
    <header className={styles.navigation}>
      <img src={logo} alt='Kelvin Ben logo' className={styles.logo} />
      <ul className={styles.navList}>
        <NavLink to='/' className={({isActive}) => isActive ? 'activeLink' : 'inActiveLink'}>HOME</NavLink>
        <NavLink to='/projects' className={({isActive}) => isActive ? 'activeLink' : 'inActiveLink'}>PROJECTS</NavLink>
        <NavLink to='/about' className={({isActive}) => isActive ? 'activeLink' : 'inActiveLink'}>ABOUT</NavLink>
        <NavLink to='/contact' className={({isActive}) => isActive ? 'activeLink' : 'inActiveLink'}>CONTACT</NavLink>
        {/* <NavLink to='/' className={({isActive}) => isActive ? 'activeLink' : 'inActiveLink'}></NavLink> */}
      </ul>
      <img src={hamburger} alt="hamburger" className={styles.hamburger} />
      <img src={close} alt="icon-close" className={styles.close} />
    </header>
  )
}

export default Navigation