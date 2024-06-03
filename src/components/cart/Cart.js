import React, { useContext } from 'react';
import Header from '../header/Header';
import { AppContext } from '../../AppContext';
import Footer from '../footer/Footer';
import { Col, Container, Row } from 'reactstrap';
import './cart.css'
import { Link } from 'react-router-dom';
const Cart = () => {
    const { cart, removeById, update_qty } = useContext(AppContext)
    return (
        <div className='main-cart'>
            <Header />
            <h1 className='mg-top-60 gio-hang' data-aos="zoom-in">Giỏ hàng</h1>
            <div className='box-cart' data-aos="zoom-in">

                <div className='title-cart'>
                    <Row>
                        <Col sm={2} xs={2} >
                            <p className='my-2'>images</p>
                        </Col>
                        <Col sm={3} xs={3} >
                            <p className='my-2'>Name products</p>
                        </Col>
                        <Col sm={2} xs={2} >
                            <p className='my-2'>Price</p>
                        </Col>
                        <Col sm={3} xs={3} >
                            <p className='my-2'>Quantity</p>
                        </Col>
                        <Col sm={2} xs={2} >
                            <p className='my-2'>Control</p>
                        </Col>
                    </Row>
                </div>
                {
                    cart.map((item, index) => (
                        <div className='box-sanpham'>
                            <Row key={index}>
                                <Col sm={2} xs={2}>
                                    <img className='img-cart'
                                        alt='imgCart'
                                        src={item.img}
                                    />
                                </Col>
                                <Col sm={3} xs={3}>
                                    <p className='my-3'>{item.NameProduct}</p>
                                </Col>
                                <Col sm={2} xs={2} >
                                    <p className='my-3'>{item.Gia * item.qty} USD</p>
                                </Col>
                                <Col sm={3} xs={3} className='qty'>
                                    <button className='btn-cart me-2 my-3' onClick={() => update_qty(item.id, -1)}>-</button>
                                    {item.qty}
                                    <button className='btn-cart ms-2' onClick={() => update_qty(item.id, 1)}>+</button>
                                </Col>
                                <Col sm={2} xs={2}>
                                    <button className='btn my-2' onClick={() => removeById(item.id)}>X</button>
                                </Col>

                            </Row>
                        </div>
                    ))
                }
                <div className='total'>
                    <h6><b>Tổng sản phẩm:</b> {cart.reduce((sl, item) => sl += item.qty, 0)} sản phẩm </h6>
                    <h6><b>Tổng tiền:</b> {cart.reduce((tong, item) => item.qty * item.Gia + tong, 0)} USD </h6>
                </div>

            </div>
            <Container className='tro-lai remo-cart'>
                <Link to='/products'><button className='remo mx-3 my-3 mua-sam'><i class="fa-solid fa-arrow-left"></i> Tiếp tục mua sắm</button></Link>
                <Link to='/thanh-toan'><button className='remo thanh-toan'>Thanh toán</button></Link>
            </Container>

            <Footer />
        </div>
    );
}

export default Cart;