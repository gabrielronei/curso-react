import React, {Component} from 'react';

const TableHead = () => {
    return(
    <thead>
        <tr>
            <th>Autores</th>
            <th>Livros</th>
            <th>Preços</th>
            <th>Remover</th>
        </tr>
    </thead>);
}

const TableBody = props => {
    const rolls = props.authors.map((author) => {
        return (
            <tr key={author.id}>
                <td>{author.author}</td>
                <td>{author.book}</td>
                <td>{author.price}</td>
                <td><button className="waves-effect waves-light btn light-blue lighten-2" onClick = {() => {props.deleteAuthor(author.id)}}>Remover</button></td>
            </tr>
        );
    });

    return(
        <tbody>
            {rolls}
        </tbody>
    );
}

class Table extends Component {

    render() {

        const { authors, deleteAuthor } = this.props;
        console.log(authors);
        
        return (
        <table className="centered highlight">
            <TableHead></TableHead>
            <TableBody authors = { authors } deleteAuthor = { deleteAuthor }></TableBody>
        </table>);
    }



}

export default Table;