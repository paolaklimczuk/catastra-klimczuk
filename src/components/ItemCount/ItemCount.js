import React, { useState} from 'react';

export default function ItemCount(props) {

    const {stock, initial, onAdd} = props;
    
    const [count, setCount] = useState(initial);

    //Agrega una cantidad
    const addCount = () => {
        (count<stock) && (setCount(count+1));
    }
    
    //Remueve una cantidad
    const removeCount = () => {
        (count>initial) && (setCount(count-1));
    }

    //Chequea si hay disponible una cantidad
    const checkStock = () => {
        onAdd(count);
    }    
 
    return (
        <div>
            <div>
                
                <button onClick={removeCount}>-</button>    

                 {count}

                <button onClick={addCount}>+</button>        
            </div>            
                <button onClick={checkStock}>Agregar</button>
        </div>        
    )
}
