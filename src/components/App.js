import React, { Component } from "react";
import TextField from "./textField.js";
export default class App extends Component{
    constructor(){
        super();
        this.state = {
            name: "Your Name",
            occupation: "Occupation",
        }
    }
    
    render(){
        
        return(
            <div>
                <TextField label = {this.state.name}/>
                <TextField label = {this.state.occupation}/>
            </div>
        )
    }
}
