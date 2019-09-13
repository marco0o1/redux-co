import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../components/Home';
import Item from '../components/shopping/Item';
import Cart from '../components/cart/Cart';
import OrderStatus from '../components/footer/OrderStatus';
import ReturnsExchanges from '../components/footer/Returns-Exchanges';
import Contact from '../components/footer/contact/contact';

export const Routes = <div>
            <Route exact path="/" component={ Home } />
            <Route path="/products" component={ Item }/>
            <Route path="/cart" component={ Cart } />
            <Route path="/order-status" component={ OrderStatus } />
            <Route path="/returns-exchanges" component={ ReturnsExchanges } />
            <Route path="/contact" component={ Contact } />
            </div>