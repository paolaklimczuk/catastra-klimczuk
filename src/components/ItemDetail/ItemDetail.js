import React from 'react';
import './ItemDetail.css';
import { useParams } from 'react-router-dom';
import { useEffect , useState} from 'react';
import mockProducts from '../../productsMock';
import Container from '@mui/material/Container';

export default function ItemDetail() {

    const [product, setProduct] = useState({});

    const {id} = useParams();

    useEffect ( () => {
        filterProductById(mockProducts, id);
    },[])

    const filterProductById = (array, id) => {
        return array.filter ( (product) => {

            if (product.id == id) {
                return setProduct(product);
            }
        })
    }    

    return (
        
            <div className='detailStyle' >
                <div className='prodContentStyle'>  
                    <div className="colRightStyle">
                       <img className="img-selected" src={product.img}/>
                    </div>
                    <div className="colLeftStyle">
                        <h3>CATEGORIA: {product.category}</h3>   
                        <p>{product.title}</p>           
                        <p> Marca:  {product.brand}</p>
                        <p> Precio: $ {product.price}</p>
                        <p> kilos:  {product.kg}</p>
                        <p> Stock:  {product.stock}</p>           
                    </div>
                </div>
            </div>  
   
    )
}