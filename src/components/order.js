import './order.css'
import { MinusCart, PlusCart } from './CartSlice.js';
import { useSelector, useDispatch } from 'react-redux';
import icons from './images/iconsoplata.png'
const Order = () => { 
    const cartItems = useSelector((state) => state.cart.items); 
    const dispatch = useDispatch(); 
    const totalSum = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);


    const handleMinus = (item) => {
            dispatch(MinusCart(item))
        }
        const handlePlus = (item) => {
            dispatch(PlusCart(item))
        }
    
        

    return(
        <div className="ordermaindiv">
            
            <div className='orderleft'> 
       <p className='maintextordercorz'>Оформление заказа</p>
       <p className='ordertext1'>1.Контактные данные</p>
       <div>
        <p className='ordertext2'>Номер телефона:</p>
        <input className='inporder' type="tel" placeholder='+7 000 000-00-00 '></input>
       </div>
       <div>
        <p className='ordertext2'>Имя:</p>
        <input className='inporder' placeholder='Александр' ></input>
       </div>
       <div>
        <p className='ordertext2'>Фамилия:</p>
        <input className='inporder' placeholder='Александров' ></input>
       </div>
       <form className='formradio'>
   <p className='ordertext1'>2.Способ получения</p>
    <p className='orderradio'><input name="filter" type="radio" value="filter" /> Самовывоз</p>
    <p className='orderradio'><input name="filter" type="radio" value="filter" /> Доставка</p>
    <p className='orderradio'><input name="filter" type="radio" value="filter" /> Доставка в пункт выдачи</p>
  </form> 
  <div>
        <p className='ordertext2'>Город:</p>
        <input className='inporder' placeholder='Москва' ></input>
       </div>
       <p className='ordertext2'>Адрес:</p>
<div className='swdgfsdf'>
<input className='inporder' placeholder='Улица' ></input>
<input className='inporder' placeholder='Дом' ></input>
<input className='inporder' placeholder='Квартира' ></input>
</div>

<p className='ordertext2'>Комментарий к заказу</p>
<input className='inporder1'></input>
       </div>




<div className='ordermainmegadiv'>
        <p className='maintextordercorz'>Мой заказ</p>
        <div>
        {cartItems.map((item) => (
            
                        <div className='ordermaindivdiv'>
                            
                            <img src={item.image} className='orderimage' />
                            <div>
                            <p className='ordername'>{item.name}</p>
                            <p className='topdesccart'>{item.description}</p>
                            </div>
                            
                            <p className='cartprice'>{item.price} ₽</p>
                            <div className='quantitydivcart'>
                            <p onClick={() => handleMinus(item)} className='minusplusquan'>-</p>
                            <p >{item.quantity}</p>
                            <p onClick={() => handlePlus(item)} className='minusplusquan'>+</p>
                            </div>
                            
                        </div>
                        
                    ))}
                   <div className='totalsumdiv'>
                    <p className='totalsum1'>Итого: </p>
                    <p className='totalsum2'>{totalSum} ₽</p>
                    </div>
                    </div>
<p className='ordertext1' >Способы оплаты</p>
<img src={icons} className='' />
<p className='oplatabtn'>Оплатить</p>
</div>
        </div>
    )
}
export default Order;