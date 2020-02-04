import React from 'react';
import ProductList from './components/ProductList';
import { View } from 'react-native';
import {ProductProvider} from "./context";
import Cart from "./components/Cart/Cart";


export default function App() {

  return (
      <ProductProvider>
        <ProductList></ProductList>
      </ProductProvider>
  );
}