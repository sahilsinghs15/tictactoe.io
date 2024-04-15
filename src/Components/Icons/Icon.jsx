import { FaPen, FaRegCircle, FaTimes } from 'react-icons/fa';
import '../Cards/Card.css';
function Icon({name}){
    if(name == 'circle'){
        return <FaRegCircle/>
    }else if(name == 'cross'){
        return <FaTimes/>
    }else{
        return <FaPen/>
    }
}

export default Icon;