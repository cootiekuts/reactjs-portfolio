import React from 'react'
import Sidebar from './Sidebar'
import Content from './Content'
import Header from './Header'
import Footer from './Footer'

export default function Main() {
  return (
    <>
    <div className="main-container" id='mainContId'>
      <Header/>
      <Sidebar/>
      <div className='main-content'>
        <Content/>
      </div>
      <Footer/>
    </div>
    </>
  )
}
