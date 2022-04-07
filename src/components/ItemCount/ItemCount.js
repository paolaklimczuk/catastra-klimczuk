import React, { useState} from 'react';

export default function ItemCount(props) {

    const {stock, initial, onAdd} = props;
    
    const [count, setCount] = useState(initial);

    const addCount = () => {
        (count<stock) && (setCount(count+1));
    }

    const removeCount = () => {
        (count>initial) && (setCount(count-1));
    }

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
