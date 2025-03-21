import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './productdetail.css'
import { useDispatch } from 'react-redux';
import { addToCart } from './CartSlice.js'; 


const Productdetail = () =>{
    const { id } = useParams(); 
    const [data, setData] = useState(null); 

    const dispatch = useDispatch(); 


    useEffect(() => {
        fetch(`https://67c327bf1851890165ae532f.mockapi.io/items?id=${id}`)
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    setData(data[0]);
                } else {
                    console.error('Товар не найден');
                }
            })
            .catch(error => console.error('Ошибка:', error));
    }, [id]);

    const handleAddToCart = () => {
        if (data) {
            dispatch(addToCart({ id: data.id, name: data.name, image: data.image, price: data.price, description: data.description })); 
        }
    };

    if (!data) {
        return <div>Загрузка...</div>;
    }

    return (
        <div className='cardmain'>
            <div className='cardtop'>
           <div className='divimgcardmain'>
            <div className='divimgcardalt'>
           <img className='imgcardalt' src={data.image} alt={data.name} />
           <img className='imgcardalt' src={data.image} alt={data.name} />
           </div>
           <img className='imgcardmain' src={data.image} alt={data.name} />
            </div> 
            <div>
                <p className='cardname'>{data.name}</p>
                <p className='cardmusician'>{data.description}</p>
                <p className='cardprice'>{data.price}₽</p>
                <p className='carddesc'>{data.about}</p>
                <p className='carddesc'>Стиль: {data.category}</p>
                <p className='carddesc'>Страна: {data.country}</p>
                <p className='carddesc'>Лэйбл: {data.label}</p>
                <button className='oplatabtn' onClick={handleAddToCart}>В корзину</button>

            </div>  
            </div>
            <div className='cardbottom'>
                <p>Другие пластинки от {data.description}</p>
                <div className='anothermusiccard'>
                <img className='anothermusiccardimg' src={data.image} alt={data.name} />
                <img className='anothermusiccardimg' src={data.image} alt={data.name} />
                </div>
            </div>
           </div>
       );
   };

export default Productdetail;