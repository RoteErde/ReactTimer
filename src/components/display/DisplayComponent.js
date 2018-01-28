import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import './DisplayComponent.css';


/**
 * DisplayComponent
 * required props:
 *  click : to wire timer button callback 
 */
export class DisplayComponent extends Component{

    constructor(props){
        super(props);
        this.state = {'ButtonText':"Start"}
    }

    handleTimerStartStop(){
        
        switch(this.state.ButtonText){
            case "Start":
                this.setState({"ButtonText":"Pause"});
                this.props.sendMessage("start");
                break;
            case "Resume":
                console.log("resuming");
                this.setState({"ButtonText":"Pause"});
                this.props.sendMessage("start");       
                break;
            case "Pause":
                this.setState({"ButtonText":"Resume"});
                this.props.sendMessage("pause");
                break;

        }
        
    }
    clearTimer(){
        this.setState({"ButtonText":"Start"});
        this.props.sendMessage("clear")
    }

    render(){
        return(
            <div>
                 <AppBar
                    title="Task Timer"
                />
                <div id="appbody" className="divTimer">
                    <h1>{this.props.timer}</h1>
                </div>

                <div className="divComponentCenter">
                    <div>
                            <RaisedButton label={this.state.ButtonText} secondary={true} onClick={this.handleTimerStartStop.bind(this)}  />
                    </div>
                </div>
                <div className="divComponentRight">
                            <RaisedButton label="Stop" primary={true} onClick={this.clearTimer.bind(this)} />
                </div>
                
                 
            </div>
        );
    }
}

