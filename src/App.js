import React, {Component} from 'react';
import './App.css';

import list from './AppData.js';
import Search from './Search';
import Table from './Table.js';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: list,
            searchTerm: ''
        };

        this.onDismiss = this.onDismiss.bind(this);
        this.onSearchChange = this.onSearchChange.bind(this);
    }

    onDismiss(id) {
        const isNotId = item => item.objectId !== id;
        const updatedList = this.state.list.filter(isNotId);
        this.setState({list: updatedList});
    }

    onSearchChange(event) {
        this.setState({searchTerm: event.target.value});
    }

    render() {
        const {searchTerm, list} = this.state;
        return (
            <div className="page">
                <div className="interactions">
                    <Search value={searchTerm} onChange={this.onSearchChange}>Search</Search>
                </div>
                
                <Table list={list} pattern={searchTerm} onDismiss={this.onDismiss}/>
            </div>
        );
    }
}
    
export default App;
