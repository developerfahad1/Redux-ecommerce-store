import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart);

    const handleRemove = (productId) => {
        dispatch(remove(productId));
    };

    // Calculate the total price of the cart
    const totalPrice = products.reduce((total, product) => total + product.price, 0);

    return (
        <div className="cart-container">
            <h3>Cart</h3>
            <div className="cartWrapper">
                {products.length > 0 ? (
                    products.map((product) => (
                        <div key={product.id} className="cartCard">
                            <img src={product.image} alt={product.title} />
                            <h5>{product.title}</h5>
                            <h5>${product.price.toFixed(2)}</h5>
                            <button
                                className="btn remove-btn"
                                onClick={() => handleRemove(product.id)}
                            >
                                Remove
                            </button>
                        </div>
                    ))
                ) : (
                    <h4>Your cart is empty</h4>
                )}
            </div>
            {/* Display total price */}
            {products.length > 0 && (
                <div className="total">
                    <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
                </div>
            )}
        </div>
    );
};

export default Cart;