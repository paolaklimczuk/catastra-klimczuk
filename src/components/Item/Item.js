import { Category } from '@mui/icons-material';
import React from 'react';
import ItemCount from '../ItemCount/ItemCount'
import './Item.css';
import { Link } from 'react-router-dom';
import {useContext} from 'react';
import CartContext from '../../context/CartContext';

export default function Item({props}) {

    const {cartProducts, addProductToCart } = useContext(CartContext);

    const {id, title, category,  brand, price, kg, stock, initial = 1, img} = props;

    const onAdd = (qty) => {
        addProductToCart(props, qty);
    }

    return (
        <div className="cardStyle">

            <div>
                <img className="imgStyle" src={img}/>
            </div>
            <p className="titleStyle">{title}</p>   
            <div>
                <p className="parrafoStyle"> Categoria: {category}</p>      
            </div>
            <p className="parrafoStyle"> Marca:  {brand}</p>
            <p className="parrafoStyle"> Precio: $ {price}</p>
     
            <button className="butt-style">
                    <Link to={'/productos/' + id}>Detalle</Link>
            </button>               
            <ItemCount stock ={stock} initial={initial} onAdd = {onAdd}/>
        </div>
    );
}
