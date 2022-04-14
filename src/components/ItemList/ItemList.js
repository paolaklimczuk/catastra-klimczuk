import React, {useState, useEffect} from "react";
import Item from "../Item/Item";
import mockProducts from '../../productsMock';
import { Container } from "@mui/material";
import LinearProgress from '@mui/material/LinearProgress';
import '../../App.css';

// import db from '../../firebase';
// import {collection , getDocs} from "firebase/firestore";

export default function ItemList({category = 'allProducts'}) {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // const getProducts = async () => {
        
    //     const itemColletion = collection (db, 'productos');
        
    //     const productsSnapshot  = await getDocs (itemColletion);
    //     console.log ("snap: " , productsSnapshot);

    //     const productList   = productsSnapshot.docs.map(
    //         doc => {
    //             console.log ("doc:" , doc.data());
    //             console.log ("id:" , doc.id);

    //             let product = doc.data();
    //             product.id = doc.id
    //             return product
    //         }
    //     )
    //     return productList

    // }

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
            setLoading(false);
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
            <p className="parStyle">Productos</p>
            {loading ? (<LinearProgress className="loadingStyle"/>)       
             : <> {products.map((product) => <Item props={product} key={product.id}/>)} </>}
        </Container>
    )
}