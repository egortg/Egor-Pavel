import {Link} from 'react-router-dom'
import './footer.css'
import logo from './images/Logo.svg'
import saddam from './images/Saddam.png'
import vimeo from './images/Vimeo.jpg'
import pintererst from './images/pinterest.jpg'
import telegram from './images/telegram.jpg'
import vk from './images/VK.png'
import zzzzz from './images/ZZZZZZZ.jpg'
import facebook from './images/facebook.png'
import bitcoin from './images/Bitcoin.jpg'
import phone from './images/Phone.png'
import mail from './images/mail.svg'
import adress from './images/adress.svg'

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" })
}

const Footer = () =>{
    return(
    <div className="footermain">
  <div className="footer1">
    <div className="contacts">
        <p className='orangetextfooter'>Связь с нами</p>
        <div className="number">
        <img src={phone} alt='logo' className='cartimg'></img>
        <p className='infotextfooter'>+1 555 505 5050</p>
        </div>
        <div className="number">
        <img src={mail} alt='logo' className='cartimg'></img>
        <p className='infotextfooter'>info@designmodo.com</p>
        </div>
        <div className='iconszv'>
        <div><img src={pintererst} alt='logo' className='cartimg1'></img></div>
        <div><img src={bitcoin} alt='logo' className='cartimg1'></img></div>
        <div><img src={zzzzz} alt='logo' className='cartimg1'></img></div>
        <div><img src={vimeo} alt='logo' className='cartimg1'></img></div>
        </div>
    </div>
    <div className='adressmain'>
        <p className='orangetextfooter'> Наши офисы</p>
        <div className="number">
        <img src={adress} alt='logo' className='cartimg'></img>
        <p className='infotextfooter'>Москва</p>
        </div>
        <div className="number">
        <img src={adress} alt='logo' className='cartimg'></img>
        <p className='infotextfooter'>Санкт-Петербург</p>
        </div>
    </div>
    <div>
        <p className='orangetextfooter'
        >Где нас найти</p>
        <img src={saddam} alt='logo' className='cartimg'></img>
    </div>
  </div>
  <div className="footer2">
  <Link to='/'>
    <div className='logomain1'>
    <img src={logo} alt='logo' className='cartimg'></img>
    <p className='logoname1'>Vinilka</p>
    </div>
    </Link>
    <div className='navfooter'>
    <Link to='/'><p className='logoname1' onClick={() => scrollToTop()}>Главное</p></Link>
    <Link to='/catalog'> <p className='logoname1'onClick={() => scrollToTop()}>Каталог</p></Link>
        <p className='logoname1'>Обратная связь</p>
        <p className='copyright'>©Copyright.All right reserved.</p>
    </div>
    <div className='svyaz'>
        <p className='logoname1'>Связь с нами</p>
        <div className='iconssocial'>
        <div><img src={facebook} alt='logo' className='cartimg'></img></div>
        <div><img src={telegram} alt='logo' className='cartimg'></img></div>
        <div><img src={vk} alt='logo' className='cartimg'></img></div>
        </div>
    </div>
  </div>
    </div>
    )
}
export default Footer;
