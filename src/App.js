import Header from './components/header.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/main.js';
import './App.css';
import Footer from './components/footer.js'
import Error from './components/Error.js'
import Catalog from './components/catalog.js';
import ProductDetail from './components/productdetail.js'
import Cart from './components/cart.js'
import Order from './components/order.js'
function App() {
  return (

    <BrowserRouter>
    <Header />
      <Routes>
      <Route path='/' element={<Main />} />
      <Route path="*" element={<Error />} />
      <Route path='/catalog' element ={<Catalog />} />
      <Route path='/product/:id' element={<ProductDetail />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/order' element={<Order />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
