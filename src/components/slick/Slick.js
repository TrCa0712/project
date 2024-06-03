import React, { useContext } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AppContext } from '../../AppContext';
import { Card } from 'reactstrap';
import './slick.css'
import { Link } from 'react-router-dom';
const Slick = () => {
    const { data } = useContext(AppContext)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 1800
    };
    return (

        <div className="slider-container">
            <Slider {...settings}>
                {
                    data &&
                    data.map((item, index) => (
                        <div >
                            <Card className='box-slick'
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <Link to={`/product/${item.id}`}>
                                    <img key={index} className='img-slick' width='50%'
                                        alt='imgProducts'
                                        src={item.img}
                                    />
                                </Link>
                            </Card>
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
}

export default Slick;