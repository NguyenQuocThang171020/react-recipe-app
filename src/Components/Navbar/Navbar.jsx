import './navbar.css'
import {FaPizzaSlice} from 'react-icons/fa'
import {GiSushis} from 'react-icons/gi'
import {GiNoodles} from 'react-icons/gi'
import {GiChopsticks} from 'react-icons/gi'
import {BsSearch} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    const [search,setSearch] = useState('')
    const navigate = useNavigate()
    const handleSubmit = (e)=>{
        e.preventDefault();
        navigate("/search/"+search)
    }
    return ( 
        <div className='navbar-container'>
            <form className='search-page' onSubmit={handleSubmit}>
                <p className='search'>  
                    <input 
                    className='search-input' type="text" 
                    placeholder='Search...'
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                    />
                    <button ><BsSearch className='icons'/></button>
                </p>
                </form>
             <div className='navbar-page'>
            <Link className='nav' to={'/cuisine/Italian'}>
                <FaPizzaSlice/>
                <h5>Italian</h5>
            </Link>
            <Link className='nav' to={'/cuisine/Japanese'}>
                <GiSushis/>
                <h5>Japan</h5>
            </Link>
            <Link className='nav' to={'/cuisine/Korean'}>
                <GiNoodles/>
                <h5>Korean</h5>
            </Link>
            <Link className='nav' to={'/cuisine/Thai'}>
                <GiChopsticks/>
                <h5>Thai</h5>
            </Link>
        </div>
        </div>
       
     );
}
 
export default Navbar;