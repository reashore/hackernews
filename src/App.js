import React, {Component} from 'react';
import './App.css';
import Search from './Search';
import Table from './Table';
import Button from './Button';
import {
    DefaultQuery,
    DefaultHitsPerPage,
    PathBase,
    PathSearch,
    ParamSearch,
    ParamPage,
    ParamHitsPerPage
} from './Constants';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            result: null,
            searchTerm: DefaultQuery
        };

        this.onDismiss = this.onDismiss.bind(this);
        this.onSearchChange = this.onSearchChange.bind(this);
        this.setSearchTopStories = this.setSearchTopStories.bind(this);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
        this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        //console.log("getDerivedStateFromProps");
        return null;
    }

    componentDidMount() {
        //console.log("componentDidMount");
        const {searchTerm} = this.state;
        this.fetchSearchTopStories(searchTerm);
    }

    shouldComponentUpdate(nextProps, nextState) {
        //console.log("shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(nextProps, nextState) {
        //console.log("getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        //console.log("componentDidUpdate");
    }

    componentWillUnmount() {
        //console.log("componentWillUnmount");
    }

    componentDidCatch(error, info) {
        //console.log("componentDidCatch");
    }
    
    onDismiss(id) {
        const isNotId = item => item.objectID !== id;
        const updatedHits = this.state.result.hits.filter(isNotId);
        this.setState({
            //result: Object.assign({}, this.state.result, {hits: updatedHits})
            result: {...this.state.result, hits: updatedHits}
        });
    }

    onSearchChange(event) {
        this.setState({searchTerm: event.target.value});
    }

    setSearchTopStories(result) {
        const {hits, page} = result;

        const oldHits = page !== 0 ? this.state.results.hits : [];

        const updatedHits = [...oldHits, ...hits];

        this.setState({
            result: {hits: updatedHits, page: page}
        });
    }

    onSearchSubmit(event) {
        const {searchTerm} = this.state;
        this.fetchSearchTopStories(searchTerm);
        event.preventDefault();
    }

    fetchSearchTopStories(searchTerm, page = 0) {
        let queryString = `?${ParamSearch}${searchTerm}`;
        queryString += `&${ParamPage}${page}`;
        queryString += `&${ParamHitsPerPage}${DefaultHitsPerPage}`;

        const url = `${PathBase}${PathSearch}${queryString}`;
        console.log(url);

        fetch(url)
            .then(response => response.json())
            .then(result => this.setSearchTopStories(result))
            .catch(error => error);
    }
    
    render() {
        const {searchTerm, result} = this.state;
        const page = (result && result.page) || 0;
        
        return (
            <div className="page">
                <div className="interactions">
                    <Search value={searchTerm} onChange={this.onSearchChange}
                            onSubmit={this.onSearchSubmit}>Search</Search>
                </div>

                {result ? <Table list={result.hits} onDismiss={this.onDismiss}/> : null}

                <div className="interactions">
                    <Button onClick={() => this.fetchSearchTopStories(searchTerm, page + 1)}>
                        More
                    </Button>
                </div>
            </div>
        );
    }
}
    
export default App;
