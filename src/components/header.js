import './header.css'
import logo from './images/Logo.svg'
import cart from './images/cart.svg'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';
const Header = () =>{
    const cartItems = useSelector((state) => state.cart.items);
    const totalSum = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return(
        <div className='header'>
            <div className='header__box'>
<Link to='/'>
<div className="logomain">
<img src={logo} alt='logo' className='logoimg'></img>
<p className='logoname'>Vinilka</p>
</div>
</Link>

<div className="navigation">
    <Link to='/'><p className='navigationtxt' >Главная</p></Link>
    <Link to='/catalog'><p  className='navigationtxt'>Каталог</p></Link>
    <p className='navigationtxt' ><a href='https://t.me/danyamoncler' >Обратная связь</a></p>
</div>

<div className="profilekorz">
    <div className='proflilekorzobv'>
        <p className='authbtn'>Войти</p>
    </div>

    <Link to='/cart'>
    <div className='proflilekorzobv'>
    <img src={cart} alt='logo' className='cartimg'></img>
     <p>{totalSum}</p>
    </div>
    </Link>
</div>
</div>
        </div>
    )
}
export default Header;