import React from 'react'

export default function Content(props) {
  const {info, isInViewport} = props
  
  return (
    
    <>
      <section id='top'>
          <h2>BASIC INFORMATION</h2>

          <img className='prof-img' src='img/prof-pic.jpg'/>

          <h3>Full Name: {info.name}</h3>
          <h3>{isInViewport}</h3>
          <p><h3>Addresses:</h3></p>
          <h3>Provincial: {info.provAdd} </h3>
          <h3>Metro Manila: {info.cityAdd}</h3>
          <p><h3>Contact Information:</h3></p>
          <h3>Mobile Number: {info.mobNum}</h3>
          <h3>Email: {info.emailAdd}<a href="mailto:rbrylechristian@gmail.com" target='blank'><img className='icon-img' src="img/email-icon.png"/></a></h3>
            
          <div className='contact-div'>
          <p><h3>Socials:
          <a href='https://www.facebook.com/bc.regencia' target="_blank"><img className='icon-img' src="img/fb-icon.png"/></a>
          <a href='https://www.linkedin.com/in/bryle-christian-regencia' target="_blank"><img className='icon-img' src="img/linkedin-icon.png"/></a></h3></p>
          </div>
          <h3>View Resume:<a href="https://drive.google.com/file/d/1aBiVCrl5QGXgYRIaYJtrc7zlWQ0woF5t/view?usp=sharing" target='blank'><img className='icon-img' src="img/gdrive-icon.png"/></a></h3>

      </section>

      <section id='xp'>
        <h2>EXPERIENCE</h2>
        
        <div className="carousel" aria-label="Gallery">
          <ol className="carousel__viewport"> 
            <li id="carousel__slide1" className="carousel__slide">   
                <a href="#carousel__slide4"
                  className="carousel__prev"></a>
                <a href="#carousel__slide2"
                  className="carousel__next"/>

              <div className='content-div'>
                <p><h2>Freelance - Social Media Manager</h2></p>
                
                <div className='place-date-div'>    
                  <p><h3>April 2023 - December 2023</h3></p>
                </div>

                <div className='xp-text-div'>
                  <p><h3>Job Responsibility</h3></p><br/>
                  <div className='item-div'>
                    <h3>•Content management including post creation, image editing, post scheduling and caption making</h3>
                    <h3>•Paid ads management including creative making, testing and scheduling</h3>
                  </div>
            
                </div>
              </div>   
            </li>

            <li id="carousel__slide2" className="carousel__slide">   
                <a href="#carousel__slide1"
                  className="carousel__prev"></a>
                <a href="#carousel__slide3"
                  className="carousel__next"/>

              <div className='content-div'>
                <p><h2>Movate - Chat Technical Support Engineer</h2></p>
                
                <div className='place-date-div'>    
                  <p><h3>Taguig</h3></p>  
                  <p><h3>December 2022 - April 2023</h3></p>
                </div>

                <div className='xp-text-div'>
                  <p><h3>Job Responsibility</h3></p><br/>
                  <div className='item-div'>
                    <h3>•Provide assistance not limited to appointment, billing, internet troubleshooting, app concern, and other related inquiry 
                        via chat</h3>
                  </div>
                </div>
              </div>
            </li>

            <li id="carousel__slide3" className="carousel__slide">   
                <a href="#carousel__slide2"
                  className="carousel__prev"></a>
                <a href="#carousel__slide4"
                  className="carousel__next"/>

                <div className='content-div'>
                <p><h2>Aventus Medical Care Inc - Database Administrator</h2></p>
                
                <div className='place-date-div'>  
                  <p><h3>Makati</h3></p>  
                  <p><h3>February 2021 - August 2022</h3></p>
                </div>

                <div className='xp-text-div'>
                  <p><h3>Job Responsibility</h3></p><br/>
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
                <a href="#carousel__slide3"
                  className="carousel__prev"></a>
                <a href="#carousel__slide1"
                  className="carousel__next"/>

              <div className='content-div'>
                <p><h2>First Life Financial Co Inc - POSS Assistant</h2></p>
               
                <div className='place-date-div'>  
                  <p><h3>Makati</h3></p>  
                  <p><h3>March 2020 - August 2020</h3></p>
                </div>
                
                <div className='xp-text-div'>
                  <p><h3>Job Responsibility</h3></p><br/>
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
                  className="carousel__navigation-button" id='nav1'></a>
              </li>
              <li className="carousel__navigation-item">
                <a href="#carousel__slide2"
                  className="carousel__navigation-button" id='nav2'></a>
              </li>
              <li className="carousel__navigation-item">
                <a href="#carousel__slide3"
                  className="carousel__navigation-button" id='nav3'></a>
              </li>
              <li className="carousel__navigation-item">
                <a href="#carousel__slide4"
                  className="carousel__navigation-button" id='nav4'></a>
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
