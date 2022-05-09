import React from "react";

//Componente utilizado propio de la aplicacion
import ItemList from "../ItemList/ItemList";

// Hook utilizado
import { useParams } from "react-router-dom";

//Estilo utilizado
import './ItemListContainer.css'; 

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