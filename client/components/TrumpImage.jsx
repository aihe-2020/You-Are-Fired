import React from 'react'

import trumpPhotos from '../horriblePictures'


export default function TrumpImage(props) {
 

  let num = (Math.floor(Math.random() * 7))
  let img = trumpPhotos[num]
  console.log(num)
  console.log(img) 
  return (
     <img width='500px' src={img} />
     


  )   
}

 
//use set state to call image link
// use onCLick button event to change
