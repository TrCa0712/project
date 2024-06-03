import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import './quyenloi.css'
const Quyenloi = () => {
    return (
        <div>
            <div className='quyen-loi'>
                <Container data-aos="fade-right">
                    <Row>
                        <Col sm={3} xs={6}>

                            <div className="box" data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine">
                                <p><i class="fa-regular fa-circle-check"></i></p>
                                <p>Cập nhật giá liên tục tốt nhất thị trường</p>
                            </div>

                        </Col>
                        <Col sm={3} xs={6}>

                            <div className="box" data-aos="fade-right"
                                data-aos-offset="400"
                                data-aos-easing="ease-in-sine">
                                <p><i class="fa-solid fa-truck"></i></p>
                                <p>Giao hàng miễn phí</p>
                            </div>

                        </Col>
                        <Col sm={3} xs={6} data-aos="fade-right"
                            data-aos-offset="500"
                            data-aos-easing="ease-in-sine"
                        >
                            <div className="box">
                                <p><i class="fa-solid fa-shield"></i></p>
                                <p>Bảo hành 12 tháng</p>
                            </div>
                        </Col>
                        <Col sm={3} xs={6}>
                            <div className="box" data-aos="fade-right"
                                data-aos-offset="550"
                                data-aos-easing="ease-in-sine">
                                <p><i class="fa-solid fa-rotate-right"></i></p>
                                <p>Đổi trả nhanh chống tại Trường Store</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Quyenloi;