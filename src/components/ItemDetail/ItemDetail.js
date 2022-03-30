import React from 'react';
import './ItemDetail.css'

export default function ItemDetail({props}) {

    const {title, brand, price, kg, stock, img } = props

    return (
        
        <div className='itemDetailStyle'>
            <h3>{title}</h3>           
            <p> Marca:  {brand}</p>
            <p> Precio: $ {price}</p>
            <p> kilos:  {kg}</p>
            <p> Stock:  {stock}</p>
            <img className='detailStyle' src={img}/>
        </div>
    )
    

}