// components/ProductsHeader.jsx
import { Link } from "react-router";
import { useState } from "react";
import logo from "../../assets/images/logo.png";
import './productsHeader.css';

export function ProductsHeader({ cart }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            // Navigate to search results
            window.location.href = `/search?q=${encodeURIComponent(searchTerm)}`;
        }
    };

    let totalQuantity = 0;
    cart.forEach((cartItem) => {
        totalQuantity += cartItem.quantity;
    });

    return (
        <header className="products-header">


            <div className="left-part">
                <Link to="/">
                    <img className="logo" src={logo} alt="Logo" />
                </Link>
            </div>

            <div className="search-part">
                <form className="search-bar" onSubmit={handleSearch}>
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button type="submit" className="search-button">
                        🔍
                    </button>
                </form>
            </div>



            <input type="checkbox" className="menu-toggle" id="menuToggle" />

            <nav className="right-part">
                <ul className="link-list">
                    <li className="nav-link"><Link to="/">Home</Link></li>
                    <li className="nav-link"><Link to="/products">Products</Link></li>
                    <li className="nav-link " >
                        <Link className="cart-link" to="/checkout">
                            <img className="cart-icon" src="/icons/checkout-icon.png" alt="Checkout" />
                            <div className="cart-quantity">{totalQuantity}</div>
                        </Link>
                    </li>
                    <li className="nav-link"><Link to="/orders">Orders</Link></li>
                    <li className="nav-link"><Link to="/login">Login</Link></li>
                </ul>
            </nav>


            <label htmlFor="menuToggle" className="hamburger-menu">
                <span></span>
                <span></span>
                <span></span>
            </label>

        </header>
    );
}