import React from 'react';
import Products from '../components/Product';



const Home = () => {
    return (
        <div>
            <h2 className='text-center m-5 font-bold text-2xl'>Welcome to Redux Store</h2>
            <Products />
        </div>
    );
};

export default Home;