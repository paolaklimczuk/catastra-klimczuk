import CartWidget from '../CartWidget/CartWidget';
import MenuPopupState from '../MenuPopupState/MenuPopupState';
import AccountMenu from '../AccountMenu/AccountMenu';
import { Container } from '@mui/material';  
import {useNavigate} from 'react-router-dom';
import './NavBar.css'
import { ForkRight } from '@mui/icons-material';

  function NavBar() {

     const navigate = useNavigate();

    //envia a pagina home
     const handleLogoClick = () => {
       navigate(`/`)
     }

    return (
        <Container className='nav-style'>
                <img className='container-logo' src="../logo.png" onClick={handleLogoClick}/>
                <MenuPopupState />               
                <CartWidget />             
                <AccountMenu />
               
        </Container>
    );
}

export default NavBar