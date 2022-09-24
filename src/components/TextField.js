import React from "react";
import "./TextField.css";

export default class TextField extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: props.label
        }
    }
    handleClick = (e) => {
        console.log(e.clientX, e.clientY);
        
    }

    render(){

        return(
          <div onClick={this.handleClick} className="text-field">
            <div>{this.state.text}</div>
          </div>  
        );
    }
}