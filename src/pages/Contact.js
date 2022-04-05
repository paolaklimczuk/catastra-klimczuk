import React from 'react';
import Container from '@mui/material/Container';
import './Contact.css'

const ContactPage = () => {
    return (
        <Container className='faq-style'>
            <form id="form">
                <div >
                    <h3 className="title">Complete el siguiente formulario de Contacto: </h3>
                </div>
                <div className="wrapper">             
                    <div className="elem-group">
                        <label>Nombre: </label>
                    </div>
                    <div  className="elem-group">
                     <input type="text" id="name" name="name" placeholder="Nombre"  required/>
                    </div>
                    <div className="elem-group">
                        <label >Apellido: </label>
                    </div>
                    <div  className="elem-group">
                        <input type="text" id="surname" name="surname" placeholder="Apellido" required/>
                    </div>
                    <div className="elem-group">
                        <label>Telefono: </label>
                    </div>
                    <div  className="elem-group">
                        <input type="tel" id="phone" name="phone" placeholder="(Código de área) Número" required/>
                    </div>
                    <div className="elem-group">
                        <label>Email: </label>
                    </div>
                    <div  className="elem-group">
                        <input type="email" id="email" name="email" placeholder="mail@email.com" required/>
                    </div>                   
                    <div className="elem-group">
                        <label>Motivo: </label>
                    </div>
                    <div  className="elem-group">
                        <input type="text" id="title" name="email_title" required placeholder="Problema/Consulta" />
                    </div>
                    <div className="elem-group">
                        <label>Solicitud: </label>
                    </div>
                        <div  className="elem-group">
                        <textarea id="message" name="message" placeholder="Escribe tu mensaje aquí." required ></textarea>
                    </div>
                    <div  className="elem-group">
                        <button className="form-btn" type="submit" >Enviar</button>
                    </div>
                    <div  className="elem-group">
                        <button className="form-btn" type="reset" >Limpiar</button>
                    </div>
                </div>
            </form>


        </Container>
    )
}
export default ContactPage

