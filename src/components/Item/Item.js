import { queryByTestId } from '@testing-library/react';
import React from 'react';
import ItemCount from '../ItemCount/ItemCount'
import './Item.css'

export default function Item({props}) {

    const {title, brand, price, kg, stock, initial, img, id} = props;

    const onAdd = (qty) => {
        alert (`Agregaste ${qty} productos`);
    }

    return (
        <div className="cardStyle">
            <h2>{title}</h2>           
            <p className="parrafoStyle"> Marca:  {brand}</p>
            <p className="parrafoStyle"> Precio: $ {price}</p>
            <ItemCount stock ={stock} initial={initial} onAdd = {onAdd}/>
        </div>
    );
}
