import './Pie.module.css';
import logo from "../../assets/Logo.png";
import { Link } from 'react-router-dom';

function Pie() {
    return (
        <footer>
            <Link to='/'>
                <img src={logo} alt='Logo' />
            </Link>
        </footer>
    )
}

export default Pie