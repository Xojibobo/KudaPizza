import { useContext } from "react";
import CartCard from "../components/CartCard";
import { ProductContext } from "../context/ProductContext";

const Basket = () => {
    const { cart } = useContext(ProductContext);

    return (
        <div className="bacground p-3 ">
            {cart.map(c => (
                <CartCard key={c.id} {...c} />
            ))}
        </div>
    );
};

export default Basket;
