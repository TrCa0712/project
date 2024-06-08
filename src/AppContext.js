import { createContext } from "react";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ip15 from './images/ip-15.png'
import ip15plus from './images/ip-15plus.png'
import ip15pro from './images/ip-15pro.png'
import ip15promax from './images/ip-15promax.png'
import ip14promax from './images/ip-14promax.png'
import ip14pro from './images/ip-14pro.png'
import ip14plus from './images/ip-14plus.png'
import ip14 from './images/ip-14.webp'
import mbprom2 from './images/mb-prom2.png'
import mbprom2_16 from './images/mb-prom2-16.webp'
import mbprom2_14 from './images/mb-prom2-14.webp'
import mbair2022 from './images/mb-air2022.png'
import mb13 from './images/mb-air13.png'
import mb15 from './images/mb-air15.png'
import mbpro from './images/mb-pro.png'
import airpod2 from './images/airpod-2.png'
import airpod3 from './images/airpod-3.png'
import airpodmax from './images/airpod-max.png'
import xapin from './images/cach-xa-pin.jpeg'
import xapinb1 from './images/xa-pin-b1.jpeg'
import xapinb2 from './images/xa-pin-b2.jpeg'
import xapinb3 from './images/xa-pin-b3.jpeg'
import esim from './images/esim.jpeg'
import esimb1 from './images/esim-b1.jpeg'
import esimb2 from './images/esim-b2.jpeg'
import esimb3 from './images/esim-b3.jpeg'
import mokhoa from './images/mo-khoa.jpeg'
import mokhoab1 from './images/man-hinh-b1.jpeg'
import mokhoab2 from './images/man-hinh-b2.jpeg'
import congnghe from './images/cong-nghe.png'
import nfc from './images/NFC.png'
import thanhtoan from './images/thanh-toan.png'
import Swal from 'sweetalert2'
import Aos from 'aos'
import 'aos/dist/aos.css'
export const AppContext = createContext({})

export function AppProvider({ children }) {
    const addImgBlog = [
        {
            id: 1,
            imgBlog: xapin,
            img1: xapinb1,
            img2: xapinb2,
            img3: xapinb3
        },
        {
            id: 2,
            imgBlog: esim,
            img1: esimb1,
            img2: esimb2,
            img3: esimb3
        },
        {
            id: 3,
            imgBlog: mokhoa,
            img1: mokhoab1,
            img2: mokhoab2,

        },
        {
            id: 4,
            imgBlog: congnghe,
            img1: nfc,
            img2: thanhtoan,

        }
    ]
    const addImg = [
        {
            id: 1,
            img: ip15promax

        },
        {
            id: 2,
            img: ip15pro
        },
        {
            id: 3,
            img: ip15plus
        },
        {
            id: 4,
            img: ip15
        },
        {
            id: 2,
            img: ip14promax

        },
        {
            id: 6,
            img: ip14pro
        },
        {
            id: 7,
            img: ip14plus
        },
        {
            id: 8,
            img: ip14
        },
        {
            id: 9,
            img: mb13
        },
        {
            id: 10,
            img: mb15
        },
        {
            id: 11,
            img: mbpro
        },
        {
            id: 12,
            img: mbpro
        },
        {
            id: 13,
            img: mbprom2
        },
        {
            id: 14,
            img: mbprom2_14
        },
        {
            id: 15,
            img: mbprom2_16
        },
        {
            id: 16,
            img: mbair2022
        },
        {
            id: 7,
            img: airpod2
        },
        {
            id: 18,
            img: airpod2
        },
        {
            id: 19,
            img: airpod3
        },
        {
            id: 20,
            img: airpodmax
        }
    ]
    const [cart, setCart] = useState([])
    const [datablog, setBlog] = useState([])
    const [data, setData] = useState([])
    // thêm sản phẩm vào giỏ hàng
    const addCart = (id) => {
        const pro = data.find(item => item.id === id)
        const index = cart.findIndex(item => item.id === id)
        if (index >= 0) {
            const newCart = cart
            newCart[index]['qty']++
            setCart(newCart)
            localStorage.setItem('newCart', JSON.stringify(newCart))
        }
        else {
            setCart([...cart, { ...pro, qty: 1 }])
            localStorage.setItem('newCart', JSON.stringify([...cart, { ...pro, qty: 1 }]))
        }
        console.log(cart)
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Thêm giỏ hàng thành công",
            showConfirmButton: false,
            timer: 1500
        });
    }
    // xóa sản phẩm ra khỏi giỏ hàng
    const removeById = (id) => {
        setCart(cart.filter(item => item.id !== id))
        localStorage.setItem('newCart', JSON.stringify(cart.filter(item => item.id !== id)))
    }
    // tăng giảm số lượng sản phầm trong giỏ hàng
    const update_qty = (id, num) => {
        setCart(cart.map(item => (item.id === id && !(item.qty === 1 && num === -1)) ? { ...item, qty: item.qty + num } : item))
        localStorage.setItem('newCart', JSON.stringify(cart.map(item => (item.id === id && !(item.qty === 1 && num === -1)) ? { ...item, qty: item.qty + num } : item)))
    }
    const urlblog = "https://665ad949003609eda45f02f3.mockapi.io/newblog"
    const url = "https://661b91e465444945d04fc6c2.mockapi.io/product"
    const getBlog = () => {
        axios.get(urlblog)
            .then((res) => {
                const apiBlog = res.data.map((item, index) => ({
                    ...item,
                    imgBlog: addImgBlog[index % addImgBlog.length].imgBlog,
                    img1: addImgBlog[index % addImgBlog.length].img1,
                    img2: addImgBlog[index % addImgBlog.length].img2,
                    img3: addImgBlog[index % addImgBlog.length].img3
                }));
                setBlog(apiBlog);
            })
            .catch((error) => {
                console.log(error)
            })
    }
    const getData = () => {
        axios.get(url)
            .then((res) => {
                const apiData = res.data.map((item, index) => ({
                    ...item,
                    img: addImg[index % addImg.length].img
                }));
                setData(apiData);
            })
            .catch((error) => {
                console.log(error);
            });
    };


    useEffect(() => {
        getData();
        getBlog();
        Aos.init();
        Aos.refresh();
        setCart(JSON.parse(localStorage.getItem("newCart")));
    }, [])
    return (
        <AppContext.Provider value={{ data, cart, addCart, removeById, update_qty, datablog, addImgBlog, addImg }}>
            {children}
        </AppContext.Provider>
    )
}