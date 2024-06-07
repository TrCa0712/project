import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../header/Header';
import ip15 from '../../images/ip-15.png'
import './productsDetail.css'
import { Button, Col, Container, Row } from 'reactstrap';
import { AppContext } from '../../AppContext';
import Slick from '../slick/Slick';
import Footer from '../footer/Footer';
const ProductDetail = () => {
    const { addImg } = useContext(AppContext)
    const [data, setData] = useState(null)
    const { addCart } = useContext(AppContext)
    const { id } = useParams()
    const getData = () => {
        const url = `https://661b91e465444945d04fc6c2.mockapi.io/product/${id}`;
        axios.get(url)
            .then((res) => {
                const productData = res.data;
                const image = addImg.find(img => img.id === parseInt(id))?.img || ip15;
                setData({ ...productData, img: image });
            })
            .catch((error) => {
                console.log(error);
            });
    };
    useEffect(() => {
        getData()
    }, [id])
    return (
        <div>
            <Header />
            <h1 className='title-productDetail'>Chi tiết sản phẩm</h1>
            <Container className='box-productDetail bg-color-box'
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
            >
                <Row>
                    <Col sm={6} xs={12}>
                        <div>
                            <img className='img-productDetail'
                                alt='img-productDetail'
                                src={data && data.img}
                            />

                        </div>
                    </Col>
                    <Col sm={6} xs={12}>
                        <div className='productDetail'>
                            <h1>{data && data.NameProduct}</h1>
                            <p>Price: <b>{data && data.GiaGoc} USD</b></p>
                            <div className='sale'>
                                <p className='title-sale'>MUA NGAY GIẢM GIÁ SỐC CÒN</p>
                                <p className='price-sale'><b>{data && data.Gia} USD</b></p>
                            </div>
                            <p> Xuất xứ: {data && data.XuatXu} </p>
                            <p>Thông số kĩ thuật: </p>
                            <p> {data && data.ProductDescription}</p>
                            <p>{data && data.ssd}</p>
                            <p>  {data && data.dophangiai} </p>
                            <p> {data && data.manhinh} </p>
                            <p> {data && data.dosang} </p>
                            <Button className='add-cart p-2 ' onClick={() => addCart((data.id))}>Add cart</Button>
                            <Link to='/thanh-toan'><Button className='buy p-2 ' onClick={() => addCart(data.id)}>Buy</Button> <br /></Link>
                            <div className='tro-lai'>
                                <Link to='/products'><button className='remo '> <i class="fa-solid fa-arrow-left"></i> Tiếp tục mua sắm</button></Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <h1 className='title-slick'>Sản phẩm liên quan</h1>
            <Slick />
            <Footer />
        </div>
    );
}

export default ProductDetail;