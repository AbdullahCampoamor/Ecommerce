import { useState, useEffect } from "react";
import axios from "axios";

import { ProductsHeader } from "../../components/products/ProductsHeader"
import { Product } from "../../components/products/Product"
import { Footer } from "../../components/common/Footer"
import './products.css'

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
    const [cart, setCart] = useState([]);

    const loadCart = async () => {
        const response = await axios.get('http://localhost:3000/api/cart-items')
        setCart(response.data);
    }

    const getProductsData = async () => {
        const response = await axios.get('http://localhost:3000/api/products')
        setProducts(response.data);
    }
    useEffect(() => {
        getProductsData();
        loadCart();

    }, []);

    return (
        <>
            <title>Products</title>
            <ProductsHeader cart={cart} />
            <div className="products-grid">
                {products.map((product) => (
                    <Product key={product.id} product={product} loadCart={loadCart} />
                ))}
            </div>
            <Footer />

        </>
    )
}