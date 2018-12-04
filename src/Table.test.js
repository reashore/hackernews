import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Table from "./Table";

describe('Table Tests', () => {

    const props = {
        list: [
            {title: '1', author: '1', num_comments: 1, points: 2, objectId: 'x'},
            {title: '2', author: '2', num_comments: 2, points: 3, objectId: 'y'}
        ]
    };

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Table {...props}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    test('has a valid snapshot', () => {
        const component = renderer.create(<Table {...props}/>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
