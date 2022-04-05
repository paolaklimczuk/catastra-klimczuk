import React from 'react';
import Container from '@mui/material/Container';
import './Faq.css'

const FaqPage = () => {
    return (
        <Container className='faq-style'>
                <div >
                    <h3 className="title">Preguntas Frecuentes</h3>
                </div>
            <div className='faq-style'>    
                <h3> 1- Como interpretar correctamente la tabla de racionamiento de los productos para perros y gatos en crecimiento?</h3> 
               <p>Para poder interpretar correctamente la tabla de racionamiento para cachorros, debés conocer la edad de tu mascota actual en meses y el peso que llegará a tener de adulto en Kg. (peso adulto esperado). En el caso de los perros de raza, según el estándar de cada una de ellas y el peso de los progenitores, puede calcularse fácilmente consultando a su Médico Veterinario; en el caso de los perros mestizos sugerimos que sea el profesional quien lo estime de manera aproximada. 
                Una vez obtenidos ambos datos (edad actual y peso adulto esperado), solo debés buscar los valores en la tabla de racionamiento correspondiente al alimento más adecuado para tu mascota. Allí encontrarás, en el cruce de ambos valores, la cantidad en gramos a administrarle a tu mascota por día (ración diaria). Dicha ración diaria puede ser dividida y administrada en dos a cuatro porciones según el criterio del Médico Veterinario consultado.</p>
               <h3> 2- Donde puedo encontrar la fecha de vencimiento de los productos?</h3>
                <p>Las fechas de vencimiento y elaboración, la partida y el número de lote de todos nuestros productos, se encuentran en el tercio inferior del envase en su frente o contrafrente.</p>
                <h3> 3- Donde puedo comprar los productos?</h3>
                <p>Podés acceder al buscador de Puntos de Venta para conocer sus datos de contacto.</p>
            </div>
     </Container>
    )
}
export default FaqPage
