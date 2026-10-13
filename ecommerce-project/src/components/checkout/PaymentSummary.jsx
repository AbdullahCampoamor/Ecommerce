import axios from "axios"
import { useNavigate } from "react-router"
import { useState, useEffect } from "react"
import { formatMoney } from "../../utlis/money"

export function PaymentSummary({ cart, loadCart, paymentSummary }) {


    const navigate = useNavigate();
    const createOrder = async () => {
        await axios.post('/api/orders');
        await loadCart();
        navigate('/orders');
    }

    return paymentSummary && (
        <aside className="payment-summary">
            <h2>Payment Summary</h2>

            <div className="summary-row">
                <span>Subtotal</span>
                <span>{formatMoney(paymentSummary.productCostCents)}</span>
            </div>
            <div className="summary-row">
                <span>Shipping</span>
                <span>{formatMoney(paymentSummary.shippingCostCents)}</span>
            </div>
            <div className="summary-row">
                <span>Tax</span>
                <span>{formatMoney(paymentSummary.taxCents)}</span>
            </div>

            <div className="summary-total">
                <span>Total</span>
                <span>{formatMoney(paymentSummary.totalCostCents)}</span>
            </div>

            <button type="button" className="checkout-button" onClick={createOrder}>
                Place order
            </button>
        </aside>
    )
}