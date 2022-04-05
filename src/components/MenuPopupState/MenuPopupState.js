import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Link } from 'react-router-dom';
import './MenuPopupState.css'

export default function MenuPopupState() {
    return (
        <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
                <React.Fragment>
                    <Button className='button-style'>
                        <Link to={'/'}>Home</Link>
                    </Button>
                    <Button  className='button-style' variant="text" {...bindTrigger(popupState)}>
                         Productos
                    </Button>
                    <Menu {...bindMenu(popupState)}>
                        <MenuItem  className='submenu-style' onClick={popupState.close}>
                            <Link to={'/categoria/perro'}>PERROS</Link>
                         </MenuItem>
                        <MenuItem  className='submenu-style' onClick={popupState.close}>
                            <Link to={'/categoria/gato'}>GATOS</Link>
                        </MenuItem>
                    </Menu>
                    <Button className='button-style'>
                        <Link to={'/nosotros'}>Nosotros</Link></Button>
                    <Button className='button-style'>
                        <Link to={'/faq'}>FAQ</Link></Button>
                    <Button className='button-style'>
                        <Link to={'/contacto'}>Contacto</Link>
                    </Button>
                </React.Fragment>
            )}
        </PopupState>
    );
}