import PropTypes from "prop-types";
import { createContext, useState } from "react";
import { products } from "../data/products";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
    const [cart, setCart] = useState(
        JSON.parse(localStorage.getItem('cart')) || []
    );

    const addToCart = (id) => {
        let product = products.find(pr => pr.id === id);
        let productInCart = cart.find(pr => pr.id === id);
        let newCart;

        if (productInCart) {
            newCart = cart.map(pr => {
                if (pr.id === id) {
                    return { ...pr, quantity: pr.quantity + 1 };
                }
                return pr;
            });
        } else {
            product = { ...product, quantity: 1 };
            newCart = [...cart, product];
        }

        setCart(newCart);
        localStorage.setItem("cart", JSON.stringify(newCart));
    };

    const incereaseQuantity = (id) => {
        const newCart = cart.map(pr => {
            if (pr.id === id) {
                return { ...pr, quantity: pr.quantity + 1 };
            }
            return pr;
        });
        setCart(newCart);
        localStorage.setItem("cart", JSON.stringify(newCart));

    }

    const decreaseQuantity = (id) => {
        let newCart;
        let producInCart = cart.find(pr => pr.id === id);
        if (producInCart.quantity > 1) {
            newCart = cart.map(pr => {
                if (pr.id === id) {
                    pr.quantity--;
                }
                return pr;
            });
        } else {
            newCart = cart.filter(pr => pr.id !== id)
        }
        setCart(newCart);
        localStorage.setItem("cart", JSON.stringify(newCart));



    }

    const state = { cart, addToCart, incereaseQuantity, decreaseQuantity };

    return (
        <ProductContext.Provider value={state}>
            {children}
        </ProductContext.Provider>
    );
};

ProductContextProvider.propTypes = {
    children: PropTypes.node,
};

export default ProductContextProvider;