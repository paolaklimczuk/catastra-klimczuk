import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Container from '@mui/material/Container';

import '../App.css';

import { useEffect, useState } from 'react';
import {useAuth} from '../context/AuthContext';

import db from '../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import {Link} from 'react-router-dom';

function Row(props) {
    const { row } = props;
    const [open, setOpen] = useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }} className="containerStyle">
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.id}
                </TableCell>
                <TableCell align="right">{row.dateOrder}</TableCell>
                <TableCell align="right">{row.total}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell className="containerStyle" style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6} >
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h8" gutterBottom component="div" >
                                Productos
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow className="containerStyle">
                                        <TableCell className="containerStyle">Id Producto</TableCell>
                                        <TableCell className="containerStyle">Producto</TableCell>
                                        <TableCell className="containerStyle" align="right">Precio ($)</TableCell>
                                        <TableCell className="containerStyle"> Cantidad Pedida</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.items.map((prod) => (
                                        <TableRow key={prod.id}>
                                            <TableCell component="th" scope="row">
                                                {prod.id}
                                            </TableCell>
                                            <TableCell>{prod.title}</TableCell>
                                            <TableCell align="right">{prod.price}</TableCell>
                                            <TableCell>{prod.qty}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

const OrdersPage = () => {
    const  {user} = useAuth();
    const [orders, setOrders] = useState([])

    useEffect(() => {
        setOrders([]);
        getOrders().then((order) => {
            setOrders(order)
        })
    }, [])

    const getOrders = async () => {
        const ordersQuery = query(collection(db, "ordenes"), where("buyer.email", "==", user.email))
        const querySnapshot = await getDocs(ordersQuery)
        let ordersList = []
        querySnapshot.docs.forEach((doc) => {
            const order = {
                id: doc.id,
                dateOrder: doc.data().date,
                items: doc.data().items,
                total: doc.data().total
            }
            ordersList = [...ordersList, order]
        });
        return ordersList;
    }

    return (
        <Container  className= "containerStyle">
            {
                (orders.length === 0) &&
                <div>
                    <p className='parrafStyle'>No hay ordenes registradas ...</p>
                    <Link to='/'>
                        <button>Seguir comprando</button>
                    </Link>
                </div>
            }
            {
                (orders.length !== 0) &&
                < TableContainer component={Paper} >
                    <Table aria-label="collapsible table">
                        <TableHead>
                            <TableRow className="containerStyle">
                                <TableCell />
                                <TableCell className="containerStyle">Id Orden</TableCell>
                                <TableCell className="containerStyle" align="right">Fecha y Hora Orden</TableCell>
                                <TableCell className="containerStyle" align="right">Monto Total Orden ($)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orders.map((order) => (
                                <Row key={order.id} row={order} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer >
            }
      </Container>
    );

}

export default OrdersPage;