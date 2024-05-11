import React from 'react'

export default function Content() {
  
  function openEmailClient() {
    var recipient = 'rbrylechristian@gmail.com';
    var subject = 'Subject of the email';
    var body = 'Body of the email';

    var mailtoLink = 'mailto:' + recipient + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

    ;
  }

  return (
    <>
      <section id='top'>
        <div className='section-span'>
          <h2>BASIC INFORMATION</h2>
          <div className='image-div'>
            <img className='prof-img' src='img/ooga.png'/>
          </div>
          
          <p><h3>Full Name: Bryle Christian Regencia</h3></p>
          <p><h3>Addresses:</h3></p>
          <div className='list-div'>
            <ul>
              <li><p><h3>Provincial: 178 Ilaya, Balanacan, Mogpog, Marinduque 4901</h3></p></li>
              <li><p><h3>Metro Manila: 822 P.Herrra, Aguho, Pateros, Metro Manila 1620</h3></p></li>
            </ul>
          </div>
          <p><h3>Contact Info:</h3></p>
          <div className='list-div'>
            <ul>
              <li><p><h3>Mobile Number: +639158436060</h3></p></li>
              <li><p><h3>Email: rbrylechristian@gmail.com<a href="mailto:rbrylechristian@gmail.com" target='blank'><img className='icon-div' src="img/email-icon.png"/></a></h3></p></li>
            </ul>
          </div>
          <p><h3>Socials:</h3><br/></p>
          <a href='https://www.facebook.com/bc.regencia' target="_blank"><img className='icon-div' src="img/fb-icon.png"/></a>
          <a href='https://www.linkedin.com/in/bryle-christian-regencia' target="_blank"><img className='icon-div' src="img/linkedin-icon.png"/></a>
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
      </>  
  )
}
