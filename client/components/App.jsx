import React from 'react'




import { getDonQuote, getKanyeQuote } from '../api'

import TrumpImage from './TrumpImage'
import KanyeImage from './KanyeImage'





class App extends React.Component {

  state = {

    donQuote: '',
    kanyeQuote: ''




  }
  componentDidMount() {

    // let donQuote = getQuote()
    getDonQuote()
      .then(res => { this.setState({ donQuote: res.value }) })
    // .then(res =>{this.setState({donQuote:res.value})})
    getKanyeQuote()
      .then(res => { this.setState({ kanyeQuote: res.quote }) })
    console.log(this.state)
  
  }
 


   //functions to change state
    refreshDon = (e) => {
      e.preventDefault
       getDonQuote() 
      .then(res => { this.setState({ donQuote: res.value }) }) 
      console.log(this.state)
    }
  
    refreshKayne = (e) => {
      e.preventDefault
       getKanyeQuote() 
      .then(res => { this.setState({ kanyeQuote: res.quote }) }) 
      console.log(this.state)
    }




  render() {

    return (<div>
      <h1>You're Fired!</h1>
      <div class='wrapper'>


        <div class='card'>
          <h4>{this.state.donQuote}</h4>
          <div class='image'>
            <TrumpImage />
          </div>
          <button onClick={this.refreshDon}>More Trump!</button>
        </div>
        <div class='card'>
          <h4>{this.state.kanyeQuote}</h4>
          <div class='image'>
            <KanyeImage />
          </div>
          <button onClick={this.refreshKayne}>More Kanye!</button>
        </div>


      </div>
    </div>
    )
  }
}



export default App
