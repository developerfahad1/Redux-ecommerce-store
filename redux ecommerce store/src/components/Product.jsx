import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/productSlice';
import { add } from '../store/cartSlice';

const Products = () => {
    const dispatch = useDispatch();
    const { data: products, status } = useSelector((state) => state.product);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleAddToCart = (product) => {
        dispatch(add(product));
    };

    if (status === 'loading') {
        return <h2>Loading...</h2>;
    }

    if (status === 'error') {
        return <h2>Something went wrong...</h2>;
    }

    return (
        <div className="productsWrapper">
            {products.map((product) => (
                <div key={product.id} className="productCard">
                    <img src={product.image} alt={product.title} />
                    <h4>{product.title}</h4>
                    <h5>${product.price}</h5>
                    <button onClick={() => handleAddToCart(product)} className="btn">Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default Products;