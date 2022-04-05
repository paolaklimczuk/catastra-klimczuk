import { Category } from '@mui/icons-material';
import React from 'react';
import ItemCount from '../ItemCount/ItemCount'
import './Item.css';
import { Link } from 'react-router-dom';

export default function Item({props}) {

    const {title, category,  brand, price, kg, stock, initial, img, id} = props;

    const onAdd = (qty) => {
        alert (`Agregaste ${qty} productos`);
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
