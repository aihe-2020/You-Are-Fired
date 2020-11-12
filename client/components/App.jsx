import React from 'react'
import Quote from './Quote'


import { getDonQuote,getKanyeQuote } from '../api'

class App extends React.Component {

  state = {
   donQuote:'',
   kanyeQuote:''
  }
  componentDidMount () {
    // let donQuote = getQuote()
    getDonQuote()
    .then(res => {this.setState({donQuote: res.value})})
    // .then(res =>{this.setState({donQuote:res.value})})
    getKanyeQuote()
      .then(res => {this.setState({kanyeQuote:res.quote})})
      console.log(this.state)
      // .then(res =>{this.setState({kanyeQuote:res.value})})
    }
      // advice()
      // .then(res => this .setState({advice: res.advice}))

      // getKanyeQuote()
      // .then(res => {this.setState({ kanyeQuote: res.value })
      // }):kanyeQuote
      // getKanyeQuote()
      // .then(res =>{this.setState({kanyeQuote:res.value})})



  render() {

    return(
      <div>
      <h1>You're Fired!</h1>   
      
     <h4>{this.state.donQuote}</h4>
     <h4>****{this.state.kanyeQuote}</h4>
     

     </div>

    )
  }
}



export default App
