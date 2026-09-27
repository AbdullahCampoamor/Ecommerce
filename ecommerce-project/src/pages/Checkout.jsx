import "./checkout.css"
import { HomeHeader } from "../components/home/HomeHeader"
import { Footer } from "../components/common/Footer"

export function Checkout() {
    return (
        <>
            <title>Checkout</title>
            <HomeHeader />

            <main className="checkout-page">
                <section className="checkout-container">
                    <div className="checkout-card">
                        <div className="checkout-header">
                            <p className="checkout-kicker">Your cart</p>
                            <h1>Checkout</h1>
                        </div>

                        <div className="checkout-grid">
                            <div className="cart-panel">
                                <div className="section-heading">
                                    <h2>Order Summary</h2>
                                </div>

                                <div className="cart-item">
                                    <div className="cart-item-image">
                                        <img src="/images/products/2-slot-toaster-white.jpg" alt="2 slot toaster" />
                                    </div>

                                    <div className="cart-item-details">
                                        <div className="cart-item-top">
                                            <h3>2-Slot Toaster</h3>
                                            <span className="item-price">$40.00</span>
                                        </div>

                                        <p className="item-description">
                                            Sleek stainless steel finish with quick heat control and extra wide slots.
                                        </p>

                                        <div className="cart-item-actions">
                                            <div className="quantity-box">
                                                <button type="button" aria-label="Decrease quantity">-</button>
                                                <span>1</span>
                                                <button type="button" aria-label="Increase quantity">+</button>
                                            </div>

                                            <button type="button" className="link-button">Update</button>
                                            <button type="button" className="link-button danger">Delete</button>
                                        </div>

                                        <div className="delivery-options">
                                            <label className="delivery-option">
                                                <input type="radio" name="delivery-1" defaultChecked />
                                                <span>After 7 days</span>
                                                <strong>Free shipping</strong>
                                            </label>
                                            <label className="delivery-option">
                                                <input type="radio" name="delivery-1" />
                                                <span>After 5 days</span>
                                                <strong>$4.99</strong>
                                            </label>
                                            <label className="delivery-option">
                                                <input type="radio" name="delivery-1" />
                                                <span>After 3 days</span>
                                                <strong>$9.99</strong>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="cart-item">
                                    <div className="cart-item-image">
                                        <img src="/images/products/2-slot-toaster-white.jpg" alt="2 slot toaster" />
                                    </div>

                                    <div className="cart-item-details">
                                        <div className="cart-item-top">
                                            <h3>3D Lamp</h3>
                                            <span className="item-price">$58.00</span>
                                        </div>

                                        <p className="item-description">
                                            Minimal modern lighting for desks, bedrooms, and cozy reading corners.
                                        </p>

                                        <div className="cart-item-actions">
                                            <div className="quantity-box">
                                                <button type="button" aria-label="Decrease quantity">-</button>
                                                <span>1</span>
                                                <button type="button" aria-label="Increase quantity">+</button>
                                            </div>

                                            <button type="button" className="link-button">Update</button>
                                            <button type="button" className="link-button danger">Delete</button>
                                        </div>

                                        <div className="delivery-options">
                                            <label className="delivery-option">
                                                <input type="radio" name="delivery-2" defaultChecked />
                                                <span>After 7 days</span>
                                                <strong>Free shipping</strong>
                                            </label>
                                            <label className="delivery-option">
                                                <input type="radio" name="delivery-2" />
                                                <span>After 5 days</span>
                                                <strong>$4.99</strong>
                                            </label>
                                            <label className="delivery-option">
                                                <input type="radio" name="delivery-2" />
                                                <span>After 3 days</span>
                                                <strong>$9.99</strong>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="cart-item">
                                    <div className="cart-item-image">
                                        <img src="/images/products/2-slot-toaster-white.jpg" alt="2 slot toaster" />
                                    </div>

                                    <div className="cart-item-details">
                                        <div className="cart-item-top">
                                            <h3>Cooking Pan</h3>
                                            <span className="item-price">$34.00</span>
                                        </div>

                                        <p className="item-description">
                                            Heavy-duty non-stick cookware built for fast, even heating and easy cleanup.
                                        </p>

                                        <div className="cart-item-actions">
                                            <div className="quantity-box">
                                                <button type="button" aria-label="Decrease quantity">-</button>
                                                <span>2</span>
                                                <button type="button" aria-label="Increase quantity">+</button>
                                            </div>

                                            <button type="button" className="link-button">Update</button>
                                            <button type="button" className="link-button danger">Delete</button>
                                        </div>

                                        <div className="delivery-options">
                                            <label className="delivery-option">
                                                <input type="radio" name="delivery-3" defaultChecked />
                                                <span>After 7 days</span>
                                                <strong>Free shipping</strong>
                                            </label>
                                            <label className="delivery-option">
                                                <input type="radio" name="delivery-3" />
                                                <span>After 5 days</span>
                                                <strong>$4.99</strong>
                                            </label>
                                            <label className="delivery-option">
                                                <input type="radio" name="delivery-3" />
                                                <span>After 3 days</span>
                                                <strong>$9.99</strong>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <aside className="payment-summary">
                                <h2>Payment Summary</h2>

                                <div className="summary-row">
                                    <span>Subtotal</span>
                                    <span>$98.00</span>
                                </div>
                                <div className="summary-row">
                                    <span>Shipping</span>
                                    <span>$12.00</span>
                                </div>
                                <div className="summary-row">
                                    <span>Tax</span>
                                    <span>$9.00</span>
                                </div>

                                <div className="summary-total">
                                    <span>Total</span>
                                    <span>$119.00</span>
                                </div>

                                <button type="button" className="checkout-button">
                                    Place order
                                </button>
                            </aside>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}