import React from 'react'

export function Image(label) {
  return (
    <img src={label.link}
    style={{isolation:"isolate", padding: "4px", backgroundColor:"whitesmoke", width: label.imgWidth, height: label.imgHeight, margin: "4px",  loading: "lazy", boxShadow:label.shadow , border: "1px solid black", borderRadius: "4px"}}/>
  )
}
