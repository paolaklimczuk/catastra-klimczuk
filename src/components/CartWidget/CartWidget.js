import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import DeleteIcon from '@mui/icons-material/Delete';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import './CartWidget.css';
import {useContext , useState} from 'react';
import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';

export default function CartWidget() {

    const {cartProducts, totalPrice, deleteProduct} = useContext (CartContext);

    const [anchorEl, setAnchorEl] = useState(null);
    
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <IconButton>
            <ShoppingCartIcon 
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
            />
            <p className='parrafStyle'>{cartProducts.length}</p>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                className='cart-modal'
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                    },
                    '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                    },
                    },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                <p className='parrafStyle'>Carrito de Compras</p>
                <Divider />
                {cartProducts.map( (cartProduct) => {
                    return(
                        <MenuItem className='submenu-style' key={cartProduct.prod.id}>
                            <div>
                                <img className='imgItemStyle' src={`./${cartProduct.prod.img}`} /> 
                            </div>
                            <div className='itemModalStyle'>
                                <p className='parrafStyle'>{cartProduct.prod.title}</p>
                                <p className='parrafStyle'>Cantidad agregada: {cartProduct.qty}</p>
                                <span className='parrafStyle'>$ {cartProduct.prod.price}</span>
                            </div>
                            <div className='itemModalActionStyle'>
                                <DeleteIcon/> 
                            </div>
                        </MenuItem>
                    )
                })} 
                
                <Divider />
                <div className='footerStyle'>
                    <Button className="buttonStyle"><Link to="/cart">Iniciar la compra</Link></Button>
                    <p className="parrafStyle"> Precio total $: {totalPrice()}</p>
                </div>
            </Menu>
        </IconButton>
    );
}