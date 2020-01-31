import React from 'react';
import Pizza from './components/Pizza';


export default function App() {

  return (
      <div>
        <Pizza flavour="pizza-salami" price={7}></Pizza>
      </div>
  );
}