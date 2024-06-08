import React, { useContext } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AppContext } from '../../AppContext';
import { Card, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';
import './slickBlog.css'
const SlickBlog = () => {
    const { datablog } = useContext(AppContext);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 1800
    };

    return (
        <div className="slider-container">

            <h1 className='title-slick mt-5' data-aos="flip-left"><span><i class="fa-brands fa-apple"></i></span> Blog</h1>
            <Slider {...settings}>
                {
                    // datablog &&
                    datablog.map((item, index) => (
                        <div key={index}>
                            <Card className='box-slick blog-slick'
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <Link to={`/blog/${item.id}`}>
                                    <img
                                        className='img-slick-blog'
                                        width='100%'
                                        alt='imgBlog'
                                        src={item.imgBlog}
                                    />
                                    <CardText className='box-title'>
                                        <h6 className='title-blog'>{item.title}</h6>
                                    </CardText>
                                </Link>
                            </Card>
                        </div>
                    ))}
            </Slider>
        </div>
    );
};

export default SlickBlog;
