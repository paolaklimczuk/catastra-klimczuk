import React from 'react';
import { Link } from 'react-router-dom';

//Componente utilizado propio de la aplicacion
import ItemCount from '../ItemCount/ItemCount'

//Hook utilizado
import {useContext} from 'react';

//Utilizacion del contexto del carrito
import CartContext from '../../context/CartContext';

//Estilo utilizado
import './Item.css';

export default function Item({props}) {

    const {addProductToCart } = useContext(CartContext);

    const {id, title, category,  brand, price,  stock, initial = 1, img} = props;

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
