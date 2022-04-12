import CartWidget from '../CartWidget/CartWidget';
import MenuPopupState from '../MenuPopupState/MenuPopupState';
import { Container } from '@mui/material';  
import {useNavigate} from 'react-router-dom';
import './NavBar.css'

  function NavBar() {

     const navigate = useNavigate();

     const handleLogoClick = () => {
       navigate(`/`)
     }

    return (
        <Container className='nav-style'>
                <img className='container-logo' src="../logo.png" onClick={handleLogoClick}/>
                <MenuPopupState />               
                <CartWidget />
        </Container>
    );
}

export default NavBar