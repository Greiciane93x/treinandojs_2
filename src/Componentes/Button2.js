import React, {Component} from 'react' 

export default class Button2 extends Component {
    constructor(props){
        super(props); 
        this.botaoDesabilita = this.botaoDesabilita.bind(this)
        this.state = {
            meuBotao : false
        }
    }

    botaoDesabilita = () => {
        setTimeout(() => {
            this.setState({
                meuBotao: !this.state.meuBotao 
            })
            console.log(this.state.meuBotao)
        }, 3000)
    }
    

  

    render(){
        return (
            this.state.meuBotao === true ? 
            <button disabled
            onClick={this.botaoDesabilita }>Clique Aqui</button> 
            : 
            <button 
            onClick={this.botaoDesabilita }>Clique Aqui</button> 


        );
    }
}