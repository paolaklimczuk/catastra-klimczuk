import React from 'react';

//Hooks utilizados
import { useNavigate } from 'react-router-dom';
import {useState , useContext} from 'react';

//Componente utilizado propio de la aplicacion
import ItemCount from '../ItemCount/ItemCount';

//utilizacion de contexto del carrito
import CartContext from '../../context/CartContext';

//Estilo utilizado
import './ItemDetail.css';

export default function ItemDetail({props}) {

    const {addProductToCart } = useContext(CartContext);

    const {title, category, img, brand, kg, stock, price, initial = 1} = props;

    const [buy, setBuy] = useState(0);
    
    const navigate = useNavigate();

    //Al finalizar la compra se direcciona a la pagina del carrito
    const finishBuy = () => {
         navigate(`/cart`)
     }

     //Agrega producto al carrito con su cantidad pedida
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