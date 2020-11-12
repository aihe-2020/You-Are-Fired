import React from 'react'
import Quote from './Quote'


import { getQuote } from '../api'

class App extends React.Component {

  state = {
   quote:''
  }

  componentDidMount () {
    getQuote()
      .then(res => {this.setState({ quote: res.value })
      })
      // advice()
      // .then(res => this .setState({advice: res.advice}))

  }
  render() {
    
    return(
      <div>
      <h1>You're Fired!</h1>   
      
     <h4>{this.state.quote}</h4>
     
     

     </div>

    )
  }
}



export default App
