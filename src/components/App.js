import React, { Component } from "react";
import TextField from "./textField.js";
import Footer from "./Footer.js";
import Popup from "./Popup.js";
import "./App.css";
export default class App extends Component{
    constructor(){
        
        super();
        this.state = {
            picture: "picture url",
            name: "Your Name",
            occupation: "Occupation",
            skills: "skills",
            show: false,
            x: 0,
            y: 0,
        }
    }
    handleClick = (e) => {
        let signal = this.state.show;

        this.setState({x: e.clientX, y: e.clientY, show: !signal}); 
        console.log(this.state.x, this.state.y)
        console.log(this.state.show);
    }
    
    render(){

        return(
        <div>
            <Popup x={this.state.x} y={this.state.y} show={this.state.show} />
            <div className="container">
                <div className="content-body">
                    <TextField handleOnClick={this.handleClick} label = {this.state.picture}/>
                    <TextField handleOnClick={this.handleClick} label = {this.state.name}/>
                    <TextField handleOnClick={this.handleClick} label = {this.state.occupation}/>
                    <TextField handleOnClick={this.handleClick} label = {this.state.skills}/>
                </div>
                <Footer/>
                
            </div>
        </div>   
        )
    }
}
