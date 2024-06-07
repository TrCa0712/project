import React, { useContext } from 'react';
import Header from '../../components/header/Header';
import { Card, CardBody, CardText, CardTitle, Col, Container, Row } from 'reactstrap';
import { AppContext } from '../../AppContext';
import { Link } from 'react-router-dom';
import Slick from '../../components/slick/Slick';
import Footer from '../../components/footer/Footer';
const Airpod = () => {
    const { data, addCart } = useContext(AppContext)
    return (
        <div>
            <Header />
            <Container>
                <h1 className='iphone'><span><i class="fa-brands fa-apple apple"></i></span> Airpod</h1>
                <Row>
                    {
                        data &&
                        data.slice(16, 20).map((item, index) => (

                            <Col md={3} sm={12} xs={6} >

                                <Card className='box-product product-shadow mt-4 bg-color-box'
                                    data-aos="fade-right"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine"
                                >
                                    <Link to={`/product/${item.id}`} key={index}>
                                        <img className='img-box' width='100%'
                                            alt="Sample"
                                            src={item.img}
                                        />

                                        <CardBody className='box-product'>

                                            <CardTitle tag="h5"  >
                                                <h1 className='title-product' >{item.NameProduct}</h1>
                                            </CardTitle>
                                            <CardText>
                                                <p className='price '><b>{item.Gia} USD</b><del>{item.GiaGoc} USD</del> </p>
                                            </CardText>


                                        </CardBody>
                                    </Link>
                                    <div className='box-buy'>
                                        <button className='add-cart' onClick={() => addCart((item.id))}>Add</button>
                                        <Link to='/thanh-toan'><button className='buy' onClick={() => addCart(item.id)}>Buy</button></Link>
                                    </div>
                                </Card>
                            </Col>
                        ))
                    }



                </Row>
            </Container>
            <h1 className='title-slick'>Sản phẩm liên quan</h1>
            <Slick />
            <Footer />
        </div>
    );
}

export default Airpod;