import React from 'react'
import {Image} from './Image'
export function SkillBar(label) {
  return (
    <div key={label.key}>
      <div style={{display: "flex", flexFlow:"column"}}>
        <h3>{label.label}</h3>
        <Image link ={label.link} imgWidth={label.imgWidth} imgHeight={label.imgHeight} shadow={label.shadow}/>
        
      </div>
      <div className='skill-bar-div' 
      style={{display: "flex", backgroundColor: "hsl(148, 100%, 10%)", width: "30vw", borderRadius: "50px", boxShadow: "1px 1px 2.1vh black", border: "2px solid white", placeItems:"center"}}>
          <div className='skill-rate-div' style={{display: "flex", backgroundColor: "hsl(148, 100%, 45%)", width: label.width, height: "max", borderRadius: "50px", justifyContent:"right"}}>  
            <h3> {label.width}</h3>
          </div>
      </div>
    </div>
  )
}
