import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './home.css'
import Product from '../../components/product/Product';
import banner from '../../images/banner.png'
import Quyenloi from '../../components/quyenloi/Quyenloi';
import SlickBlog from '../../components/slickblog/SlickBlog';
import Slick from '../../components/slick/Slick';
import Iphone from '../iphone/Iphone';
import Macbook from '../macbook/Macbook';


const Home = () => {
    return (
        <div>
            <Header />
            <div className='home'>
                <img className='banner' data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                    alt='banner'
                    src={banner}
                />
            </div>
            <Quyenloi />
            <h1 className='san-pham' data-aos="flip-left">Sản Phẩm</h1>
            <Slick />
            <Product />
            <SlickBlog />
            <Footer />
        </div>
    );
}

export default Home;
