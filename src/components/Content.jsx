import React from 'react'
import Footer from './Footer'

export default function Content() {
  return (
    <div className='content'>
      <section id='top'>
        <div className='section-span'>
          <h2>BASIC INFORMATION<img src="/images/ooga.png"></img></h2>
          </div>
      </section>
      <section id='xp'>
        <div className='section-span'>
          <h2>EXPERIENCE</h2>
        </div>
      </section>
      <section id='skill'>
        <div className='section-span'>
          <h2>SKILL</h2>
        </div>
      </section>
      <section id='about'>
        <div className='section-span'>
          <h2>ABOUT</h2>
          
        </div>      
      </section>      
    </div>
  )
}
