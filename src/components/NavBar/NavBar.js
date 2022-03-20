import Button from '@mui/material/Button';
import CartWidget from '../CartWidget/CartWidget'

function NavBar() {
    return(
        <header className="main-header">
        <div >
          <img className='container-logo' src="logo.png" />
        </div>
        <div >
          <ul className="navbar">
            <li> <Button  variant="contained">Home</Button>   </li>
            <li> <Button  variant="contained">Productos</Button>   </li>
            <li> <Button  variant="contained">Nosotros</Button>   </li>
            <li> <Button  variant="contained">Novedades</Button>   </li>
            <li> <Button  variant="contained">Contacto</Button>   </li>
            <li><CartWidget/></li>
          </ul>
          </div>     
      </header>
    
    )
}

export default NavBar

