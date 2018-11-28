import React, {Component} from 'react';
import './App.css';

import list from './AppData.js';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: list
        };

        this.onDismiss = this.onDismiss.bind(this);
    }

    onDismiss(id) {
        const isNotId = item => item.objectId !== id;
        const updatedList = this.state.list.filter(isNotId);
        this.setState({list: updatedList});
    }

    render() {
        return (
            <div className="App">
                <form>
                    <input type="text"/>
                </form>
                {this.state.list.map(item =>
                    <div key={item.objectId}>
                        <span>
                            <a href={list.url}>{item.title}</a>
                        </span>
                        <span>{item.author}</span>
                        <span>{item.num_comments}</span>
                        <span>{item.points}</span>
                        <span>
                            <button type="button" onClick={() => this.onDismiss(item.objectId)}>Dismiss</button>
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
