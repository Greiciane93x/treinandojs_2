import React, {Component} from 'react'; 
import style from "./Button.module.css"; 

export default class Button extends Component {

    constructor(props){
        super(props); 
        this.meuClick = this.meuClick.bind(this); 
    }


    meuClick(event){
        console.log(event)
    }


    render(){
        return(
            <button 
            onClick={this.meuClick}
            style={this.props.style}
            className={style.btn}
            >
            
                {this.props.children}
            </button> 

        );      
    }
}

// type
// name
// htmlFor