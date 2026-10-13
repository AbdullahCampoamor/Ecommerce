import { useEffect, useState } from "react"
import axios from "axios"
import dayjs from "dayjs"
import { HomeHeader } from "../../components/home/HomeHeader"
import { Footer } from "../../components/common/Footer"
import { formatMoney } from "../../utlis/money"
import "./orders.css"

export function Orders() {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        const loadOrders = async () => {
            const response = await axios.get('/api/orders?expand=products')
            setOrders(response.data)
        }

        loadOrders()
    }, [])

    return (
        <>
            <title>Orders</title>
            <HomeHeader />

            <main className="orders-page">
                <section className="orders-container">
                    <div className="orders-header-block">
                        <p className="orders-kicker">Your history</p>
                        <h1>Orders</h1>
                    </div>

                    <div className="orders-list">
                        {orders.length === 0 ? (
                            <div className="empty-state">
                                <h2>No orders yet</h2>
                                <p>Your past purchases will appear here once you place an order.</p>
                            </div>
                        ) : (
                            orders.map((order) => {
                                const totalItems = (order.products || []).reduce(
                                    (sum, item) => sum + Number(item.quantity || 0),
                                    0
                                )

                                return (
                                    <article className="order-card" key={order.id}>
                                        <div className="order-top-row">
                                            <div>
                                                <p className="order-label">Order placed</p>
                                                <h2>{dayjs(order.orderTimeMs).format('MMMM D, YYYY')}</h2>
                                            </div>

                                            <div className="order-meta">
                                                <div className="order-total-box">
                                                    <span>Total</span>
                                                    <strong>{formatMoney(order.totalCostCents)}</strong>
                                                </div>
                                                <div className="order-count-box">
                                                    <span>Items</span>
                                                    <strong>{totalItems}</strong>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="order-items">
                                            {(order.products || []).map((item) => (
                                                <div className="order-item" key={`${order.id}-${item.productId}`}>
                                                    <div className="order-item-image">
                                                        <img
                                                            src={item.product?.image ? `/${item.product.image}` : '/images/products/default-product.jpg'}
                                                            alt={item.product?.name ?? 'Product'}
                                                        />
                                                    </div>

                                                    <div className="order-item-info">
                                                        <h3>{item.product?.name ?? 'Product'}</h3>
                                                        <div className="order-item-details">
                                                            <span>Quantity: {item.quantity}</span>
                                                            <span>
                                                                Delivery: {dayjs(item.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className="order-item-price">
                                                        {formatMoney((item.product?.priceCents ?? 0) * (item.quantity ?? 0))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </article>
                                )
                            })
                        )}
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}


