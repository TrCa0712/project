import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { Container } from 'reactstrap';
import './contact.css'
import Swal from 'sweetalert2'

const Contact = () => {
    const gui = () => {
    }
    return (
        <div>
            <Header />
            <div data-aos="zoom-in-down">
                <Container>
                    <div className='title-contact'
                        data-aos="zoom-in-left"
                    >
                        <h1 >Liên hệ với chúng tôi</h1>
                        <p className='title-2'>Vui lòng liên hệ với chúng tôi nếu có bất kỳ câu hỏi hoặc thắc mắc nào.</p>
                    </div>
                    <div className='thong-tin-contact bg-color-box'>
                        <div>
                            <label>Name*</label> <br />
                            <input type='text' placeholder='Nhập tên' /><br />
                        </div>
                        <div>
                            <label>Số điện thoại*</label><br />
                            <input type='number' placeholder='Nhập số điện thoại' /><br />
                        </div>
                        <div>
                            <label>Email*</label><br />
                            <input type='email' placeholder='Emial' /><br />
                        </div>
                        <div>
                            <label>Messenger*</label><br />
                            <textarea className='mess' type='text' placeholder='Nhập tin nhắn gửi cho chúng tôi' /><br />
                        </div>
                        <hr />
                        <button className='gui'
                            onClick={() => gui(
                                Swal.fire({
                                    position: "center",
                                    icon: "success",
                                    title: "Gửi thành công",
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            )}>Gửi</button>
                    </div>
                </Container>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;