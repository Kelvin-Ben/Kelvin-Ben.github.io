
import Navigation from './Navigation';
import styles from './Hero.module.css'

const Hero = ({intro}) => {
  return (
    <div className={`${styles.intro}`}> 
      <Navigation />
      {intro && (
        <div className={`font-bebas text-4xl tracking-widest ${styles.intro_content}`}>
          <h1 className='text-inherit text-[5rem] uppercase'>{intro.title}</h1>
          <h2 className='font-rubik tracking-widest leading-3 text-inherit text-[2rem]'>{intro.subtitle}</h2>
      </div>
      )}
    </div>
  )
}

export default Hero;