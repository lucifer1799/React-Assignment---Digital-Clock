import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {

  constructor(){
    super();
    this.state={
      time:'',
      intervalId:''
    }
  }
  componentDidMount(){
    let intervalId = setInterval(()=>{
      const mytime=new Date().toLocaleTimeString()
      this.setState({
        time: mytime,
      })

    },1000)
    this.setState({ intervalId: intervalId })

  }
  componentWillUnmount(){
    clearInterval(this.state.intervalId)
  }
  

    render() {

        return(
            <div className='Clock'>
              <h3 id='time'>{this.state.time}</h3>
               
            </div>
        )
    }
}


export default App;
