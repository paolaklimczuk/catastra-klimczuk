import React from 'react';

// Componente utilizado
import ItemDetail from '../components/ItemDetail/ItemDetail';

//Hooks utilizados
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// Para comunicacion con la base de datos
import db from '../firebase';
import {doc , getDoc} from "firebase/firestore";

const DetailPage = () => {

    const {id} = useParams();
    const [product, setProduct] = useState({})

    useEffect( () => {
        getProduct()
    }, [id])

    // promesa para obtener los productos de la base     
    const getProduct = async () => {
        
        const docRef = doc (db, 'productos', id);        
        
        const docSnap  = await getDoc (docRef);

        let prod = docSnap.data() 
        prod.id = docSnap.id

        setProduct(prod)

        }        

        return (
             <ItemDetail props={product}/>
        );
}

export default DetailPage;