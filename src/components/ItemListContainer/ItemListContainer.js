import React from "react";
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css'

export default function ItemListContainer(props) {

    const {titulo} = props;

    return (
        <div className="list-styte">        
            <h2> {titulo} </h2>         
            <ItemList/>          
        </div>

    );

}