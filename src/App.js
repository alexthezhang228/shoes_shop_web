import React from 'react';
import { CartProvider } from './contexts/CartContext';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import CartPage from './pages/CartPage.jsx';
import './styles/App.css'
import Login from './components/Login';


const App = () => {


  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/cart" element={<CartPage/>} />
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </CartProvider>
    </Router>
  );
};

export default App