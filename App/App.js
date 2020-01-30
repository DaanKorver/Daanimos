import React from 'react';
import Pizza from './components/Pizza';

export default function App() {

  return (
      <div>
        <Pizza flavour="hawaii" price={10}></Pizza>
        <Pizza flavour="Salami" price={7}></Pizza>
        <Pizza flavour="Margarita" price={15}></Pizza>
        <Pizza flavour="Nog iets" price={10}></Pizza>
      </div>
  );
}