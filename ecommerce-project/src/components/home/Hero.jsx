import { Link } from 'react-router'
import './hero.css'

export function Hero() {

    return (
        <section className="hero">
            <div className="hero-info">
                <h1>where you can be proud</h1>
                <h3>An eCommerce platform that has successfully delivered over 5,000 orders to more than 500 cities.</h3>
                <h3>A reliable shopping experience trusted by thousands of families across the region.</h3>
                <button className="hero-button">
                    <Link to="/products">Shop Now</Link>
                </button>

            </div>
        </section >
    )
}