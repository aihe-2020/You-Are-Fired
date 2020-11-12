import request from 'superagent'



const serverURL = 'http://localhost:3000/api/v1'
const trumpURL = 'http://tronalddump.io/random/quote'
const kanyaURL = 'https://api.kanye.rest/?format=text'



export function getDonQuote() {
  return request
  .get(trumpURL)
  .then(response => {
    
    return response.body
    })
}

export function getKanyeQuote(){

 
    return request
    .get('https://api.kanye.rest?format=text')
    .then(response =>{
      console.log(response.text)
      return response.text
    })
}