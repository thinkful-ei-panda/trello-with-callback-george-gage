import React, { Component } from 'react';
import List from './List';
import STORE from './store'
import './App.css';


const newRandomCard = () => {
        const id = Math.random().toString(36).substring(2, 4)
          + Math.random().toString(36).substring(2, 4);
        return {
          id,
          title: `Random Card ${id}`,
          content: 'lorem ipsum',
        }
      }

const omit = (obj, keyToOmit) => {
        return Object.entries(obj).reduce(
          (newObj, [key, value]) =>
              key === keyToOmit ? newObj : {...newObj, [key]: value},
          {}
        );
      }


class App extends Component {

  // static defaultProps = {
  //   store : {
  //     lists : [],
  //     allCards : {},
  //   }
  // };
      

    state = { val : STORE  }
    

    

    
      
    
   
        
    handleDeleteCard = ( id ) => {
      const {lists , allCards } = this.state.val ;

      const newLists = lists.map(list => ({
        ...list,
        cardIds : list.cardIds.filter(x => x !== id)
      }))

      const  newCards = omit(allCards, id )

      this.setState({
        val : {
          lists : newLists,
          allCards : newCards
        }
      })
    };

    handleRandomCard = ( id ) =>{

      const newCard = newRandomCard();

      const newLists = this.state.val.lists.map( l => {
      return  l.id === id ? 
        {
         ...l,
         cardIds: [...l.cardIds, newCard.id] 
        }
        : l ;
      })

      this.setState({
          val : {
            lists: newLists,
            allCards: {
              ...this.state.val.allCards,
              [newCard.id]: newCard
            }
          }
      })
    };

      
  render(){
    const {lists, allCards} = this.state.val
    console.log(lists)
    return (
    <main className="App">
    <header className="App-header">
      <h1>Trelloyes!</h1>
    </header>
    <div className="App-list">
      {lists.map(list => (
        <List
         key={list.id}
         id={list.id}
         header={list.header}
         cardIds={list.cardIds.map(id => allCards[id])}
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