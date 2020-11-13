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
  
  }
 

   //functions to change state
    refresh = (e) => {
      e.preventDefault
       getDonQuote() 
      .then(res => { this.setState({ donQuote: res.value }) }) 
      getKanyeQuote() 
      .then(res => { this.setState({ kanyeQuote: res.quote }) }) 
    }
  
    // refreshKayne = (e) => {
    //   //make random number
    //   console.log('kanye')
    //   e.preventDefault
    //    getKanyeQuote() 
    //   .then(res => { this.setState({ kanyeQuote: res.quote }) }) 
    // }




  render() {

    return (
    <div>
      <h1>You're Fired!</h1>
      <div class='wrapper'>


        <div class='card'>
          <h4>{this.state.donQuote}</h4>
          <div class='image'>
            <TrumpImage />
          </div>
          
          {/* <input type='submit' onClick={this.refreshDon} /> */}
        </div>
        <div class='card'>
          <h4>{this.state.kanyeQuote}</h4>
          <div class='image'>
            <KanyeImage />
          </div>
        </div>
        <br/> 
        
      </div>
      <button onClick={this.refresh}>More BS!</button>
    </div>
  
  )
  }
}



export default App
