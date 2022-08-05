import {  
          Routes,
          Route,
          Navigate} from 'react-router-dom';
import './App.css';
import { Fragment, useContext} from "react";   

import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login.jsx';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';

import { UserContext } from "./contexts/user.context.jsx"


const App = () => {
  const { currentUser } = useContext(UserContext);

      return (
        <Fragment>
          <div className="App">
            <Navbar/>
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route path='/productlist' element={<ProductList/>} />
                <Route path='/product' element={<Product/>} />
                <Route path='/cart' element={<Cart/>} />
                <Route path='/login' element={ currentUser ? (<Navigate to="/"/> ): (<Login/>) }/>
                <Route path='/register' element={ currentUser ? (<Navigate to="/"/> ): (<Register/>) } />
            </Routes>
          </div>    
        </Fragment>  
  )
};

export default App;
