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

class Search extends Component {
    render() {
        const {value, onChange, children} = this.props;
        return (
            <form>
                {children}
                <input type="text" onChange={onChange} value={value}/>
            </form>
        );
    }
}

class Table extends Component {
    render() {
        const {list, pattern, onDismiss} = this.props;
        return (
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
                            <button type="button" onClick={() => onDismiss(item.objectId)}>Dismiss</button>
                        </span>
                    </div>
                )}
            </div>
        );
    }
}

//
// class App extends Component {
//     render() {
//         return (
//             <div className="App">
//                 {list.map(item =>
//                     <div key={item.objectId}>
//                             <span>
//                                 <a href={list.url}>{item.title}</a>
//                             </span>
//                         <span>{item.author}</span>
//                         <span>{item.num_components}</span>
//                         <span>{item.points}</span>
//                     </div>
//                 )}
//             </div>
//         );
//     }
// }

// class App extends Component {
//     render() {
//         return (
//             <div className="App">
//                 {list.map(function (item) {
//                     return (
//                         <div key={item.objectId}>
//                             <span>
//                                 <a href={list.url}>{item.title}</a>
//                             </span>
//                             <span>{item.author}</span>
//                             <span>{item.num_components}</span>
//                             <span>{item.points}</span>
//                         </div>);
//                 })}
//             </div>
//         );
//     }
// }

//
// class App extends Component {
//     render() {
//         return (
//             <div className="App">
//                 {list.map(function(item) {
//                     return (<div>{item.title}</div>);
//                 })}
//             </div>
//         );
//     }
// }

//
// class App extends Component {
//     render() {
//         const message = 'This is a short message';
//         return (
//             <div className="App">
//                 <h2>{message}</h2>
//             </div>
//         );
//     }
// }

export default App;
