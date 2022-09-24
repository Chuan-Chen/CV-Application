import React from "react";
import "./Popup.css";
export default class Popup extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            show: this.props.show,
        }
    }
    checkDisplay(display){
        if(display) this.setState({show: ""})

    }
    render(){
        return (
            <div onClick = {() => {this.setState({show: false})}} className ="popup">
                <div className = "background" ></div>
                <input type="text" style ={{zIndex: 3, position: "absolute", top: this.props.y, left: this.props.x, display: this.checkDisplay(this.state.show)}}/>
            </div>
            
        );
    }
}