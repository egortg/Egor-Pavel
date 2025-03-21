import musicimg from './images/musicimg.svg'
import './main.css'
import Slider from "react-slick";
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import musicians from './images/musicians.svg'
import HammAli from './images/jigan.png'
import Weeknd from './images/nagiev.png'
import JONY from './images/timati.png'
import Egor from './images/dimamaslenikov.png'
import Basta from './images/kupitman.png'
import MiyaGi from './images/Chipinkos.png'
import Lil from './images/serega.png'
import Mickle from './images/krug.png'


const MyComponent = () => {
    var settings = {
        infinite: true,
        speed: 2000,
        slidesToShow: 5,
        autoplaySpeed: 5000,
        autoplay: true,
        arrows: true,
        centerMode: true,
        centerPadding: "10.5%",
    }

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://67c327bf1851890165ae532f.mockapi.io/items')
            .then(response => response.json())
            .then(data => {
                setData(data);
                
            })
            .catch(error => console.error('Ошибка:', error));
    }, []);
    return(
        <>
        <div className='backgroundimage'>
        <p className='backgroundtext'>Магазин Виниловых Пластинок на любой вкус</p>
        <Link to='/catalog'>
        <div>
            <p className='catalogbtn'>В каталог</p>
        </div>
        </Link>
        </div>

        <div className='hitsmain'>
            <p className='hitstext'>Хиты продаж</p>
            <img src={musicimg} alt='musicimg' className='musicimg'></img>
        </div>
        
        <Slider {...settings}>
        {data.map(item =>(
            <div className='boxslider'>
                 <Link to={`/product/${item.id}`} key={item.id}>
            <img className='imgslider' src={item.image} alt={item.name} />
            </Link>
            </div>
))}
    </Slider>

<div className='popularmusicians'>
<div className='popularmusiciansbox'> 
    <div className='popularmusicianstop'>
<p className='popularmusicianstext'>Популярные исполнители</p>
<img src={musicians} alt='musicians' className='musicians'></img>
    </div>
    
    <div className='musiciansmain'>
        <div className='musiciansmain1'>
        <img src={HammAli} alt='musicians' className='musicianimg'></img>
        <div className='musiciantext'>
            <p className='musicianname'>Джиганчик</p>
            <p className='musisianmore'>Подробнее</p>
        </div>
        </div>
        <div className='musiciansmain1'>
        <img src={Weeknd} alt='musicians' className='musicianimg'></img>
        <div className='musiciantext'>
            <p className='musicianname'>Нагиев</p>
            <p className='musisianmore'>Подробнее</p>
        </div>
        </div>
        <div className='musiciansmain1'>
        <img src={JONY} alt='musicians' className='musicianimg'></img>
        <div className='musiciantext'>
            <p className='musicianname'>Тимати</p>
            <p className='musisianmore'>Подробнее</p>
        </div>
        </div>
        <div className='musiciansmain1'>
        <img src={Egor} alt='musicians' className='musicianimg'></img>
        <div className='musiciantext'>
            <p className='musicianname'>Димка Маслеников</p>
            <p className='musisianmore'>Подробнее</p>
        </div>
        </div>
        <div className='musiciansmain1'>
        <img src={Basta} alt='musicians' className='musicianimg'></img>
        <div className='musiciantext'>
            <p className='musicianname'>Купитмашка</p>
            <p className='musisianmore'>Подробнее</p>
        </div>
        </div>
        <div className='musiciansmain1'>
        <img src={MiyaGi} alt='musicians' className='musicianimg'></img>
        <div className='musiciantext'>
            <p className='musicianname'>Город лох</p>
            <p className='musisianmore'>Подробнее</p>
        </div>
        </div>
        <div className='musiciansmain1'>
        <img src={Lil} alt='musicians' className='musicianimg'></img>
        <div className='musiciantext'>
            <p className='musicianname'>Серега пират</p>
            <p className='musisianmore'>Подробнее</p>
        </div>
        </div>
        <div className='musiciansmain1'>
        <img src={Mickle} alt='musicians' className='musicianimg'></img>
        <div className='musiciantext'>
            <p className='musicianname'>Круг</p>
            <p className='musisianmore'>Подробнее</p>
        </div>
        </div>
    </div>
    </div>
</div>
        </>
    )
}

export default MyComponent;