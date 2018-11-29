import React from "react";
import Button from './Button.js';

const largeColumn = {
    width: '40%'
};

const mediumColumn = {
    width: '40%'
};

const smallColumn = {
    width: '40%'
};

const isSearched = searchTerm => item => item.title.toLowerCase().includes(searchTerm.toLowerCase());

const Table = ({list, pattern, onDismiss}) =>
    <div className="table">
        {list.filter(isSearched(pattern)).map(item =>
            <div key={item.objectId} className="table-row">
                <span style={largeColumn}>
                    <a href={list.url}>{item.title}</a>
                </span>
                <span style={mediumColumn}>{item.author}</span>
                <span style={smallColumn}>{item.num_comments}</span>
                <span style={smallColumn}>{item.points}</span>
                <span style={smallColumn}>
                    <Button onClick={() => onDismiss(item.objectId)} className="button-inline">Dismiss</Button>
                </span>
            </div>
        )}
    </div>;

export default Table;
    