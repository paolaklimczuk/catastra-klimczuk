import React from 'react';
import './ItemDetail.css';
import { useNavigate } from 'react-router-dom';
import {useState , useEffect , useContext} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import CartContext from '../../context/CartContext';

export default function ItemDetail({props}) {

    const {cartProducts, addProductToCart } = useContext(CartContext);

    const {id, title, category, img, brand, kg, stock, price, initial = 1} = props;

    const [buy, setBuy] = useState(0);

    
    const navigate = useNavigate();

    const finishBuy = () => {
         navigate(`/cart`)
     }

    const onAdd = (quantity) => {
        addProductToCart(props, quantity);
        setBuy(quantity);
    }   

    return (
        
            <div className='detailStyle' >
                <div className='prodContentStyle'>  
                    <div className="colRightStyle">
                       <img className="img-selected" src={img}/>
                    </div>
                    <div className="colLeftStyle">
                        <h3>CATEGORIA: {category}</h3>   
                        <p>{title}</p>           
                        <p> Marca:  {brand}</p>
                        <p> Precio: $ {price}</p>
                        <p> kilos:  {kg}</p>
                        <p> Stock:  {stock}</p>                        
                        {(buy == 0) && <ItemCount stock={stock} initial={initial} onAdd={onAdd}/>}
                        <button onClick={finishBuy}>Terminar Compra</button>       
                    </div>
           
                </div>
            </div>  
   
    )
}