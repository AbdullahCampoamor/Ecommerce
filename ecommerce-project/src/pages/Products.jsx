import { useState, useEffect } from "react";
import axios from "axios";
import './products.css'
import { ProductsHeader } from "../components/products/ProductsHeader"
import { Footer } from "../components/common/Footer"

export function Products() {
    /*    const products = [
            {
                id: 1,
                badge: 'Popular',
                name: 'Classic Chair',
                price: '$299',
                rating: '★★★★★',
                image: '/men-category.jpg',
            },
            {
                id: 2,
                badge: 'New',
                name: 'Modern Lamp',
                price: '$149',
                rating: '★★★★☆',
                image: '/men-category.jpg',
            },
            {
                id: 3,
                badge: 'Best Seller',
                name: 'Wooden Table',
                price: '$499',
                rating: '★★★★★',
                image: '/men-category.jpg',
            },
        ]*/
    const [products, setProducts] = useState([]);
    useEffect(() => {

        axios.get('http://localhost:3000/api/products').then((response) => {

            setProducts(response.data);
            console.log(response.data);
        })
    }, [])
    return (
        <>
            <title>Products</title>
            <ProductsHeader />
            <div className="products-grid">
                {products.map((product) => (
                    <div className="product-container" key={product.id}>
                        <div className="product-card">
                            <div className="product-image-box">
                                <div className="product-image"><img src={product.image} ></img></div>
                            </div>

                            <div className="product-content">


                                <div className="product-badge"></div>

                                <h3 className="product-name">{product.name}</h3>

                                <div className="product-rating">
                                    <img src={`/images/ratting/${product.rating.stars}.png`} alt="" />
                                </div>


                                <div className="product-footer">
                                    <span className="product-price">${(product.priceCents / 100).toFixed(2)}</span>
                                    <button className="product-button" type="button">
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />

        </>
    )
}