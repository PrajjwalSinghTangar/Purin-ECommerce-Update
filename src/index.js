import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter } from "react-router-dom";

import { UserProvider } from "./contexts/user.context";
import { ProductsProvider } from './contexts/products.context';
import { CartProvider } from './contexts/cart.context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <HashRouter>
            <UserProvider>
                        <ProductsProvider>
                              <CartProvider>
                                    <App />
                              </CartProvider>
                        </ProductsProvider>
            </UserProvider>
      </HashRouter>
);
