import React from 'react';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import './CartWidget.css';

export default function CartWidget() {
    return (
        <IconButton color="primary" aria-label="Agregar" className='cartStyle'>
        <AddShoppingCartIcon/>
        <p>5</p>
        </IconButton>
    );
}