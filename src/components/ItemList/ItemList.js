import React, {useState, useEffect} from "react";
import Item from "../Item/Item";
import mockProducts from '../../productsMock';
import { Container } from "@mui/material";

export default function ItemList({category = 'allProducts'}) {


    console.log (category);

    const [products, setProducts] = useState([])

    const getProducts = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if(mockProducts.length>0)
              resolve(mockProducts);          
            else
              reject('error');
          }, 2000);
        });
      }; 

     useEffect(() => {
        setProducts([]);
        getProducts().then((prods) => {
            findProductByCategory(prods, category)
        })
    }, [category])

    const findProductByCategory = (products, category) => {
      if (category == 'allProducts') {
          setProducts([])
          return setProducts(products)
      }
      else {
          products.map((product) => {
              if (product.category === category) {
                  return setProducts(products => [...products, product]);
              }
          }
          )
      }
    }
      
    return (
        <Container>  

            {
                (products.length > 0) ? products.map((product) => {
                    return (<Item props={product} key={product.id}></Item>)
                })
                   : <p>Cargando productos...</p>}            
        </Container>
    )
}