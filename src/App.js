import React, { Component } from 'react';
import List from './List';
import STORE from './store'
import './App.css';

class App extends Component {

  // static defaultProps = {
  //   store : {
  //     lists : [],
  //     allCards : {},
  //   }
  // };
      

    state = STORE
    
    handleDeleteCard(){

      this.setState({})
        console.log('deleteCard is working :) ')
      }
    handleRandomCard(){
      console.log('RandomCard maker is working :) ')
    }
      
  render(){
    

    return (
    <main className="App">
    <header className="App-header">
      <h1>Trelloyes!</h1>
    </header>
    <div className="App-list">
      {state.lists.map(list => (
        <List
         key={list.id}
         header={list.header}
         cardIds={list.cardIds.map(id => state.allCards[id])}
         onDeleteCard = {this.handleDeleteCard}
         onRandomCard = {this.handleRandomCard}
         />
      ))}
      </div>
  </main>
  );
  }
  
}

export default App;