import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from '../src/componment/home/Home'
import About from '../src/componment/about/About';
// import Bloges from './componment/blogspage/Bloges';
import Shop from './componment/shop/Shop';
import Product from './pages/product/Product';
import Bg from './pages/Blog/Bg';
import Contact from './componment/Contact/Contact';
import Login from './componment/login/login'
import Register from './componment/registration/Register';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        {/* <Route path="/bloges" element={<Bloges />}></Route> */}
        <Route path='/shop' element={<Shop />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/bg" element={<Bg />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
    </>
  );
}

export default App;
