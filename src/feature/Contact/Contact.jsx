import React from 'react'
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <div className='w-[80%] min-h-[20rem] mx-auto my-[5rem] flex flex-col justify-around'>
      <h3 className='text-[2rem] font-bold'>Contact me</h3>
      <form action="" className={styles.form}>
        <div className={styles.details}>
          <div className='w-[50%] flex flex-col sm:w-auto'>
            <label htmlFor="name" className={`my-[1rem] ${styles.label}`}>Name</label>
            <input type="text" id={styles.name} placeholder='Your Name' />
          </div>
          <div className='w-[50%] flex flex-col sm:w-auto'>
            <label htmlFor="email" className={`my-[1rem] ${styles.label}`}>Email</label>
            <input type="text" id={styles.email} placeholder='email@example.com' />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className={`my-[1rem] ${styles.label}`}>Nachricht</label>
          <textarea placeholder='send me a message...' rows={3} id={styles.message}></textarea>
        </div>
        <button type="button" className='w-[15%] h-[5rem]  mx-auto border text-[1.8rem] bg-gray-200 sm:w-[100%] hover:bg-gray-400'>Send message</button>
      </form>
    </div>
  )
}

export default Contact