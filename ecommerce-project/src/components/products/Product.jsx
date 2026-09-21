import axios from 'axios'
import './product.css'
export function Product({ product }) {

    const addToCart = async () => {
        await axios.post('http://localhost:3000/api/cart-items', {
            productId: product.id,
            quantity: 1
        });
    }

    return (
        <div className="product-container">
            <div className="product-card">
                <div className="product-image-box">
                    <div className="product-image"><img src={product.image} ></img></div>
                </div>

                <div className="product-content">


                    <div className="product-badge">new</div>

                    <h3 className="product-name">{product.name}</h3>

                    <div className="product-rating">
                        <img src={`/images/ratting/${product.rating.stars}.png`} />
                    </div>


                    <div className="product-footer">
                        <span className="product-price">${(product.priceCents / 100).toFixed(2)}</span>
                        <button className="product-button" type="button" onClick={addToCart}>
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}