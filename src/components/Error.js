import './error.css'
import {Link} from 'react-router-dom'
export default function sdf(){
    return(
        <div className='errorback'>
            <div className='errormain'>
        <h1 className='er404'>Город лох
        </h1>
        <h3 className='notfound'>Страница не найдена</h3>
        <Link to='/'>
        <p className='catalogbtn1'>На главную</p>
        </Link>
        </div>
        </div>
    )
}
