import './categories.css'

export function Categories() {

    return (

        <section className="categories-section">
            <div className="categories-header">
                <h2>Shop by Category</h2>
                <a href="/products" className="view-all-link">View All →</a>
            </div>

            <div className="categories-grid">
                <div className="category-card men">
                    <div className="category-overlay">
                        <h3>Men</h3>
                        <span>Shop Now →</span>
                    </div>
                </div>

                <div className="category-card women">
                    <div className="category-overlay">
                        <h3>Women</h3>
                        <span>Shop Now →</span>
                    </div>
                </div>

                <div className="category-card accessories">
                    <div className="category-overlay">
                        <h3>Accessories</h3>
                        <span>Shop Now →</span>
                    </div>
                </div>
            </div>
        </section>
    )
}