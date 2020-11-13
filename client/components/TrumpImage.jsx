import React from 'react'

import trumpPhotos from '../horriblePictures'


export default function TrumpImage(props) {
 

  let num = (Math.floor(Math.random() * 12))
  let img = trumpPhotos[num] 
  return (
     <img width='500px' src={img} />
     
  )   
}


