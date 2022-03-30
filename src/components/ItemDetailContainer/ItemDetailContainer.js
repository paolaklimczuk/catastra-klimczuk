import { findAllByTestId } from '@testing-library/react';
import React, {useEffect, useState} from 'react';
import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.css'

export default function ItemDetailContainer() {

    const [product, setProduct] = useState(0);
        
    const mockProd = {
        id : 1,
        img: "Balanced.jpg",
        title : "Alimento Perro grande",
        brand : "Balanced", 
        price : 4550,
        kg : 20,
        stock : 20,
        initial : 1,
    }
    
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