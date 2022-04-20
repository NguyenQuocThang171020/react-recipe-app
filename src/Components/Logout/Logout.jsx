import {auth} from '../../firebase'
import './logout.css'
import {GiKnifeFork} from 'react-icons/gi'
import {  useNavigate } from 'react-router-dom'
const Logout = () => {
    const handleLogout = ()=>{
        auth.signOut()
    }
    const navigate = useNavigate()
    const handleClick=()=>{
        navigate('/')
    }
    return ( 
        <div className="logout-page">
            <div className="title">
                <p onClick={handleClick}>Cooking Recipe <GiKnifeFork/></p>
            </div>
            <div className='logout'>
                <div className='photoURL'>
                    <img className='photo-user' src={auth.currentUser.photoURL} alt="" />
                </div>
                <div className='user-login'>
                    <button className='btn-logout' onClick={handleLogout}>
                        {auth.currentUser.displayName}
                    </button>
                </div>
            </div>
          
        </div>
     );
}
 
export default Logout;