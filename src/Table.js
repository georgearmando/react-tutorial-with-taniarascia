import React, {Component} from 'react';

const TableHeader = () => {
    return(
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
}

//Passamos a props como parametro
const TableBody = props => {

    //Mapeamos o array para retornar uma linha da tabela para cada objecto do array
    const rows = props.characterData.map((row, index) => {
        return(
            //Usamos a key 'index' que e um indexe para identificar cada linha na lista
            //E boa pratica usar chaves ao criar listas no React para identificar cada item da lista
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                {/*Este Botao, ao ser clicado invocara a funcao removeCharacters
                como props adicionando o indice do iten selecionado como parametro
                que sera comparado com os demais na funacao e que retornara um novo
                array sem o item selecionado pois sera removido do array */}
                <td><button onClick={() => props.removeCharacter(index)}>Delete</button></td>
            </tr>
        )
    })

    return(
        <tbody>
            {rows}
        </tbody>
    )
}

class Table extends Component {

    render() {

        const {characterData, removeCharacter} = this.props

        return (
            <table>       
                <TableHeader />
                <TableBody characterData={characterData} removeCharacter={removeCharacter}/>
            </table>
        );
    }
}

export default Table;