import { Button } from "@mui/material";
import React from "react";
import Card from "../Card/Card";
import './ItemListContainer.css'

export default function ItemListContainer(props) {
    return (
        <div className="list-styte">
            <h2> {props.title}</h2>
            <Card title="Alimento Perro grande" brand="Purina" price={4550} kilos={20}/>
            <Card title="Alimento Perro grande" brand="Excelent" price={3800} kilos={22}/>
            <Card title="Alimento Perro grande" brand="Deleita" price={1700} kilos={10}/>
        </div>

    );

}