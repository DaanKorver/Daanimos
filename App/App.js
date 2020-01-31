import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Pizza from './components/Pizza';


export default function App() {

  return (
      <div>
        <Pizza flavour="pizza-salami" price={7}></Pizza>
      </div>
  );
}