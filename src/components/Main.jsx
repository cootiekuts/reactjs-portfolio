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
      <div className="main-content">  
        <Sidebar/>
        <Content/>
      </div>
      <Footer/>
    </div>
    </>
  )
}
