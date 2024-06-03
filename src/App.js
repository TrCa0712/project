import React from 'react';
import { AppProvider } from './AppContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Blog from './pages/blog/Blog';
import Products from './pages/products/Products';
import Contact from './pages/contact/Contact';
import ProductDetail from './components/productDetail/ProductDetail';
import Iphone from './pages/iphone/Iphone';
import Macbook from './pages/macbook/Macbook';
import Airpod from './pages/airpod/Airpod';
import Cart from './components/cart/Cart';
import ThanhToan from './pages/thanhtoan/ThanhToan';
import Error from './pages/errorPages/Error';
import BlogDetail from './pages/blogDetal/BlogDetail';

const App = () => {
    return (
        <div>

            <AppProvider>
                <BrowserRouter>
                    <Routes>
                        <Route index element={<Home />}></Route>
                        <Route path='/blog' element={<Blog />}></Route>
                        <Route path='/blog/:id' element={<BlogDetail />}></Route>
                        <Route path='/products' element={<Products />}></Route>
                        <Route path='/contact' element={<Contact />}></Route>
                        <Route path='/product/:id' element={<ProductDetail />}></Route>
                        <Route path='/iphone' element={<Iphone />}></Route>
                        <Route path='/macbook' element={<Macbook />}></Route>
                        <Route path='/airpod' element={<Airpod />}></Route>
                        <Route path='/cart' element={<Cart />}></Route>
                        <Route path='/thanh-toan' element={<ThanhToan />}></Route>

                        {/* <Route path='/*' element={<Error />}></Route> */}
                    </Routes>
                </BrowserRouter>
            </AppProvider>
        </div>
    );
}

export default App;