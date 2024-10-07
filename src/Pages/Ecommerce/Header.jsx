import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import "../Ecommerce/Header.css";

let Dileep = () => {
    let [api, setApi] = useState([]);
    let [search, setSearch] = useState("");
    useEffect(() => { fetch (` https://fakestoreapi.com/products `).then(res => res.json()) .then(data => setApi(data));}, []);
    let filteredProducts = api.filter(product =>
        product.title.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <Router>
            <div className="app">
                <header className="header">
                  <h1>DILEEPS SHOPPING SITE</h1>
                       <div className="search-bar">
                        <input type="text" placeholder="Search products"  value={search}  onChange={(e) => setSearch(e.target.value)} className='serachinput'  />
                      </div>
                    <div className='navlink'> 
                            <Link to="/">Home</Link>
                        <Link to="/join">Join</Link>
                    </div>  
                </header>
                <Routes>
                    <Route path="/" element={
                        <div className="productgrid">
                            {filteredProducts.map(product => ( <ProductCard key={product.id} product={product} /> ))}
                        </div>
                    } />
                    <Route path="/join" element={<Join />} />
                </Routes>
            </div>
        </Router>
    );
};

let ProductCard = ({ product }) => {
    let [quantity, setQuan] = useState(1);

    let inc = () => {
        setQuan(prev => prev + 1);
    };
    let dec = () => {
        setQuan(prev => (prev > 1 ? prev - 1 : 1));
    };

    return (
        <div className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <h2 className="product-title">{product.title}</h2>
            <p className="product-price">${product.price}</p>
            <div className="quantity-control">
                <button onClick={dec}>-</button>
                <span>{quantity}</span>
                <button onClick={inc}>+</button>
            </div>
            <button className="add-to-cart">Add to Cart</button>
        </div>
    );
};

const Join = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/');
    };

    return (
        <div className="join-page">
            <h1>Join our community!</h1>
            <button onClick={handleNavigate}>Back to Store</button>
        </div>
    );
};

export default Dileep;
