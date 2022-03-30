import React, {useState, useEffect} from "react";
import Item from "../Item/Item";

export default function ItemList() {

    const mockProducts = [{
        id : 1,
        img: "Balanced.jpg",
        title : "Alimento Perro grande",
        brand : "Balanced", 
        price : 4550,
        kg : 20,
        stock : 20,
        initial : 1,
    },
    {
        id : 2,
        img: "Deleita.jpg",
        title : "Alimento Perro grande",
        brand : "Deleita", 
        price : 3570,
        kg : 15,
        stock : 50,
        initial : 1,
    },
    {
        id : 3,
        img: "Advance.jpg",
        title : "Alimento Perro grande",
        brand : "Advance", 
        price : 5600,
        kg : 22,
        stock : 100,
        initial : 1,  
    },
    {
        id : 4,
        img: "Nutrique.jpg",
        title : "Alimento Perro grande",
        brand : "Nutrique", 
        price : 3800,
        kg : 18,
        stock : 45,
        initial : 1, 
    },
    {
        id : 5,
        img: "Keiko.jpg",
        title : "Alimento Perro grande",
        brand : "Keiko", 
        price : 3200,
        kg : 20,
        stock : 90,
        initial : 1, 

    }]

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
        getProducts().then((products) => {setProducts(products)
        }).finally( () => {
            console.log ("termino la llamada")
        })   
    }, [])
    
    return (
        <div>  
            {products.map((product) => {
                const {id} = product
                return(
                    <Item props={product} key={id}/>    
                )
            })}                                         
        </div>
    )
}