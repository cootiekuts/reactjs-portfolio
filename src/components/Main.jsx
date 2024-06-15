import React, { useState } from 'react'
import Sidebar from './Sidebar.jsx'
import Content from './Content.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

export default function Main() {
  const contactInfo = {
    fbLink: 'https://www.facebook.com/bc.regencia',
    lILink: 'https://www.linkedin.com/in/bryle-christian-regencia',
    fbIconLink: 'img/fb-icon.png',
    liIconLink: 'img/li-icon.png',   
    emailIcon: 'img/email-icon.png',
    emailLink: 'mailto:rbrylechristian@gmail.com'
  }
  const linkInfo={
    resumeLink: 'https://drive.google.com/file/d/1aBiVCrl5QGXgYRIaYJtrc7zlWQ0woF5t/view?usp=sharing',
    gDIconLink: 'img/gd-icon.png', 
    iconClName: 'icon-img',
    imgClName: 'prof-img',
    nameClName: 'name-span',
    addClName: 'address-text',
    contactClName: 'contact-div',
    profImglink: 'img/prof-pic.jpg',
  }

  const resourceInfo=[
    {label:"Papyrus font", link:"https://befonts.com/downfile/3848a4da7e9db6552cbbb9fb0da3617f.338955"},
    {label:"Diagonal Color Gradient", link:"https://www.sliderrevolution.com/resources/css-animated-background/"},
    {label:"Hover Glow Effect", link:"https://dev.to/webdeasy/top-20-css-buttons-animations-f41"},
    {label:"CSS Tutorials", link:"https://www.w3schools.com/"},
    {label:"Experience Background", link:"https://www.istockphoto.com/photo/male-it-technician-running-maintenance-programme-on-a-laptop-controls-operational-gm1148195855-310003590?searchscope=image%2Cfilm"},
    {label:"Basic Info Background", link:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fpersonal-information&psig=AOvVaw2cZpe-CB5Op9X6FHHAOGpb&ust=1715497637315000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOjqh-yEhYYDFQAAAAAdAAAAABAE"},
    {label:"Skill Background", link:"https://dev.to/webdeasy/top-20-css-buttons-animations-f41"},
    {label:"About Background", link:"https://www.istockphoto.com/photo/white-chat-bubble-on-blue-background-gm939838106-256950786?searchscope=image%2Cfilm"},
    {label:"Resource Background", link:"https://www.istockphoto.com/vector/ai-legal-robots-gm1474442258-504298645?searchscope=image%2Cfilm"},
    {label:"Email Icon", link:"https://www.flaticon.com/free-icons/gmail", text:"Gmail icons created by Pixel perfect - Flaticon"},
    {label:"facebook icons", link:"https://www.flaticon.com/free-icons/facebook", text:"Facebook icons created by Ruslan Babkin - Flaticon"},
    {label:"linkedin icons", link:"https://www.flaticon.com/free-icons/linkedin", text:"Linkedin icons created by Ruslan Babkin - Flaticon"},
    {label:"Hover Glow Effect", link:"https://dev.to/webdeasy/top-20-css-buttons-animations-f41"},
    {label:"oogle drive icons", link:"https://www.flaticon.com/free-icons/google-drive", text:"Google drive icons created by Freepik - Flaticon"},
  ]
 

  return (
    <div className="main-container" id='mainContId' >
      <Header text = "SURPRISE!"/>
      <Sidebar/>
      <Content contactInfo={contactInfo} linkInfo={linkInfo} resourceInfo={resourceInfo}/>
      <Footer contactInfo={contactInfo} linkInfo={linkInfo}/>
    </div>
  )
}
