import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart, MinusCart, PlusCart } from './CartSlice.js';
import {Link} from 'react-router-dom'
import './cart.css'
const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items); // Выбираем товары из корзины
    const dispatch = useDispatch(); // Получаем dispatch
    const totalSum = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    
    const handleMinus = (item) => {
        dispatch(MinusCart(item))
    }
    const handlePlus = (item) => {
        dispatch(PlusCart(item))
    }

   

    return (
        <div>
          
            {cartItems.length === 0 ? (
                <div>
                <center><h1>Нет товаров</h1></center>
                <Link to='/catalog'><center><p className='oplatabtn'>В каталог</p></center></Link>
                </div>
            ) : (
                <div className='cartmegamain'>
                    <p className='maintextcartcorz'>Корзина товаров</p>
                    <div className='cartheadinfo'>
                        <p className='topdesccart'>Товары</p>
                        <p className='topdesccart'>Название</p>
                        <p className='topdesccart'>Цена</p>
                        <p className='topdesccart'>Количество</p>
                        <p className='topdesccart'>Город лох</p>


                    </div>
                    {cartItems.map((item) => (
                        <div className='cartmain'>
                            <img src={item.image} className='imagecart' />
                            <div>
                            <p className='cartname'>{item.name}</p>
                            <p className='topdesccart'>{item.description}</p>
                            </div>
                            <p className='cartprice'>{item.price} ₽</p>
                            <div className='quantitydivcart'>
                            <p onClick={() => handleMinus(item)} className='minusplusquan'>-</p>
                            <p >{item.quantity}</p>
                            <p onClick={() => handlePlus(item)} className='minusplusquan'>+</p>
                            </div>
                            <p className='cartprice'>{item.price*item.quantity} ₽</p>
                           
                            
                        </div>
                    ))}
                    
                    <div className='cartoplatadiv'>
                    <Link to='/order'>
                        <p className='oplatabtn'>Оплатить</p>
                        </Link>
                        <div className='totalsumdiv'>
                    <p className='totalsum1'>Итого: </p>
                    <p className='totalsum2'>{totalSum} ₽</p>
                    </div>
                    </div>
                    
                    
                </div>
            )}
            
            
        </div>
    );
};

export default Cart;