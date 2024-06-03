import React, { useContext, useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import SlickBlog from '../../components/slickblog/SlickBlog';
import axios from 'axios';
import { AppContext } from '../../AppContext';
import { useParams } from 'react-router-dom';
import { Container } from 'reactstrap';
import './blogDetail.css'
const BlogDetail = () => {
    const [datablog, setBlog] = useState({});
    const { addImgBlog } = useContext(AppContext);
    const { id } = useParams();

    const getBlog = () => {
        const urlblog = `https://665ad949003609eda45f02f3.mockapi.io/newblog/${id}`;
        axios.get(urlblog)
            .then((res) => {
                const item = res.data;
                const imageSet = addImgBlog.find(blog => blog.id === parseInt(id));
                const blogWithImages = {
                    ...item,
                    imgBlog: imageSet?.imgBlog,
                    img1: imageSet?.img1,
                    img2: imageSet?.img2,
                    img3: imageSet?.img3
                };
                setBlog(blogWithImages);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        getBlog();
    }, [id]);

    return (
        <div>
            <Header />

            <Container>
                <div className='box-blog-detail'>
                    <h1 className='title-productDetail'>Chi tiết Blog</h1>
                    <div className='title-blog-detail bg-color-box' >
                        <h1 className='title'>{datablog.title}</h1>
                        <hr />
                        <img width='100%' className='img-blog-detail'
                            alt='img-blog'
                            src={datablog && datablog.imgBlog}
                        />
                        <p className='noi_dung'>{datablog.noidung}</p>
                        <h2 className='title'>{datablog && datablog.title2}</h2>
                        <p className='noi_dung'><b>1.</b> {datablog && datablog.buoc1}</p>
                        <img width='100%' className='img-blog-detail'
                            alt='img-blog'
                            src={datablog && datablog.img1}
                        />
                        <p className='noi_dung'><b>2.</b> {datablog && datablog.buoc2}</p>
                        <img width='100%' className='img-blog-detail'
                            alt='img-blog'
                            src={datablog && datablog.img2}
                        />
                        <p className='noi_dung'><b>3.</b> {datablog && datablog.buoc2}</p>
                        <img width='100%' className='img-blog-detail'
                            // alt='img-blog'
                            src={datablog && datablog.img3}
                        />
                        <p className='noi_dung'><b>Lưu ý: </b> {datablog && datablog.luuy}</p>
                    </div>
                </div>
            </Container>

            <SlickBlog />
            <Footer />
        </div>
    );
}

export default BlogDetail;
