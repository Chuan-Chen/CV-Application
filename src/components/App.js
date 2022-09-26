import React, { Component } from "react";
import TextField from "./textField.js";
import Footer from "./Footer.js";
import Popup from "./Popup.js";
import "./App.css";
export default class App extends Component{
    constructor(){
        
        super();
        this.state = {
            clicked: "",
            picture: "picture",
            name: "name",
            occupation: "occupation",
            skills: "skills",
            show: false,
            x: 0,
            y: 0,
        }
    }



    handleClick = async (e) => {
        let signal = this.state.show;
        this.setState({x: e.clientX, y: e.clientY, show: !signal, clicked: e.target}); 
        console.log(this.state)
        //console.log(this.state.x, this.state.y)
        //console.log(this.state.show);
    }
    
    handleDescription(element, description){
        element.textContent = description;
    }


    render(){

        return(
        <div>
            <Popup onChangeClick={this.handleClick} x={this.state.x} y={this.state.y} popupClass={`popup-${this.state.show}`} changeDescription = {this.handleDescription} clickedElement = {this.state.clicked}/>
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
