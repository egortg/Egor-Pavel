import React, { useEffect, useState } from 'react';
import './catalog.css'
import {Link} from 'react-router-dom'

const Catalog = () =>{
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [sortField, setSortField] = useState(''); 
    const [sortOrder, setSortOrder] = useState('asc'); 


    
    useEffect(() => {
        fetch('https://67c327bf1851890165ae532f.mockapi.io/items')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setFilteredData(data); 
            })
            .catch(error => console.error('Ошибка:', error));
    }, []);

    const handleSortChange = (event) => {
        const value = event.target.value;
        if (value === "option1") {
            setSortField('price');
            setSortOrder('desc'); 
        } else if (value === "option2") {
            setSortField('price');
            setSortOrder('asc');
        }
    };

    const sortedData = [...filteredData].sort((a, b) => {
        if (sortField === 'price') {
            return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
        } 
    });


    return(


        <div className='catalogmain'>
<div className='formradio1'>
            <p className='filtertextmain'>Фильтрация</p>

    <form className='formradio'>
   <p className='filter1'>Год</p>
    <p className='filter1'><input className='filterbtn' name="filter" type="radio" value="filter" /> Фильтр</p>
    <p className='filter1'><input name="filter" type="radio" value="filter" /> Фильтр</p>
    <p className='filter1'><input name="filter" type="radio" value="filter" /> Фильтр</p>
  </form> 
  <form className='formradio'>
   <p className='filter1'>Длительность</p>
    <p className='filter1'><input name="filter" type="radio" value="filter" /> Фильтр</p>
    <p className='filter1'><input name="filter" type="radio" value="filter" /> Фильтр</p>
    <p className='filter1'><input name="filter" type="radio" value="filter" /> Фильтр</p>
  </form> 
  <form className='formradio'>
   <p className='filter1'>Жанр</p>
    <p className='filter1'><input name="filter" type="radio" value="filter" /> Фильтр</p>
    <p className='filter1'> <input name="filter" type="radio" value="filter" /> Фильтр</p>
    <p className='filter1'><input name="filter" type="radio" value="filter" /> Фильтр</p>
  </form> 
  <form className='formradio'>
   <p className='filter1'>Исполнитель</p>
    <p className='filter1'><input name="filter" type="radio" value="filter" /> Фильтр</p>
    <p className='filter1'><input name="filter" type="radio" value="filter" /> Фильтр</p>
    <p className='filter1'><input name="filter" type="radio" value="filter" /> Фильтр</p>
  </form> 
  </div>
  <div className='rightcatalog'>
  <form >
    
        <label className='labelform' for="city-select">Сортировка</label>
        <select className='Select'onChange={handleSortChange}>
            <option className='optionprice' value="option1" >По возрастанию цены</option>
            <option className='optionprice' value="option2" >По убывванию цены</option>
        </select>
        </form>
    <div className='catalogmain1'>
        {sortedData.map(item => (
            <Link to={`/product/${item.id}`} key={item.id}>
            <div className='cardcatalogmain'>
                <img className='imgcatalog' src={item.image} alt={item.name} />
                <p className='catalogcardname'>{item.name}</p>
                <p className='catalogcarddesc'>{item.description}</p>
                <p className='catalogcardprice'>{item.price} ₽</p>
        </div>
        </Link>
        ))}
</div>
        <div>



        </div>
        </div>
    </div>
    
    )
}
export default Catalog;