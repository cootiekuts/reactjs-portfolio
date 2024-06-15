import React from 'react'
import { BasicProfile } from './BasicProfile.jsx'
import { SectionTitle } from './SectionTitle.jsx'
import { Carousel } from './Carousel.jsx'
import { SkillBar } from './SkillBar.jsx'
import {Image} from "./Image"

export default function Content({contactInfo,linkInfo, resourceInfo}) {
  const basicInfo = { 
    name:'Bryle Christian Regencia',
    mobNum: '09158436060',
    emailAdd:'rbrylechristian@gmail.com',
        // provAdd: '178 Ilaya, Balanacan, Mogpog, Marinduque 4901',
        // cityAdd: '822 P.Herrera, Aguho, Pateros, Metro Manila 1620',
  }
 
  function h2Text(text) {
    return(
    <p><h2>{text}</h2></p>
    )
}

function h3Text(text) {
    return(
        <p><h3>{text}</h3></p>
        )
}

const skillInfo=[
  {label:'HTML', width:"90%", link:"img/html-icon.svg", imgWidth:"4vw", imgHeight:"4vh"},
  {label:'CSS', width:"90%", link:"img/css-icon.svg", imgWidth:"4vw", imgHeight:"4vh"},
  {label:'Javascript', width:"70%", link:"img/js-icon.png", imgWidth:"4vw", imgHeight:"4vh"},
  {label:'React JS', width:"70%", link:"img/react-icon.svg", imgWidth:"4vw", imgHeight:"4vh"},
  {label:'MS SQL Server 2019', width:"80%", link:"img/mssql-icon.png", imgWidth:"4vw", imgHeight:"4vh"},
  {label:'MS SQL Server Management Studio', width:"90%", link:"img/ssms-icon.png", imgWidth:"4vw", imgHeight:"4vh"},
  {label:'Hyper-V', width:"80%", link:"img/hv-icon.png", imgWidth:"4vw", imgHeight:"4vh"},
  {label:'VMWare (ESXi, VSphere)', width:"80%", link:"img/vmware-icon.jpg", imgWidth:"25%", imgHeight:"4vh"},
  {label:'Windows Server 2019', width:"80%", link:"img/ws-icon.png", imgWidth:"25%", imgHeight:"4vh"},
]

const imageDimension={
  imgWidth:'15vw', 
  imgHeight:'25vh', 
  shadow:"1px 1px 2.1vh black",
}

const {imgWidth, imgHeight, shadow,}=imageDimension

const abtImageInfo=[
  {link:'img/html-icon.svg', imgWidth:imgWidth, imgHeight:imgHeight, shadow:shadow},
  {link:'img/css-icon.svg', imgWidth:imgWidth, imgHeight:imgHeight, shadow:shadow},
  {link:'img/js-icon.png', imgWidth:imgWidth, imgHeight:imgHeight, shadow:shadow},
  {link:'img/react-icon.svg', imgWidth:imgWidth, imgHeight:imgHeight, shadow:shadow},
]
  return (
    
    <div className='main-content'>
      <section id='top'>
        <SectionTitle name="BASIC INFORMATION"/>
        <BasicProfile contactInfo={contactInfo} linkInfo={linkInfo} basicInfo={basicInfo}/>
      </section>
      
      <section id='xp'>
        <SectionTitle name="EXPERIENCE"/>
        <Carousel h2Text={h2Text} h3Text={h3Text}/>           
      </section>

      <section id='skill' >
        <SectionTitle name="SKILL"/>
        <div style={{display: "grid", gridTemplateColumns: "repeat(2, auto)", isolation: "isolate", placeItems: "center", rowGap: "3vh", marginTop: "4vh"}}>
          {skillInfo.map((skill, index) => 
            <SkillBar key={index} label={skill.label} width={skill.width} link={skill.link} imgWidth={skill.imgWidth} imgHeight={skill.imgHeight}/>
          )}
        </div>
      </section>
      
      <section id='about'>
        <SectionTitle name="ABOUT"/>   
        <div style={{height:"20%", display:'flex', placeContent:"center", flexFlow:"column", textAlign:"center"}}>
          {h3Text('I developed this website to learn web development bit by bit, to have a simple resume for my job hunting and basically to have "fun"')}          
          {h3Text("The tech I've used here is the combination of the following:")}
        </div>
        <div style={{display: 'flex', height:"70%", justifyContent:"center", placeItems:"center", gridGap:"10px"}}>
          {abtImageInfo.map((image, index) =>
            <Image key={index} link={image.link} imgWidth={image.imgWidth} imgHeight={image.imgHeight} shadow={image.shadow}/>
          )}
        </div>

      </section>  
      <section id='reso'>
        <SectionTitle name="RESOURCE AND CREDIT"/>
        <div className="resource-div">
          <ol className='resource-ol'>
            {resourceInfo.map((link, index) => 
              <li className='resource-li' >
                <a href={link.link} title={link.label} style={{ color:"blue"}} key={index}>{link.text == null ? link.label : link.text}</a>
              </li>
              )
            }
          </ol>
        </div>

      </section>
    </div>  
  )
}
