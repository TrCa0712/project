
import './header.css'
import './popper.css'
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { useContext } from 'react';
import { AppContext } from '../../AppContext';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Search from '../search/Search';

const Header = () => {
    const { cart } = useContext(AppContext)
    const sidebarRef = useRef()
    const searchRef = useRef()

    const handleSearch = () => {
        searchRef.current.classList.toggle("active")
    }
    const handleToggle = () => {
        sidebarRef.current.classList.remove("active")
    }
    const toggle = () => {
        sidebarRef.current.classList.toggle("active")
    }
    useEffect(() => {

        const handleResize = () => {
            if (window.innerWidth >= 600) {
                sidebarRef.current.classList.remove("active")
            }
        }
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])
    return (
        < div className='header'>
            <div className='nav'>
                <button className='toggle' onClick={toggle}><i class="fa-solid fa-bars"></i></button>
                <div className='logo'>
                    <Link to='/'>
                        <span><i class="fa-brands fa-apple"></i></span>
                        <span className='thuong-hieu'>Truong<b>Store</b> </span>
                    </Link>
                </div>
                <div>
                    <ul id='main-menu'>
                        <li><Link to='/'>Trang Chủ</Link></li>
                        <li>
                            <Link to='/products'>Sản Phẩm <IoIosArrowDown /></Link>
                            <ul className='menu-child'>
                                <li><Link to='/iphone'>iPhone</Link></li>
                                <li><Link to='/macbook'>MacBook</Link></li>
                                <li><Link to='/airpod'>Airpod</Link></li>
                            </ul>
                        </li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
                <button className='search-header' onClick={handleSearch}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
                <div className='cart'>
                    <Tippy content='Giỏ hàng'>
                        <Link to='/cart'>
                            <button>
                                <i class="fa-solid fa-cart-shopping"></i>
                                <span className='number-cart'>{cart.length}</span>
                            </button>
                        </Link>
                    </Tippy>
                </div>
            </div >
            <div className={"sidebar"} ref={sidebarRef}>
                <div className='left'>
                    <ul id='main-menu-2'>
                        <li><Link to='/'>Trang Chủ</Link></li>
                        <li>
                            <div className='sanpham-down' >
                                <Link to='/products'>Sản Phẩm </Link><button><IoIosArrowDown /></button>
                            </div>
                            <ul className='menu-child-2' >
                                <li><Link to='/iphone'>iPhone</Link></li>
                                <li><Link to='/macbook'>MacBook</Link></li>
                                <li><Link to='/airpod'>Airpod</Link></li>
                            </ul>
                        </li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
                <div className='right' onClick={handleToggle} >
                    {/* <div className='search'>
                        <input placeholder='Search' spellCheck={false} />
                        <button className='clear'><i class="fa-solid fa-circle-xmark"></i></button>
                        <button className='loading'><i class="fa-solid fa-spinner"></i></button>
                        <Tippy content='Tìm kiếm'>
                            <button className='search-btn'><i class="fa-solid fa-magnifying-glass"></i></button>
                        </Tippy>
                    </div>
                    <div className='outline'></div> */}
                </div>
            </div>
            <div className='new-search' ref={searchRef}>
                <div className='top-search'>
                    <Search />
                </div>
                <div className='bottom-search'>
                </div>
            </div>

        </div>
    );
}

export default Header;