import React, { useContext } from 'react';
import { Card, CardBody, CardText, CardTitle, Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import './product.css'
import { AppContext } from '../../AppContext';
import 'bootstrap/dist/css/bootstrap.min.css';
const Product = () => {

    const { data, addCart } = useContext(AppContext)
    return (
        <div className='products'>
            <Container>
                <Row >
                    {
                        data &&
                        data.map((item, index) => (
                            <Col md={3} sm={12} xs={6}>
                                <Card className='box-product product-shadow mt-4 bg-color-box' data-aos="zoom-in"  >
                                    <Link to={`/product/${item.id}`} key={index}>
                                        <img className='img-box' width='100%'
                                            alt="Sample"
                                            src={item.img}
                                        />
                                        <CardBody >
                                            <CardTitle tag="h5"  >
                                                <h1 className='title-product' >{item.NameProduct}</h1>
                                            </CardTitle>
                                            <CardText>
                                                <p className='price '><b>{item.Gia} USD</b><del>{item.GiaGoc} USD</del> </p>
                                            </CardText>
                                        </CardBody>
                                    </Link>
                                    <div className='box-buy'>
                                        <button className='add-cart' onClick={() => addCart(item.id)}>Add</button>
                                        <Link to='/thanh-toan'><button className='buy' onClick={() => addCart(item.id)}>Buy</button></Link>
                                    </div>
                                </Card>
                            </Col>
                        ))
                    }



                </Row>
            </Container>

        </div >
    );
}

export default Product;
