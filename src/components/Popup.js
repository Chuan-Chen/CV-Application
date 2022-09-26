import React from "react";
import "./Popup.css";
export default class Popup extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
           popupClass: this.props.popupClass,
        }
    }
    render(){
        return (
            <div className ={this.props.popupClass}>
                <div onClick = {this.props.onChangeClick} className = "background" ></div>
                <input type="text" className= "inputField" style ={{top: this.props.y, left: this.props.x}}/>
            </div>
        );
    }
}