import React from 'react';
import ItemDetail from '../components/ItemDetail/ItemDetail';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import mockProducts from "../productsMock";

const DetailPage = () => {

    const {id} = useParams();
    const [product, setProduct] = useState({})

    useEffect( () => {
        filterProductByid(mockProducts, id)
    }, [id])

    const filterProductByid= (array , id) => {
        return array.map( (product) => {
            if(product.id == id) {
                return setProduct(product)
            }
        })
    } 

    return (
        <ItemDetail props={product}/>
    );
}

export default DetailPage;