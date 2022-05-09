import React, {useState, useEffect} from "react";

//Componente uitilizado propio de la aplicacion
import Item from "../Item/Item";

//Componentes utilizados de MUI
import { Container } from "@mui/material";
import LinearProgress from '@mui/material/LinearProgress';

// Para comunicacion a la base de datos de firebase
import db from '../../firebase';
import {collection , getDocs} from "firebase/firestore";

//Estilo utilizado
import '../../App.css';

export default function ItemList({category = 'allProducts'}) {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const getProducts = async () => {
        
        const itemColletion = collection (db, 'productos');        
        
        const productsSnapshot  = await getDocs (itemColletion);
       
        const productList   = productsSnapshot.docs.map(
            doc => {
      
                let product = doc.data();
                product.id = doc.id
                
                return product
            }
        )
        return productList

    }

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