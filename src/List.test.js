import React from "react";
import ReactDOM from 'react-dom';
import List from './List';
// import  { render }  from "@testing-library/react";
import renderer from 'react-test-renderer';

describe('<List/>' , () => {
    it('Runs without crashing ', () => {
        const div = document.createElement('div')
        ReactDOM.render(<List key={1} header={'first'} cardIds={['a','b','c','d']}  />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
    it('renders <List/> snapshot', ()=>{
        const tree = renderer.create(<List key={1} header={'first'} cardIds={['a','b','c','d']} />).toJSON();

        expect(tree).toMatchSnapshot();
    }
    )
})