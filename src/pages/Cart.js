import { useContext } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import CartContext from "../context/CartContext";
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import './Cart.css';
import React, {useState} from "react";
import ModalCustom from '../components/Modal/Modal';
import db from '../firebase'
import { addDoc, collection } from 'firebase/firestore';



const CartPage = () => {
    const { cartProducts, deleteProduct, resetProducts, totalPrice, quantityProducts } = useContext(CartContext)
    const [openModal, setOpenModal] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        phone: '',  
        email: '',
    })
    const [order, setOrder] = useState(
        {
            buyer: formData,
            items: cartProducts.map((cartProd) => {
                return {
                    id: cartProd.prod.id,
                    title: cartProd.prod.title,
                    price: cartProd.prod.price
                }
            }),
            dateOrder: 0,
            total: totalPrice()
        }

    )

    const [successOrder, setSuccessOrder] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        let prevOrder = {...order,
            buyer: formData,
            dateOrder: (new Date()).toDateString()
        }
        setOrder({...order,
            buyer: formData,
            dateOrder: (new Date()).toDateString() })
        pushOrder(prevOrder)
    }

    const pushOrder = async (prevOrder) => {
        const orderFirebase = collection(db, 'ordenes')
        const orderDoc = await addDoc(orderFirebase, prevOrder)        
        setSuccessOrder(orderDoc.id)
        
    }

    const handleChange = (e) => {
        const {value, name} = e.target

        setFormData({
            ...formData,
            [name]: value
        })
    }   


    return (
        <Container  className= "containerStyle">
            {
                (cartProducts.length === 0) &&
                <div className= "containerStyle">
                    <p className= "parrafoStyle"> Sin productos en carrito...</p>
                    <Link to='/'>
                        <button className='button-style'>CONTINUAR</button>
                    </Link>
                </div>
            }
            {
                (cartProducts.length != 0) &&
                <TableContainer  component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow className="containerStyle">
                                <TableCell className="containerStyle">TIPO PRODUCTO</TableCell>
                                <TableCell className="containerStyle">IMAGEN</TableCell>                                
                                <TableCell className="containerStyle" align="middle">MARCA</TableCell>
                                <TableCell className="containerStyle" align="center">PRECIO</TableCell>
                                <TableCell className="containerStyle" align="center">CANTIDAD</TableCell>
                                <TableCell className="containerStyle" align="center">TOTAL POR PRODUCTO</TableCell>
                                <TableCell className="containerStyle" align="center">ELIMINAR</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {cartProducts.map((cartProduct) => (
                                <TableRow  key={cartProduct.prod.id}>
                                     <TableCell className="parrafoStyle" component="th" scope="row">
                                        {cartProduct.prod.title}
                                    </TableCell>
                                    <TableCell className="parrafoStyle" component="th" scope="row">
                                        {<img className="imgCart" src={cartProduct.prod.img}></img>}
                                    </TableCell>                                   
                                    <TableCell className="parrafoStyle" align="right">{cartProduct.prod.brand}</TableCell>
                                    <TableCell className="parrafoStyle" align="right"> $ {cartProduct.prod.price}</TableCell>
                                    <TableCell className="parrafoStyle" align="right">{cartProduct.qty}</TableCell>
                                    <TableCell className="parrafoStyle" align="right"> $ {(cartProduct.prod.price * cartProduct.qty)}</TableCell>
                                    <TableCell className="parrafoStyle" align="right">{<DeleteIcon onClick={() => {deleteProduct(cartProduct.prod.id) }}></DeleteIcon>} 
                                    </TableCell>
                                </TableRow>

                            ))}
                        </TableBody>
                    </Table>
                    <div  className= "finallyStyle">
                         <p className="parrafoStyle"> TOTAL de productos: {quantityProducts()}</p>
                         <p className ="parrafoStyle">MONTO TOTAL       : ${totalPrice()}</p>
                         <button onClick={() => {resetProducts()}}>RESETEAR Carrito de compras</button>
                         <button onClick={() => setOpenModal(true)}>Finalizar Compra</button>
                    </div>     
                </TableContainer>
            }

            <ModalCustom handleClose={() => setOpenModal(false)} open={openModal}>
                
                {successOrder ? (
                    <div>
                        <h3>Orden generada correctamente</h3>
                        <p>Su numero de orden es: {successOrder}</p>
                        <div>
                            <Link to='/'>
                                <button className='button-style' onClick={() => { resetProducts() }}>Salir</button>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <>
                        <h2>Formulario para realizar orden de Compra</h2>
                        <form onSubmit={handleSubmit}>
                            <input type="text" name='name' placeholder='Nombre' 
                                onChange={handleChange} 
                                value={formData.name}
                                required
                            />
                            <input type="number" name='phone' placeholder='Telefono' 
                                onChange={handleChange} 
                                value={formData.phone}
                                required
                            />
                            <input type="mail" name='email' placeholder='mail' 
                                onChange={handleChange} 
                                value={formData.email}
                                required
                            />
                            <button className='button-style' type="submit">Enviar</button>
                        </form>
                    </>
                )}
                
            </ModalCustom>
        </Container>

    )

}

export default CartPage;