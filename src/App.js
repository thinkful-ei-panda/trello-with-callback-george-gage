import React from 'react';
import List from './List';
import STORE from './store';
import './App.css';

function App() {
  return (
    <main className="App">
    <header className="App-header">
      <h1>Trelloyes!</h1>
    </header>
    <div className="App-list">
      {STORE.lists.map(listItem => (
        <List key={listItem.id} header={listItem.header} cardIds={listItem.cardIds} />
      ))}
      </div>
  </main>
  );
}

export default App;