import React from "react";
import styles from "./TextField.css";

export default class TextField extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: props.label
        }
    }
    handleClick = (e) => {
        return(
            <input type = "text"/>
        );
    }

    render(){

        return(
          <div >
            <div onClick={this.handleClick}>{this.state.text}</div>
          </div>  
        );
    }
}