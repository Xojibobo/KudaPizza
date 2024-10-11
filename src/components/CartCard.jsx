
import PropTypes from "prop-types";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { LazyLoadImage } from 'react-lazy-load-image-component';



const CartCard = ({ id, image, name, description, price, quantity, }) => {
    const { incereaseQuantity, decreaseQuantity } = useContext(ProductContext)
    return (
        <div>
            <div className="card mb-3 shadow custom-container"  >
                <div className="row g-0">
                    <div className="col-md-4">
                        <LazyLoadImage src={image} effect="blur" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text"><small className="text-muted">{price} uzs</small></p>
                            <div className="btn-group">
                                <button onClick={() => decreaseQuantity(id)} className="btn btn-danger">-</button>
                                <button className="btn btn-warning">{quantity}</button>
                                <button onClick={() => incereaseQuantity(id)} className="btn btn-success">+</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
CartCard.propTypes = {
    id: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    quantity: PropTypes.number

}

export default CartCard
