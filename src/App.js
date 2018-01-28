import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';
import {DisplayComponent} from './components/display/DisplayComponent'
import {Timer} from './logic/timerlogic/timerlogic';
class App extends Component {
  
  
  constructor(props){
    super(props);
    this.tmer = new Timer(this.recieveFromChild.bind(this));
    this.state={hhmmss:'00:00:00'};
  }

  render() {
    return (
      <MuiThemeProvider>
        <DisplayComponent timer={this.state.hhmmss} sendMessage={this.tmer.onMessage.bind(this.tmer)}/>
      </MuiThemeProvider>
    );
    
  }

  recieveFromChild(event){
    if(event.seconds!==undefined){
      this.setState({hhmmss: event.seconds});
      }
  }


}



export default App;
