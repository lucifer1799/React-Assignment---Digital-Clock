import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {

    render() {
      const time=new Date().toLocaleTimeString()

        return(
            <div className='Clock'>
              <h3 id='time'>{time}</h3>
               
            </div>
        )
    }
}


export default App;
