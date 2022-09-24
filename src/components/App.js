import React, { Component } from "react";
import TextField from "./textField.js";
import Footer from "./Footer.js";
import "./App.css";
export default class App extends Component{
    constructor(){
        super();
        this.state = {
            picture: "picture url",
            name: "Your Name",
            occupation: "Occupation",
            skills: "skills",
        }
    }
    
    render(){
        
        return(
            <div className="container">
                <div className="content-body">
                    <TextField label = {this.state.picture}/>
                    <TextField label = {this.state.name}/>
                    <TextField label = {this.state.occupation}/>
                    <TextField label = {this.state.skills}/>
                </div>
                <Footer/>
            </div>
           
        )
    }
}
