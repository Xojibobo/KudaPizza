import { ProductContext } from "../context/ProductContext";
import PropTypes from "prop-types";
import { useContext } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ProductCard = ({ id, image, name, description, price }) => {

    const { addToCart, cart, incereaseQuantity, decreaseQuantity } = useContext(ProductContext);
    let productCart = cart.find(pr => pr.id === id)
    return (
        <div className="card" >
            <LazyLoadImage src={image} effect="blur" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <div className="d-flex justify-content-between align-items-center">
                    {
                        productCart ? (
                            <div className="btn-group">
                                <button onClick={() => decreaseQuantity(id)} className="btn btn-danger">-</button>
                                <button className="btn btn-warning">{productCart.quantity}</button>
                                <button onClick={() => incereaseQuantity(id)} className="btn btn-success">+</button>
                            </div>
                        ) : (
                            <button onClick={() => addToCart(id)} className="btn btn-warning">Get it</button>
                        )

                    }


                    <p className="mb-0">{price}$</p>
                </div>
            </div>
        </div>
    )
}
ProductCard.propTypes = {
    id: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

}

export default ProductCard
