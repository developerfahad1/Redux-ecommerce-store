import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const cartItems = useSelector((state) => state.cart);

    return (
        <nav className='flex justify-between items-center gap-5 bg-blue-700 '>
            <h2>Redux Ecommerce Store</h2>
            <div>
                <Link to="/">Home</Link>
                <Link to="/">About</Link>
                <Link to="/">Services</Link>
                <Link to="/">Content</Link>
                <button className='bg-black text-white font-bold py-1 px-4 border border-gray-300 rounded-lg hover:bg-gray-800 hover:border-gray-500 transition duration-300 ease-in-out shadow-lg ml-5'>
  <Link to="/cart">Cart ({cartItems.length})</Link>
</button>
            </div>
        </nav>
    );
};

export default Navbar;