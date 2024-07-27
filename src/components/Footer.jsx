import React from 'react'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'
import logo from '../assets/kelvin-logo.png'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.content}>
          <div className={styles.footer_nav}>
            <Link to='/projects'>PROJECTS</Link>
            <Link to='/about'>ABOUT</Link>
            <Link to='/contact'>CONTACT</Link>
          </div>
          <div className={styles.footer_details}>
            <div className={styles.contact_details}>
              <p className={styles.email}>kevoben14@gmail.com</p>
              <p className={styles.phone}>+254 791 730 991</p>
            </div>
          <img src={logo} alt="kelvin-logo" className={styles.logo} />
        </div>
        </div>
        <p className={styles.rights}>© 2024 <a href='https://github.com/Kelvin-Ben' target='_blank' className={styles.rights}>Kelvin Benjamin.</a> All rights reserved.</p>
      </div>
  )
}

export default Footer