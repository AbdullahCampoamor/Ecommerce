import { useEffect, useState } from "react"
import axios from "axios"
import dayjs from "dayjs"
import { formatMoney } from "../../utlis/money"

export function OrderSummary({ cart, deliveryOptions, loadCart }) {
    const [quantityByProductId, setQuantityByProductId] = useState({})

    useEffect(() => {
        setQuantityByProductId((previous) => {
            const next = { ...previous }

            cart.forEach((cartItem) => {
                next[cartItem.productId] = cartItem.quantity
            })

            return next
        })
    }, [cart])

    const changeQuantity = (productId, changeAmount) => {
        setQuantityByProductId((previous) => {
            const currentQuantity = Number(previous[productId] ?? 1)
            const nextQuantity = Math.max(1, currentQuantity + changeAmount)

            return {
                ...previous,
                [productId]: nextQuantity,
            }
        })
    }

    const updateCartQuantity = async (cartItem) => {
        const nextQuantity = Number(quantityByProductId[cartItem.productId] ?? cartItem.quantity)

        if (nextQuantity < 1) {
            return
        }

        await axios.put(`/api/cart-items/${cartItem.productId}`, { quantity: nextQuantity })
        await loadCart()
    }

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

                    const quantity = Number(quantityByProductId[cartItem.productId] ?? cartItem.quantity)

                    const deletCartItem = async () => {
                        await axios.delete(`/api/cart-items/${cartItem.productId}`);
                        await loadCart();
                    }

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
                                        <button
                                            type="button"
                                            aria-label="Decrease quantity"
                                            onClick={() => changeQuantity(cartItem.productId, -1)}
                                            disabled={quantity <= 1}
                                        >
                                            -
                                        </button>
                                        <span>{quantity}</span>
                                        <button
                                            type="button"
                                            aria-label="Increase quantity"
                                            onClick={() => changeQuantity(cartItem.productId, 1)}
                                        >
                                            +
                                        </button>
                                    </div>

                                    <button type="button" className="link-button" onClick={() => updateCartQuantity(cartItem)}>Update</button>
                                    <button type="button" className="link-button danger" onClick={deletCartItem}>Delete</button>
                                </div>

                                <div className="delivery-options">
                                    {
                                        deliveryOptions.map((deliveryOption) => {

                                            let priceString = "Free Shipping"
                                            if (deliveryOption.priceCents > 0) {
                                                priceString = `${formatMoney(deliveryOption.priceCents)}`
                                            }
                                            const updateDeliveryOption = async () => {
                                                await axios.put(`/api/cart-items/${cartItem.productId}`, {
                                                    deliveryOptionId: deliveryOption.id
                                                })
                                                await loadCart();
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