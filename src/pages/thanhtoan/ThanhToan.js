import React, { useContext } from 'react';
import { Col, Container, Row } from 'reactstrap';
import "./thanhtoan.css"
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { AppContext } from '../../AppContext';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
const ThanhToan = () => {
    const { cart, removeById, update_qty } = useContext(AppContext)
    const dat_hang = () => {

    }
    return (
        <div>
            <Header />
            <Container data-aos="zoom-in">
                <h1 className='mg-top-60 gio-hang'>Thanh toán</h1>
                <div className='box-thanhtoan bg-color-box'>
                    <Row>
                        <Col md={8} sm={12} >
                            <div className='title-thanhtoan'>
                                <h3 className='gio-hang'>Giỏ hàng của bạn</h3>
                                <h6 className='gio-hang mt-2'><b>Tổng sản phẩm:</b> {cart.reduce((sl, item) => sl += item.qty, 0)} sản phẩm </h6>
                            </div>
                            {
                                cart.map((item, index) => (
                                    <div className='box-left'>

                                        <Row key={index}>
                                            <Col sm={2} xs={2}>
                                                <img className='img-cart mt-2 mb-1'
                                                    alt='imgCart'
                                                    src={item.img}
                                                />
                                            </Col>
                                            <Col sm={3} xs={3}>
                                                <p className='my-3 name-pro'>{item.NameProduct}</p>
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
                            <div className='tro-lai remo-cart mt-3'>
                                <Link to='/products'><button className='remo mx-3 my-3 mua-sam'><i class="fa-solid fa-arrow-left"></i> Tiếp tục mua sắm</button></Link>
                            </div>
                        </Col>
                        <Col md={4} sm={12}>
                            <div className='box-right'>
                                <h3 className='gio-hang'>Thanh Toán</h3>
                                <div className='title-thanhtoan'>
                                    <h6 className='mt-1'><b>Tổng tiền:</b></h6>
                                    <p>{cart.reduce((tong, item) => item.qty * item.Gia + tong, 0)} USD </p>
                                </div>
                                <hr />
                                <h4 className='mb-2 title-giaohang'>Thông tin giao hàng</h4>
                                <div className='thong-tin'>
                                    <span>Name*</span>
                                    <input type='text' placeholder='Nhập tên' />
                                    <span>Số điện thoại*</span>
                                    <input type='number' placeholder='Nhập số điện thoại' />
                                    <span>Emial*</span>
                                    <input type='email' placeholder='Emial' />
                                    <span>Địa chỉ nhận hàng*</span>
                                    <input type='text' placeholder='Địa chỉ' />
                                    <hr />
                                    <button className='dat-hang' onClick={() => dat_hang(
                                        Swal.fire({
                                            position: "center",
                                            icon: "success",
                                            title: "Đặt hàng thành công",
                                            showConfirmButton: false,
                                            timer: 1500
                                        })
                                    )}>Đặt hàng</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
            <Footer />
        </div>
    );
}

export default ThanhToan;
