import React, { Component } from 'react'

//O objectivo deste formulario e actualizar o estado sempre que um campo for alterado
//Quando submetermos o formulario todos os dados passarao pelo estado do componente App
//E este actualizara o componente Table
class Form extends Component{

    //Criamos o construtor da classe 
    constructor(props){
        super(props)

        //Criar um estado inicial para ser um objecto com propriiedades vazias
        this.initialState = {
            name:'',
            job:''
        }

        this.state = this.initialState;
    }

    //Esta funcao sera executada sempre que uma alteracao for feita em uma entrada
    //O evento será transmitido
    //E definiremos o estado do formulário para ter o nome (chave) e o valor das entradas
    handleChange = event => {
        const { name, value } = event.target

        this.setState({
            [name] : value
        })
    }

    //Esta funcao passara o estado do form como parametro para o elemento pai
    //Vamos redefinir o estado inicial para limpar o formulario
    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    render(){

        //Pega as propriedades do estate e as utiliza como variaveis 
        //Para serem utilizadas como value dos inputs
        //Nos inputs chamamos o metodo handleChange no onChange
        //Para lidar com as mudancas nos inputs
        const {name,job} = this.state

        return(
            <form>
                <label>Name</label>
                <input type='text' name='name' value={name} onChange={this.handleChange}/>
                <label>Job</label>
                <input type='text' name='job' value={job} onChange={this.handleChange} />
                <input type='button' value="Submit" onClick={this.submitForm} />
            </form>
        )
    }
}

export default Form