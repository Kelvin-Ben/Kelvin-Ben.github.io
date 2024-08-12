import React from 'react'
import html from "../assets/html.png"
import css from '../assets/css.png'
import bootstrap from '../assets/bootstrap.png'
import tailwind from '../assets/tailwind.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import next from '../assets/nextjs.png'
import typescript from '../assets/language-typescript.png'
import webpack from '../assets/webpack.png'
import figma from '../assets/figma.png'
import github from '../assets/github.png'
import git from '../assets/git.png'
export const Skills = () => {
  return (
    <div className='mb-[4rem]'>
      <h2 className='text-[2.5rem] uppercase font-bold mb-4'>my skills</h2>
      <ul className='skills'>
        <li className='flex items-center text-[1.3rem] uppercase font-bold'>
          <img src={html} alt="html photo" className='w-[3rem] pr-2'/>
          html
        </li>
        <li className='flex items-center text-[1.3rem] uppercase font-bold'>
          <img src={css} alt="" className='w-[3rem] pr-2'/>
          css
        </li>
        <li className='flex items-center text-[1.3rem] uppercase font-bold'>
          <img src={bootstrap} alt="" className='w-[3rem] pr-2'/>
          bootstrap
        </li>
        <li className='flex items-center text-[1.3rem] uppercase font-bold'>
          <img src={tailwind} alt="" className='w-[3rem] pr-2'/>
          tailwindcss
        </li>
        <li className='flex items-center text-[1.3rem] uppercase font-bold'>
          <img src={javascript} alt="" className='w-[3rem] pr-2'/>
          javascript
        </li>
        <li className='flex items-center text-[1.3rem] uppercase font-bold'>
          <img src={react} alt="" className='w-[3rem] pr-2'/>
          react
        </li>
        <li className='flex items-center text-[1.3rem] uppercase font-bold'>
          <img src={next} alt="" className='w-[3rem] pr-2'/>
          nextjs
        </li>
        <li className='flex items-center text-[1.3rem] uppercase font-bold'>
          <img src={typescript} alt="" className='w-[3rem] pr-2'/>
          typescript
        </li>
        <li className='flex items-center text-[1.3rem] uppercase font-bold'>
          <img src={webpack} alt="" className='w-[3rem] pr-2'/>
          webpack
        </li>
        <li className='flex items-center text-[1.3rem] uppercase font-bold'>
          <img src={figma} alt="" className='w-[3rem] pr-2'/>
          figma
        </li>
        <li className='flex items-center text-[1.3rem] uppercase font-bold'>
          <img src={github} alt="" className='w-[3rem] pr-2'/>
          github
        </li>
        <li className='flex items-center text-[1.3rem] uppercase font-bold'>
          <img src={git} alt="" className='w-[3rem] pr-2'/>
          git
        </li>
      </ul>
    </div>
  )
}
