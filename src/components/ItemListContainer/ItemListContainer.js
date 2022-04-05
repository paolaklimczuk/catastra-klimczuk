import React from "react";
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css'; 
import { useParams } from "react-router-dom";

export default function ItemListContainer(props) {

    const {titulo} = props;
    const {category} = useParams();

    return (
        <div className="list-styte">        
            <h2> {titulo} </h2>         
            <ItemList category={category}/>          
        </div>

    );

}