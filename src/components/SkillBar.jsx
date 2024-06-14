import React from 'react'
import {Image} from './Image'
export function SkillBar(label) {
  return (
    <div key={label.key}>
      <span className='skill-description-span'>
        <h3>{label.label}</h3>
        <Image link ={label.link} imgWidth={label.imgWidth} imgHeight={label.imgHeight} shadow={label.shadow}/> 
      </span>
      <span className='skill-bar-span'>
          <span className='skill-rate-span' style={{width: label.width}}>  
            <h3> {label.width}</h3>
          </span>
      </span>
    </div>
  )
}
