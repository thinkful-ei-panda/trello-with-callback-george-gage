import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('<App/>' , () => {
  it('Runs without crashing ', () => {
      const div = document.createElement('div')
      ReactDOM.render(<App id="a" content="lorem ipsum" title="eh"  />, div);
      ReactDOM.unmountComponentAtNode(div);
  })
})