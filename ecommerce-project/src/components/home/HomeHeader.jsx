import logo from "../../assets/images/logo.png"
import { Link } from "react-router"
import './homeHeader.css'

export function HomeHeader() {

    return (
        <>

            <header className="home-header">

                <div className="left-part">
                    <Link to="/"><img className="logo" src={logo} /></Link>

                </div>

                <input type="checkbox" className="menu-toggle" id="menuToggle" />

                <nav className="right-part">
                    <ul className="link-list">
                        <li className="nav-link"><Link to="/products">Products</Link></li>
                        <li className="nav-link"><Link to="/checkout">Cart</Link></li>
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






        </>

    )
}