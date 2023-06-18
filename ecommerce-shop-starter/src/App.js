import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import BtmNav from './components/BtmNav';


const App = () => {
  return <div className='overflow-hidden'>
    <Header />
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/product/:id' element={<ProductDetails />} />
      </Routes>
      <Sidebar />
      <BtmNav />
    </Router>
  </div>;
};

export default App;
