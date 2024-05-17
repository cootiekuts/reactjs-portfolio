import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Content from './Content'
import Header from './Header'
import Footer from './Footer'

export default function Main() {
  const [dimension, setDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight

  })
  return (
    <>
    <div className="main-container" id='mainContId' onChange={() => {
      width=width
      height=height
    }}>
      <Header/>
      <Sidebar/>
      <div className='main-content'>
        {setDimension.width}{setDimension.height}
        <Content/>
      </div>
      <Footer/>
    </div>
    </>
  )
}
