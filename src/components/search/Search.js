import Tippy from '@tippyjs/react';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../AppContext';
import 'tippy.js/dist/tippy.css';
import './search.css';

const Search = () => {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(false);
    const { data } = useContext(AppContext);

    const inputRef = useRef();

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        setShowResult(false);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    useEffect(() => {
        if (searchValue.trim()) {
            const results = data.filter(item =>
                item.NameProduct.toLowerCase().includes(searchValue.toLowerCase())
            );
            setSearchResult(results);
            setShowResult(true);
        } else {
            setSearchResult([]);
            setShowResult(false);
        }
    }, [searchValue, data]);

    return (
        <div>
            <Tippy
                interactive={true}
                onClickOutside={handleHideResult}
                visible={showResult && searchResult.length > 0}
                render={attrs => (
                    <div className='search-result' tabIndex={-1} {...attrs}>
                        <div className='popper'>
                            {searchValue.trim() === '' && (
                                <div className='goi-y-search'>
                                    <span>Sản phẩm gợi ý</span>
                                    <Link to='./iphone'><span>iPhone</span></Link><br />
                                    <Link to='./macbook'><span>MacBook</span></Link><br />
                                    <Link to='./airpod'><span>Airpod</span></Link><br />
                                </div>
                            )}
                            <div className='box-search'>
                                {searchResult.map((item, index) => (
                                    <Link to={`/product/${item.id}`} key={index} className='search-item'>
                                        <img width='20%' className='img-search' alt={item.NameProduct} src={item.img} />
                                        <h6 className='name-search'>{item.NameProduct}</h6>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            >
                <div className='search'>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder='Search'
                        spellCheck={false}
                        onChange={e => setSearchValue(e.target.value)}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && (
                        <button onClick={handleClear} className='clear'>
                            <i className="fa-solid fa-circle-xmark"></i>
                        </button>
                    )}
                    <button className='search-btn'>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
            </Tippy>
        </div>
    );
}

export default Search;
