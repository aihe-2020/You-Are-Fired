import React from 'react'

import kanyePhotos from '../horriblePictures'


export default function KanyeImage(props) {
 

  let num = (Math.floor(Math.random() * 7))
  let img = kanyePhotos[num]
  console.log(num)
  console.log(img) 
  return (
     <img src={img} />
     


  )   
}