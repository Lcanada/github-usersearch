import React from 'react';
import Card from '../components/card';

export default function Cardlist(props){
  return(
    <div>
      {props.cards.map(card => <Card {...card} />)}
    </div>
  )
}
