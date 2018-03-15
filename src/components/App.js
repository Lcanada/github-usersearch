import React, { Component } from 'react';
import Form from '../components/form';
import Cardlist from '../components/card_list';
import axios from 'axios';

class App extends Component {
  state = {
    cards: []
  };

  addNewCard = cardInfo => {
    this.setState(prevState => ({
      cards: prevState.cards.concat(cardInfo)
    }));
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.addNewCard} />
        <Cardlist cards={this.state.cards} />
      </div>
    );
  }
}

export default App;
