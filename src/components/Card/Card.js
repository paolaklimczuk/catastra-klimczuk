import React from 'react';
import './Card.css'

export default function Card(props) {
    return (
        <div className="cardStyle">
            <h2>{props.title}</h2>
            <p>Marca: $ {props.brand}</p>
            <p>Precio: $ {props.price}</p>
            <p>Kilos: $ {props.kilos}</p>
        </div>
    );
}
