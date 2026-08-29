import logo from "../assets/images/logo.png"
import './homeHeader.css'

export function HomeHeader() {

    return (
        <>
            <title >Home</title>
            <header className="home-header">

                <div className="left-part">
                    <img className="logo" src={logo} />

                </div>



                <nav className="right-part">
                    <ul className="link-list">
                        <li className="nav-link"><a >Products</a></li>
                        <li className="nav-link"><a >Cart</a></li>
                        <li className="nav-link"><a >Orders</a></li>
                        <li className="nav-link"><a >Login</a></li>
                    </ul>

                </nav>
            </header>



            <section className="hero">
                <div className="hero-info">
                    <h1>where you can be proud</h1>
                    <h3>An eCommerce platform that has successfully delivered over 5,000 orders to more than 500 cities.</h3>
                    <h3>A reliable shopping experience trusted by thousands of families across the region.</h3>
                    <button className="hero-button">Shop Now</button>

                </div>
            </section>

            <section className="categories-section">
                <div className="categories-header">
                    <h2>Shop by Category</h2>
                    <a href="/products" className="view-all-link">View All →</a>
                </div>

                <div className="categories-grid">
                    <div className="category-card men">
                        <div className="category-overlay">
                            <h3>Men</h3>
                            <span>Shop Now →</span>
                        </div>
                    </div>

                    <div className="category-card women">
                        <div className="category-overlay">
                            <h3>Women</h3>
                            <span>Shop Now →</span>
                        </div>
                    </div>

                    <div className="category-card accessories">
                        <div className="category-overlay">
                            <h3>Accessories</h3>
                            <span>Shop Now →</span>
                        </div>
                    </div>
                </div>
            </section>

        </>

    )
}