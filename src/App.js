import React, {Component} from 'react';
import './App.css';

import list from './AppData.js';

const isSearched = searchTerm => item => item.title.toLowerCase().includes(searchTerm.toLowerCase());

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
            <div className="App">
                <Search value={searchTerm} onChange={this.onSearchChange}>Search</Search>
                <Table list={list} pattern={searchTerm} onDismiss={this.onDismiss}/>
            </div>
        );
    }
}

const Search = ({value, onChange, children}) =>
    <form>
        {children}
        <input type="text" value={value} onChange={onChange}/>
    </form>;

const Table = ({list, pattern, onDismiss}) =>
    <div>
        {list.filter(isSearched(pattern)).map(item =>
            <div key={item.objectId}>
                        <span>
                            <a href={list.url}>{item.title}</a>
                        </span>
                <span>{item.author}</span>
                <span>{item.num_comments}</span>
                <span>{item.points}</span>
                <span>
                            <Button onClick={() => onDismiss(item.objectId)}>Dismiss</Button>
                        </span>
            </div>
        )}
    </div>;

const Button = ({onClick, className = '', children}) =>
    <button onClick={onClick} className={className} type='button'>{children}</button>;
    
export default App;
