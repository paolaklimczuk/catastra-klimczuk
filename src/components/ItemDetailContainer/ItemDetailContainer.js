import React, {useEffect, useState} from 'react';
import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.css'

export default function ItemDetailContainer() {

    const [product, setProduct] = useState(0);

    const getProduct = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(mockProd);  
           }, 2000);
        });
      }; 

    useEffect(() => {
        getProduct().then((product) => {setProduct(product)
        })   
    }, [])

 
    return (
      product!=0 && <ItemDetail props={product}/>
      )
}