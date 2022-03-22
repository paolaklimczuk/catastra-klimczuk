import { queryByTestId } from '@testing-library/react';
import React from 'react';
import ItemCount from '../ItemCount/ItemCount'
import './Card.css'

export default function Card(props) {

    const {title, brand, price, kg, stock, initial} = props;

    const onAdd = (qty) => {
        alert (`Agregaste ${qty} productos`);
    }

    return (
        <div className="cardStyle">
            <h2>{title}</h2>
            <p>Marca:  {brand}</p>
            <p>Precio: $ {price}</p>
            <p>kilos:  {kg}</p>
            <ItemCount stock ={stock} initial={initial} onAdd = {onAdd}/>
        </div>
    );
}
