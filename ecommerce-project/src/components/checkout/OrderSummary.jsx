import axios from "axios"
import dayjs from "dayjs"
import { formatMoney } from "../../utlis/money"
export function OrderSummary({ cart, deliveryOptions, loadCart }) {

    return (
        <div className="cart-panel">
            <div className="section-heading">
                <h2>Order Summary</h2>
            </div>
            {
                deliveryOptions.length > 0 && cart.map((cartItem) => {
                    const delveryOptionSelected = deliveryOptions.find((deliveryOption) => {
                        return deliveryOption.id === cartItem.deliveryOptionId
                    })

                    return (
                        <div key={cartItem.id} className="cart-item">
                            <div className="cart-item-image">
                                <img src={cartItem.product.image} />
                            </div>

                            <div className="cart-item-details">
                                <div className="cart-item-top">
                                    <h3>{cartItem.product.name}</h3>
                                    <span className="item-price">{formatMoney(cartItem.product.priceCents)}</span>
                                </div>

                                <p className="delivery-date">
                                    delivery date: {dayjs(delveryOptionSelected.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                                </p>

                                <div className="cart-item-actions">
                                    <div className="quantity-box">
                                        <button type="button" aria-label="Decrease quantity">-</button>
                                        <span>{cartItem.quantity}</span>
                                        <button type="button" aria-label="Increase quantity">+</button>
                                    </div>

                                    <button type="button" className="link-button">Update</button>
                                    <button type="button" className="link-button danger">Delete</button>
                                </div>

                                <div className="delivery-options">
                                    {
                                        deliveryOptions.map((deliveryOption) => {

                                            let priceString = "Free Shipping"
                                            if (deliveryOption.priceCents > 0) {
                                                priceString = `${formatMoney(deliveryOption.priceCents)}`
                                            }
                                            const updateDeliveryOption = async () => {
                                                axios.put(`http://localhost:3000/api/cart-items/${cartItem.productId}`, {
                                                    deliveryOptionId: deliveryOption.id

                                                });
                                                loadCart();
                                            }
                                            return (
                                                <label key={deliveryOption.id} className="delivery-option" onClick={updateDeliveryOption}>
                                                    <input type="radio"
                                                        checked={deliveryOption.id === cartItem.deliveryOptionId}
                                                        name={`delivery-option-${cartItem.productId}`}
                                                        onChange={() => { }}

                                                    />
                                                    <span> {dayjs(deliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}</span>
                                                    <strong>{priceString}</strong>
                                                </label>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}