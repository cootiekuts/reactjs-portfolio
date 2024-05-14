import React from 'react'
import Sidebar from './Sidebar'
import Content from './Content'
import Header from './Header'
import Footer from './Footer'

export default function Main(props) {
  const {info, isInViewport} = props
  return (
    <>
    <div className="main-container" id='mainContId'>
      <Header/>
      <Sidebar/>
      <div className='main-content'>
        <Content info={info} isInViewport={isInViewport}/>
      </div>
      <Footer/>
    </div>
    </>
  )
}
