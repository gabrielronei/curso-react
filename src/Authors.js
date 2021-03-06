import React, {Fragment, Component} from 'react';
import Header from './Header';
import DataTable from './DataTable';
import ApiService from './ApiService';
import PopUp from './PopUp';

class Authors extends Component {
   
    constructor(props) {
        super(props);

        this.state = {
            authors : [
            ],

            title: 'Autores'
          };
    }

    componentDidMount() {
        ApiService.FindAuthorNames()
        .then(res => {
            if(res.status === 200) { 
                PopUp.showMessage('success', "Autores carregados com sucesso!");
                this.setState({authors: [...this.state.authors, ...res.data.data]})
            }
        }).catch(error => PopUp.showMessage('error', "Não foi possivel carregar os autores"));
    }

    render() {
        return (
            <Fragment>
                <Header/>
                <div className="container">
                    <h1 className="center">Autores</h1>
                    <div>
                        <DataTable data={this.state.authors} title={this.state.title} column={['author']}/>
                    </div>
                </div>
            </Fragment>

        );
    }
}

export default Authors;