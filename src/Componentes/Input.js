import React, {Component} from 'react'

export default class Button extends Component {

    constructor(props){
        super(props); 
        this.meuTexto = this.meuTexto.bind(this); 
    }

    meuTexto(event){
        console.log(event.target.value)
    }

    render(){
        return(
            <input type="text"
            onChange={this.meuTexto}
            >
                {this.props.children}

            </input>
        ); 
    }


}