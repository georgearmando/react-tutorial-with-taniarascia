import React, { Component } from 'react'

import Table from './Table'
import Form from './Form';

class App extends Component{

    //Instrucao para a criacao de state
    state = {
        characters : []
    }

    //Metodo para remover um caracter do estado
    //E passado o indece do caracter como parametro
    removeCharacter = index => {

        //Atribuimos a variavel caracter o valor do estado
        const {characters} = this.state

        //Actualizamos o estado criando um novo array characters
        //Contendo todos os indices filtrados do array characters
        //Excepto o que foi passado como parametro
        this.setState({
            characters : characters.filter((characters, i) => {
                return i !== index
            })
        })
    }

    //Este metodo usa a sintaxe spreed do JS 
    //Para expandir ou adicionar os novos caracteres ao estado de caracteres
    handleSubmit = character => {
        this.setState({characters : [...this.state.characters, character]})
    }

    render(){

        const {characters} = this.state

        return(
            <div className='container'>
                <Table 
                    characterData={characters} 
                    removeCharacter={this.removeCharacter} 
                />
                <Form handleSubmit={this.handleSubmit}/>
            </div>
        );
    }
}

export default App