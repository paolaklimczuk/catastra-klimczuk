import { Button } from "@mui/material";
import React from "react";
import Card from "../Card/Card";
import './ItemListContainer.css'

export default function ItemListContainer(props) {

    const {titulo} = props;

    return (
        <div className="list-styte">        
            <h2> {titulo} </h2>            
            <Card title="Alimento Perro grande" brand="Purina" price={4550} kg={20} stock={20} initial={1} />
            <Card title="Alimento Perro grande" brand="Excelent" price={3800} kg={22} stock={15} initial={1}/>
            <Card title="Alimento Perro grande" brand="Deleita" price={1700} kg={10} stock={35} initial={1}/>
        </div>

    );

}