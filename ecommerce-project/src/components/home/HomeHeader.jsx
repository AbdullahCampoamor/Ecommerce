import logo from "../../assets/images/logo.png"
import './homeHeader.css'

export function HomeHeader() {

    return (
        <>
            <title >Home</title>
            <header className="home-header">

                <div className="left-part">
                    <img className="logo" src={logo} />

                </div>

                <input type="checkbox" className="menu-toggle" id="menuToggle" />

                <nav className="right-part">
                    <ul className="link-list">
                        <li className="nav-link"><a >Products</a></li>
                        <li className="nav-link"><a >Cart</a></li>
                        <li className="nav-link"><a >Orders</a></li>
                        <li className="nav-link"><a >Login</a></li>
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