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
        let popupwindow = document.querySelector("#popup-text");
        return (
            <div className ={this.props.popupClass}>
                <div onClick = { (e) => {
                    this.props.onChangeClick(e);
                    this.props.changeDescription(this.props.clickedElement , popupwindow.value);
                    popupwindow.value = "";    
                }
                } className = "background" ></div>
                <input id= "popup-text"type="text" className= "inputField" style ={{top: this.props.y, left: this.props.x}} placeholder={this.props.clickedElement.innerText} onKeyDown={(e)=> {
                    console.log(e); 
                    if(e.key === "Enter"){
                        this.props.changeDescription(this.props.clickedElement, popupwindow.value);
                        this.props.onChangeClick(e);
                    }
                    }}/>
            </div>
        );
    }
}