import React from 'react'
import { useState } from 'react'

export default function Content() {
  const info = { 
    name:'Bryle Christian Regencia',
    // provAdd: '178 Ilaya, Balanacan, Mogpog, Marinduque 4901',
    // cityAdd: '822 P.Herrera, Aguho, Pateros, Metro Manila 1620',
    mobNum: '09158436060',
    emailAdd:'rbrylechristian@gmail.com'}
 
  const [isNav1, setNav1] = useState(true)
  const [isNav2, setNav2] = useState(false)
  const [isNav3, setNav3] = useState(false)
  const [isNav4, setNav4] = useState(false)
  // var setNav1 = 'carousel__navigation-button'
  // var setNav2 = 'carousel__navigation-button'
  // var setNav3 = 'carousel__navigation-button'
  // var setNav4 = 'carousel__navigation-button'
  
  // const onClickHeader1 = () => {
  //   setNav1='nav-button-active-1'
  //   setNav2='carousel__navigation-button'
  //   setNav3='carousel__navigation-button'
  //   setNav4='carousel__navigation-button'
  // } 

  // const onClickHeader2 = () => {
  //   setNav2='nav-button-active-2'
  //   setNav1='carousel__navigation-button'
  //   setNav3='carousel__navigation-button'
  //   setNav4='carousel__navigation-button'
  // } 

  // const onClickHeader3 = () => {
  //   setNav3='nav-button-active-1'
  //   setNav2='carousel__navigation-button'
  //   setNav1='carousel__navigation-button'
  //   setNav4='carousel__navigation-button'
  // } 

  // const onClickHeader4 = () => {
  //   setNav4='nav-button-active-2'
  //   setNav2='carousel__navigation-button'
  //   setNav3='carousel__navigation-button'
  //   setNav1='carousel__navigation-button'
  // } 
  
  const onClickHeader1 = () => {
    setNav1(true)
    setNav2(false)
    setNav3(false)
    setNav4(false)
    } 

  const onClickHeader2 = () => {
    setNav2(true)
    setNav1(false)
    setNav3(false)
    setNav4(false)
  } 

  const onClickHeader3 = () => {
    setNav3(true)
    setNav2(false)
    setNav1(false)
    setNav4(false)
  } 

  const onClickHeader4 = () => {
    setNav4(true)
    setNav2(false)
    setNav3(false)
    setNav1(false)
  } 

  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    var html = document.documentElement;
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || html.clientHeight) &&
      rect.right <= (window.innerWidth || html.clientWidth)
    );
  }
  
  return (
    
    <>
      <section id='top'>
          <h2>BASIC INFORMATION</h2>

          <img className='prof-img' src='img/prof-pic.jpg'/>

          <h3>Full Name: {info.name}</h3>
        {/* <h3><p>Addresses:</p></h3>
          <h3>Provincial: {info.provAdd} </h3>
          <h3>Metro Manila: {info.cityAdd}</h3> */}
        <address><h3><p>Contact Information:</p></h3>
          <h3>Mobile Number: {info.mobNum}</h3>
          <h3>Email: {info.emailAdd}<a href="mailto:rbrylechristian@gmail.com" target='blank'><img className='icon-img' src="img/email-icon.png"/></a></h3>
            
          <div className='contact-div'>
        <h3><p>Socials:
          <a href='https://www.facebook.com/bc.regencia' target="_blank"><img className='icon-img' src="img/fb-icon.png"/></a>
          <a href='https://www.linkedin.com/in/bryle-christian-regencia' target="_blank"><img className='icon-img' src="img/linkedin-icon.png"/></a></p></h3>
          </div>
        </address>
        <h3>View Resume:<a href="https://drive.google.com/file/d/1aBiVCrl5QGXgYRIaYJtrc7zlWQ0woF5t/view?usp=sharing" target='blank'><img className='icon-img' src="img/gdrive-icon.png"/></a></h3>

      </section>

      <section id='xp'>
        <h2>EXPERIENCE</h2>
        
        <div className="carousel" aria-label="Gallery">
          <ol className="carousel__viewport"> 
            <li id="carousel__slide1" className="carousel__slide">   
                <a href="#carousel__slide4" onClick={onClickHeader4}
                  className="carousel__prev"></a>
                <a href="#carousel__slide2" onClick={onClickHeader2}
                  className="carousel__next"/>

              <div className='content-div'>
                <h2><p>Freelance - Social Media Manager</p></h2>
                
                <div className='place-date-div'>    
                <h3><p>April 2023 - December 2023</p></h3>
                </div>

                <div className='xp-text-div'>
                <h3><p>Job Responsibility</p></h3><br/>
                  <div className='item-div'>
                    <h3>•Content management including post creation, image editing, post scheduling and caption making</h3>
                    <h3>•Paid ads management including creative making, testing and scheduling</h3>
                    <h3>{}</h3>
                  </div>
            
                </div>
              </div>   
            </li>

            <li id="carousel__slide2" className="carousel__slide">   
                <a href="#carousel__slide1" onClick={onClickHeader1}
                  className="carousel__prev"></a>
                <a href="#carousel__slide3" onClick={onClickHeader3}
                  className="carousel__next"/>

              <div className='content-div'>
                <h2><p>Movate - Chat Technical Support Engineer</p></h2>
                
                <div className='place-date-div'>    
                <h3><p>Taguig</p></h3>  
                <h3><p>December 2022 - April 2023</p></h3>
                </div>

                <div className='xp-text-div'>
                <h3><p>Job Responsibility</p></h3><br/>
                  <div className='item-div'>
                    <h3>•Provide assistance not limited to appointment, billing, internet troubleshooting, app concern, and other related inquiry 
                        via chat</h3>
                  </div>
                </div>
              </div>
            </li>

            <li id="carousel__slide3" className="carousel__slide">   
                <a href="#carousel__slide2" onClick={onClickHeader2}
                  className="carousel__prev"></a>
                <a href="#carousel__slide4" onClick={onClickHeader4}
                  className="carousel__next"/>

                <div className='content-div'>
                <h2><p>Aventus Medical Care Inc - Database Administrator</p></h2>
                
                <div className='place-date-div'>  
                <h3><p>Makati</p></h3>  
                <h3><p>February 2021 - August 2022</p></h3>
                </div>

                <div className='xp-text-div'>
                <h3><p>Job Responsibility</p></h3><br/>
                  <div className='item-div'>
                    <h3>•Monitor and maintain MS SQL databases, Windows 2019 servers and, SAN and NAS storage devices</h3>
                    <h3>•Extract data using SQL Querying as per department request</h3>
                    <h3>•Implement database updates as per programmers' request </h3>
                    <h3>•Troubleshoot database and server issues</h3>
                    <h3>•Continuous research on optimizing performance of databases and servers</h3>
                  </div>
                </div>
              </div>
            </li>

            <li id="carousel__slide4" className="carousel__slide">   
                <a href="#carousel__slide3" onClick={onClickHeader3}
                  className="carousel__prev"></a>
                <a href="#carousel__slide1" onClick={onClickHeader1}
                  className="carousel__next"/>

              <div className='content-div'>
                <h2><p>First Life Financial Co Inc - POSS Assistant</p></h2>
               
                <div className='place-date-div'>  
                <h3><p>Makati</p></h3>  
                <h3><p>March 2020 - August 2020</p></h3>
                </div>
                
                <div className='xp-text-div'>
                <h3><p>Job Responsibility</p></h3><br/>
                  <div className='item-div'>
                    <h3>•Manage supply inventory</h3>
                    <h3>•Create purchase order for supply replenishment</h3>
                    <h3>•Consolidate and manage office expenses including electric, internet, water and others</h3>
                    <h3>•Liase and act as focal person for tenant-related activities</h3>
                    <h3>•Manage schedule of mailmen and drivers</h3>
                    <h3>•Prepare and organize customer mails</h3>
                    <h3>•Prepare supply request from other department</h3>
                    
                  </div>
                </div>
              </div>
            </li>
          </ol>

          <aside className="carousel__navigation">
            <ol className="carousel__navigation-list">
              <li className="carousel__navigation-item">
                <a href="#carousel__slide1"
                  className= {`${isNav1 ? 'nav-button-active-1' : 'carousel__navigation-button'}`} onClick={onClickHeader1} id='nav1'></a> 
              </li>
              <li className="carousel__navigation-item">
                <a href="#carousel__slide2"
                  className={ `${isNav2 ? 'nav-button-active-2' : 'carousel__navigation-button'}`} onClick={onClickHeader2} id='nav2'></a>   
              </li>
              <li className="carousel__navigation-item">
                <a href="#carousel__slide3"
                  className={`${isNav3 ? 'nav-button-active-1' : 'carousel__navigation-button'}`} onClick={onClickHeader3} id='nav3'></a>                  
              </li>
              <li className="carousel__navigation-item">
                <a href="#carousel__slide4"
                  className={`${isNav4 ? 'nav-button-active-2': 'carousel__navigation-button'}`} onClick={onClickHeader4} id='nav4'></a>    
              </li>

            </ol>
          </aside>
        </div>
      </section>

      <section id='skill'>
        <h2>SKILL</h2>
      </section>

      <section id='about'>
        <div className='section-span'>
          <h2>ABOUT</h2>
        </div>      
      </section>   
      <section id='reso'>
        <div className='section-span'>
          <h2>RESOURCE AND CREDIT</h2>
        </div> 
      </section>
      </>  
  )
}
