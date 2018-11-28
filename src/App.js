import React, {Component} from 'react';
import './App.css';

const list = [
    {
        title: 'React',
        url: 'https://reactjs.org',
        author: 'Jordan Walke',
        num_comments: '3',
        points: 4,
        objectId: 0
    },
    {
        title: 'Redux',
        url: 'https://redux.js.org',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: '2',
        points: 4,
        objectId: 0
    },

];

class App extends Component {
    render() {
        const message = 'This is a short message';
        return (
            <div className="App">
                <h2>{message}</h2>
            </div>
        );
    }
}

export default App;
