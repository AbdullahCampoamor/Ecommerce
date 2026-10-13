import "./checkout.css"
import { HomeHeader } from "../../components/home/HomeHeader"
import { Footer } from "../../components/common/Footer"
import { OrderSummary } from "../../components/checkout/OrderSummary"
import { PaymentSummary } from "../../components/checkout/PaymentSummary"
import { useState, useEffect } from "react"
import axios from "axios"

export function Checkout({ cart, loadCart }) {


    const [deliveryOptions, setDeliveryOptions] = useState([]);
    const [paymentSummary, setPaymentSummary] = useState(null);


    useEffect(() => {
        const fetchCheckoutData = async () => {
            let response = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime');
            setDeliveryOptions(response.data);

            response = await axios.get('/api/payment-summary');
            setPaymentSummary(response.data);

        }
        fetchCheckoutData();
    }, [cart])


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
                            <OrderSummary cart={cart} deliveryOptions={deliveryOptions} loadCart={loadCart} />
                            <PaymentSummary cart={cart} loadCart={loadCart} paymentSummary={paymentSummary} />
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}