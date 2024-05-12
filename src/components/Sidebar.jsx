import React from 'react'

export default function Sidebar() {
  // var sidebarElem = document.getElementById("sidebarId");
  // var width = sidebarElem.clientWidth
  // var height = sidebarElem.clientHeight

  
  return ( 
    <>
    <div className='sidebar' id="sidebarId">
        <a href='#top'><button className='sidebar-button'><h2>BASIC INFORMATION</h2></button></a>
        <a href='#xp'><button className='sidebar-button'><h2>EXPERIENCE</h2></button></a>
        <a href='#skill'><button className='sidebar-button'><h2>SKILL</h2></button></a>
        <a href='#about'><button className='sidebar-button'><h2>ABOUT</h2></button></a>
        <a href='#reso'><button className='sidebar-button'><h2>RESOURCE & CREDIT</h2></button></a>
    </div>
    </>
  )
}
