import React from 'react'

// import kanyePhotos from '../horriblePictures'

const kanyePhotos =
[
   'https://media.vanityfair.com/photos/54fb177febd1a8c7648a0b4f/master/w_768,c_limit/kanye-lorde-paris-large-465371786.jpg',
   'https://cdnph.upi.com/sv/ph/og/upi/2741595250181/2020/3/2516ddeede9e41d5efcbc0fcc29c6ee4/v1.5/Kanye-West-wears-bulletproof-vest-at-1st-presidential-campaign-rally.jpg',
   'https://www.mediaite.com/wp-content/uploads/2020/07/Kanye-West-GettyImages-1051901542.jpg',
   'https://i.dailymail.co.uk/i/pix/2015/02/27/261EA6FD00000578-0-image-a-1_1424999072691.jpg',
   'https://bossip.files.wordpress.com/2014/07/kanye-furcoat.jpg?w=700',
   'https://www.nairaland.com/attachments/10702908_5dedf8532d341_jpeg_jpeg4f04d6f0ae1f3a916553d7e76bc48a5f',
   'https://img.srgcdn.com/e/QTA0V2JjU1B5cjFsamR1NXFRdnAuanBn.jpg',
   'https://www.ksat.com/resizer/fZwrKnZ_lWmfIkAro-aKtu-BNa8=/1280x720/smart/filters:format(jpeg):strip_exif(true):strip_icc(true):no_upscale(true):quality(65)/cloudfront-us-east-1.images.arcpublishing.com/gmg/DGSQDYBSNBGEBH5NRTATZ3UU2U.jpg',
   'https://media4.s-nbcnews.com/j/newscms/2019_50/1517640/kanye-silver-body-paint-today-main-191209_5f6aae15303de183f6e314f88c99029c.social_share_1200x630_center.jpg',
   'https://www.sohh.com/wp-content/uploads/2018/09/Kanye-West-3.jpg'
]
    

export default function KanyeImage(props) {
 

  let num = (Math.floor(Math.random() * 10))
  let img = kanyePhotos[num]
  console.log(num)
  console.log(img) 
  return (
     <img width='500px' src={img} />
     


  )   
}