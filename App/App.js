import React from 'react';
import ProductList from './components/ProductList';
import {ProductProvider} from "./context";


export default function App() {

  return (
      <ProductProvider>
        <ProductList></ProductList>
      </ProductProvider>
  );
}