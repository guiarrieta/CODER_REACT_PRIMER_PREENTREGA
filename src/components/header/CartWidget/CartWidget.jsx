import React from 'react';
import './styles.css';
import img from './assets/trolley.png';

const CartWidget = () => {
    const itemCount = 0; // Número de elementos en el carrito 

    return (
        <div className='container'>
            <img src={img} className="cart" alt='Cart Widget' />
            {itemCount}
        </div>
    )
}
export default CartWidget