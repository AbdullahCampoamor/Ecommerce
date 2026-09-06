import './footer.css';

export function Footer() {
    const currentYear = new Date().getFullYear(); // Gets 2024, 2025, etc.

    return (
        <footer className="footer">
            {/* Main Footer Content */}
            <div className="footer-content">

                <div className="footer-column">
                    <h3>About Us</h3>
                    <p>
                        Your trusted eCommerce platform delivering quality products
                        to over 500 cities with 5,000+ successful deliveries.
                        We pride ourselves on reliability and customer satisfaction.
                    </p>
                    <div className="social-links">
                        <a href="#" className="social-icon">
                            <img src="/icons/email.png" alt="Email" />
                        </a>
                        <a href="#" className="social-icon">
                            <img src="/icons/facebook.png" alt="Facebook" />
                        </a>
                        <a href="#" className="social-icon">
                            <img src="/icons/instagram.png" alt="Instagram" />
                        </a>
                        <a href="#" className="social-icon">
                            <img src="/icons/twitter.png" alt="Twitter" />
                        </a>
                    </div>
                </div>




                <div className="footer-column">
                    <h3>Customer Service</h3>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Returns Policy</a></li>
                        <li><a href="#">Shipping Info</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>


                <div className="footer-column">
                    <h3>Contact Us</h3>
                    <ul className="contact-info">
                        <li>📍 123 ecommerce Street, City</li>
                        <li>📧 info@ecommerce.com</li>
                        <li>📞 +963 963 963 963</li>
                        <li>🕐 Mon-Fri: 9AM - 6PM</li>
                    </ul>
                </div>
            </div>

            {/* ============================================
                BOTTOM BAR - All Rights Reserved
                ============================================ */}
            <div className="footer-bottom">
                <div className="footer-bottom-content">
                    {/* Left Side: Copyright */}
                    <p className="copyright">
                        &copy; {currentYear} <span className="brand-name">ecommerce</span>.
                        All Rights Reserved.
                    </p>

                    {/* Right Side: Legal Links */}
                    <div className="legal-links">
                        <a href="#">Privacy Policy</a>
                        <span className="separator">|</span>
                        <a href="#">Terms of Service</a>
                        <span className="separator">|</span>
                        <a href="#">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}