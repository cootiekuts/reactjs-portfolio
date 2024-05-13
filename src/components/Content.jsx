import React from 'react'

export default function Content() {

  return (
    <>
      <section id='top'>
        <div className='content-div'>
          <h2>BASIC INFORMATION</h2>

          <div className='image-div'>
            <img className='prof-img' src='img/prof-pic.jpg'/>
          </div>

          <div className='top-content-div'>
            <p><h3>Full Name: Bryle Christian Regencia</h3></p><br/>
            <p><h3>Addresses:</h3></p>
            <p><h3>Provincial: 178 Ilaya, Balanacan, Mogpog, Marinduque 4901</h3></p>
            <p><h3>Metro Manila: 822 P.Herrera, Aguho, Pateros, Metro Manila 1620</h3></p><br/>
            <p><h3>Contact Info:</h3></p>
            <p><h3>Mobile Number: +639158436060</h3></p>
            <p><h3>Email: rbrylechristian@gmail.com<a href="mailto:rbrylechristian@gmail.com" target='blank'><img className='icon-div' src="img/email-icon.png"/></a></h3></p> <br/>
            <p><h3>Socials:</h3><br/></p>
            <a href='https://www.facebook.com/bc.regencia' target="_blank"><img className='icon-div' src="img/fb-icon.png"/></a>
            <a href='https://www.linkedin.com/in/bryle-christian-regencia' target="_blank"><img className='icon-div' src="img/linkedin-icon.png"/></a>
          </div>
        </div>
      </section>

      <section id='xp'>
        <h2>EXPERIENCE</h2>
        
        <div class="carousel" aria-label="Gallery">
          <ol class="carousel__viewport"> 
            <li id="carousel__slide1" class="carousel__slide">   
                <a href="#carousel__slide4"
                  class="carousel__prev"></a>
                <a href="#carousel__slide2"
                  class="carousel__next"/>

              <div className='content-div'>
                <p><h2>Freelance - Social Media Manager</h2></p>
                
                <div className='place-date-div'>    
                  <p><h3>April 2023 - December 2023</h3></p>
                </div>

                <div className='xp-text-div'>
                  <p><h3>Job Responsibility:</h3></p><br/>
                  <ul className='list-div'>
                    <li><h3>Content management including post creation, image editing, post scheduling and caption making</h3></li>
                    <li><h3>Paid ads management including creative making, testing and scheduling</h3></li>
                  </ul>
                </div> 

              </div>   
            </li>

            <li id="carousel__slide2" class="carousel__slide">   
                <a href="#carousel__slide1"
                  class="carousel__prev"></a>
                <a href="#carousel__slide3"
                  class="carousel__next"/>

              <div className='content-div'>
                <p><h2>Movate - Chat Technical Support Engineer</h2></p>
               
                <div className='place-date-div'>  
                  <p><h3>Taguig</h3></p>  
                  <p><h3>December 2022 - April 2023</h3></p>
                </div>

                <div className='xp-text-div'>
                  <p><h3>Job Responsibility:</h3></p><br/>
                  <ul className='list-div'>
                    <li><h3>Provide assistance not limited to appointment, billing, internet troubleshooting, app concern, and other related inquiry 
                        via chat</h3></li>
                  </ul>
      
                </div>

              </div>
            </li>

            <li id="carousel__slide3" class="carousel__slide">   
                <a href="#carousel__slide2"
                  class="carousel__prev"></a>
                <a href="#carousel__slide4"
                  class="carousel__next"/>

              <div className='content-div'>
                <p><h2>Aventus Medical Care Inc - Database Administrator</h2></p>
               
                <div className='place-date-div'>  
                  <p><h3>Makati</h3></p>  
                  <p><h3>February 2021 - August 2022</h3></p>
                </div>

                <div className='xp-text-div'>
                  <p><h3>Job Responsibility:</h3></p><br/>
                  <ul className='list-div'>
                    <li><h3>Provide assistance not limited to appointment, billing, internet troubleshooting, app concern, and other related inquiry 
                        via chat</h3></li>
                  </ul>
      
                </div>

              </div>
            </li>

            <li id="carousel__slide4" class="carousel__slide">   
                <a href="#carousel__slide4"
                  class="carousel__prev"></a>
                <a href="#carousel__slide1"
                  class="carousel__next"/>

              <div className='content-div'>
                <p><h2>First Life Financial Co Inc - POSS Assistant</h2></p>
               
                <div className='place-date-div'>  
                  <p><h3>Makati</h3></p>  
                  <p><h3>March 2020 - August 2020</h3></p>
                </div>

                <div className='xp-text-div'>
                  <p><h3>Job Responsibility:</h3></p><br/>
                  <ul className='list-div'>
                    <li><h3>Provide assistance not limited to appointment, billing, internet troubleshooting, app concern, and other related inquiry 
                        via chat</h3></li>
                  </ul>
      
                </div>

              </div>
            </li>

          </ol>

          <aside class="carousel__navigation">
            <ol class="carousel__navigation-list">
              <li class="carousel__navigation-item">
                <a href="#carousel__slide1"
                  class="carousel__navigation-button"></a>
              </li>
              <li class="carousel__navigation-item">
                <a href="#carousel__slide2"
                  class="carousel__navigation-button"></a>
              </li>
              <li class="carousel__navigation-item">
                <a href="#carousel__slide3"
                  class="carousel__navigation-button"></a>
              </li>
              <li class="carousel__navigation-item">
                <a href="#carousel__slide4"
                  class="carousel__navigation-button"></a>
              </li>
            </ol>
          </aside>
        </div>
        
        {/* <div className='section-span'>

            <br/><p><h2>Movate - Chat Technical Support Engineer</h2></p>
            <p><h3>Taguig</h3></p> 
            <p><h3>December 2022 - April 2023</h3></p>
            <p><h3>Job Responsibility:</h3></p>
            <div className='list-div'>
              <ul>
                <li><p><h3>Provide assistance not limited to appointment, billing, internet troubleshooting, app concern, and other related inquiry 
                  via chat</h3></p></li>
              </ul>
            </div>
            <br/><p><h2>Aventus Medical Care Inc - Database Administrator/System Administrator</h2></p>
            <p><h3>Taguig</h3></p> 
            <p><h3>December 2022 - April 2023</h3></p>
            </div>
            <div className='col-2'>
              <p><h3>Job Responsibility:</h3></p>
              <div className='list-div'>
                <ul>
                  <li><p><h3>Provide assistance not limited to appointment, billing, internet troubleshooting, app concern, and other related inquiry 
                    via chat</h3></p></li>
              </ul>
            </div>  
            </div>
          </div>
        </div> */}
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
      <section id='reso'>
        <div className='section-span'>
          <h2>RESOURCE AND CREDIT</h2>
        </div> 
      </section>
      </>  
  )
}
