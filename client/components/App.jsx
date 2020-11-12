import React from 'react'
import Quote from './Quote'


import TrumpImage from './TrumpImage'
import { getQuote } from '../api'



class App extends React.Component {

  state = {
   quote:''
   
  }

  componentDidMount () {
    getQuote()
      .then(res => {this.setState({ quote: res.value })
      })
    // TrumpImage() 
    // .then() 


  }
  render() {
    
    return(
      <div>
      <h1>You're Fired!</h1>   
     
     <h4>{this.state.quote}</h4>
     <TrumpImage />
     

     </div>

    )
  }
}



export default App
