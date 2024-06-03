import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import './footer.css'
const Footer = () => {
    return (
        <div>

            <Container>
                <hr />
                <div className='logo '>
                    <Link to='/' className='logo-footer'>
                        <span><i class="fa-brands fa-apple"></i></span>
                        <span className='thuong-hieu'>Truong<b>Store</b> </span>
                    </Link>
                </div>
                <div className='footer'
                >
                    <Row>
                        <Col md={4} sm={6} xs={6} className='box-footer'

                        >
                            <h6><b>Tổng đài</b></h6>
                            <span><b>Mua hàng:</b> <Link>0335999999 </Link>(9:30-21:30)</span><br />
                            <span><b>Phản ánh:</b> <Link>0335999999 </Link>(12:30-19:30)</span><br />
                            <span><b>Giá sỉ: </b> <Link className='ms-4'> 0335999999 </Link>(12:30-17:30)</span>
                        </Col>
                        <Col md={4} sm={6} xs={6} className='box-footer'

                        >
                            <h6><b>Hỗ trợ khách hàng</b></h6>
                            <span>Chính sách bảo hành tốt nhất thị trường</span><br />
                            <p>Chính sách bảo hành & đổi trả</p>
                        </Col>
                        <Col md={2} sm={6} xs={6} className='box-footer'

                        >
                            <h6><b>Địa chỉ của hàng</b></h6>
                            <span>Trường Store</span><br />
                            <p>Giao hàng tận nơi</p>
                        </Col>
                        <Col md={2} sm={6} xs={6} className='box-footer'

                        >
                            <h6><b>Thương hiệu</b></h6>
                            <span>Trường Store</span><br />
                            <span>Uy tín đặt lên hàng đầu</span>
                            <p>Email:<Link>truongstore@gmail.com</Link></p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default Footer;
