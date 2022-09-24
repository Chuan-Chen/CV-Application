import React from "react";
import "./TextField.css";

export default class TextField extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: props.label,
        }
    }

    render(){
        return(
          <div onClick={this.props.handleOnClick} className="text-field">
            <div>{this.state.text}</div>
          </div>
        );
    }
}