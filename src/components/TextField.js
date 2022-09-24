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
        console.log(this)
    }

    render(){

        return(
          <div className="text-field">
            <div onClick={this.handleClick}>{this.state.text}</div>
          </div>  
        );
    }
}