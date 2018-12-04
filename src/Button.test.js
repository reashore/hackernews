import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from './App';
import Search from "./Search";

describe('Button Tests', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Button>Button</Button>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    test('has a valid snapshot', () => {
        const component = renderer.create(<Button>Button</Button>);
        const tree = component.ToJSON();
        expect(tree).ToMatchSnapshot();
    });
});
