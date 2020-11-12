import request from 'superagent'



const serverURL = 'http://localhost:3000/api/v1'
const trumpURL = 'http://tronalddump.io/random/quote'

export function getQuote() {
  return request
  .get(trumpURL)
  .then(response => {
    
    return response.body
    })
}

