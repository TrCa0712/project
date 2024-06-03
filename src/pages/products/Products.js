import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Product from '../../components/product/Product';
import './products.css'
import banner from '../../images/banner.png'
const Products = () => {
    return (
        <div>
            <Header />
            <img className='banner'
                alt='banner'
                src={banner}
            />
            <h1 className='san-pham'>Sản Phẩm</h1>
            <Product />
            <Footer />
        </div>
    );
}

export default Products;