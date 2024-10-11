import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { categories } from "../data/categories";
import { products } from "../data/products";

const HomePage = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const filteredProducts = selectedCategory
        ? products.filter(product => product.category === selectedCategory)
        : products;

    return (
        <div className="bacground p-3">
            <div className="custom-container">
                <div className="row gap-3">
                    {categories.map(category => (
                        <div
                            className="col departments bg-white rounded text-center"
                            key={category.name}
                            onClick={() => setSelectedCategory(category.name)}
                            style={{ cursor: "pointer" }}
                        >
                            <div>
                                <img src={category.image} alt={category.name} />
                                <p className="m-0">{category.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="my-4">
                    <h2>{selectedCategory ? selectedCategory : "Barcha Mahsulotlar"}</h2>
                    <div className="row">
                        {filteredProducts.map(product => (
                            <div className="col-3 d-flex my-3" key={product.id}>
                                <ProductCard {...product} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
